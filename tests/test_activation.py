import importlib.util
from pathlib import Path
import unittest
from unittest.mock import patch, call

spec = importlib.util.spec_from_file_location("activation", Path(__file__).resolve().parents[1] / "deploy/server/activate-release.py")
activation = importlib.util.module_from_spec(spec)
spec.loader.exec_module(activation)


class ActivationTests(unittest.TestCase):
    def test_failed_new_service_restores_previous_release(self):
        new, old = Path("/new"), Path("/previous")
        with patch.object(activation, "switch") as switch, patch.object(activation, "wait_for_service", side_effect=[RuntimeError("unhealthy"), None]) as wait:
            with self.assertRaisesRegex(RuntimeError, "unhealthy"):
                activation.activate(new, "a" * 40, old, {})
        self.assertEqual(switch.call_args_list, [call(new), call(old)])
        self.assertEqual(wait.call_args_list, [call("a" * 40), call()])

    def test_wrong_public_commit_also_rolls_back(self):
        new, old = Path("/new"), Path("/previous")
        with patch.object(activation, "switch") as switch, patch.object(activation, "wait_for_service"), patch.object(activation, "local"), patch.object(activation, "gateway", return_value=b'{"release":"wrong"}'):
            with self.assertRaises(AssertionError):
                activation.activate(new, "a" * 40, old, {})
        self.assertEqual(switch.call_args_list, [call(new), call(old)])
