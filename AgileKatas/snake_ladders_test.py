import unittest
from AgileKatas.snake_ladders import move, reset, die_roll


class TestSum(unittest.TestCase):

    def test_initial_state(self):
        self.assertEqual(reset(), 1)

    def test_initial_movement(self):
        state = reset()
        self.assertEqual(move(state, 3), 4)

    def test_move_twice(self):
        state = reset()
        state = move(state, 3)
        self.assertEqual(move(state, 4), 8)

    def test_six_sides_die_roll(self):
        for _ in range(50):
            with self.subTest():
                self.assertIn(die_roll(), [1, 2, 3, 4, 5, 6])

    def test_value_rolled(self):
        die_value = die_roll()
        state_previous = reset()
        state_later = move(state_previous, die_value)
        self.assertEqual(state_previous + die_value, state_later)