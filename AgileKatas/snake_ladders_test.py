import unittest
from AgileKatas.snake_ladders import move, reset


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
