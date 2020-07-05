import unittest
from unittest import mock
from AgileKatas.snake_ladders import (
    move, reset,
    die_roll, has_won,
    play, determine_player_order,
    next_turn
)


class TestSum(unittest.TestCase):
    # move
    def test_initial_state(self):
        self.assertEqual(reset(), 1)

    def test_initial_movement(self):
        state = reset()
        self.assertEqual(move(state, 3), 4)

    def test_move_twice(self):
        state = reset()
        state = move(state, 3)
        self.assertEqual(move(state, 4), 8)

    def test_cannot_move_if_state_greater_than_100(self):
        self.assertEqual(
            move(97, 4),
            97
        )

    def test_sliding_down_snake_if_landing_on_top(self):
        self.assertEqual(
            move(33, 4, [(37, 12)]),
            12
        )

    def test_not_sliding_up_snake_if_landing_on_bottom(self):
        self.assertEqual(
            move(8, 4, [(37, 12)]),
            12
        )

    def test_climbing_up_ladder_if_landing_on_bottom(self):
        self.assertEqual(
            move(1, 1, [(37, 12)], [(2, 12)]),
            12)

    def test_not_climbing_down_ladder_if_landing_on_top(self):
        self.assertEqual(
            move(8, 4, [(37, 12)], [(2, 12)]),
            12
        )

    # die_roll
    def test_six_sides_die_roll(self):
        for _ in range(50):
            with self.subTest():
                self.assertIn(die_roll(), [1, 2, 3, 4, 5, 6])

    def test_value_rolled(self):
        die_value = die_roll()
        state_previous = reset()
        state_later = move(state_previous, die_value)
        self.assertEqual(state_previous + die_value, state_later)

    # has_won
    @mock.patch('AgileKatas.snake_ladders.randint')
    def test_has_won(self, mocked_randint):
        mocked_randint.return_value = 3
        self.assertTrue(play(97))

    @mock.patch('AgileKatas.snake_ladders.randint')
    def test_has_not_won(self, mocked_randint):
        mocked_randint.return_value = 4
        self.assertFalse(play(97))

    # determine_player_order
    @mock.patch('AgileKatas.snake_ladders.randint')
    def test_determine_player_order_player_2_goes_first(self, mocked_randint):
        mocked_randint.side_effect = [1, 6]
        players = ['Player_1', 'Player_2']

        player_order = determine_player_order(players)

        self.assertEqual(
            player_order,
            ['Player_2', 'Player_1']
        )

    @mock.patch('AgileKatas.snake_ladders.randint')
    def test_determine_player_order_player_1_goes_first(self, mocked_randint):
        mocked_randint.side_effect = [6, 1]
        players = ['Player_1', 'Player_2']

        player_order = determine_player_order(players)

        self.assertEqual(
            player_order,
            ['Player_1', 'Player_2']
        )

    @mock.patch('AgileKatas.snake_ladders.randint')
    def test_determine_player_order_equal_dice_roll_player_2_goes_first(self, mocked_randint):
        mocked_randint.side_effect = [6, 6, 1, 6]
        players = ['Player_1', 'Player_2']

        player_order = determine_player_order(players)

        self.assertEqual(
            player_order,
            ['Player_2', 'Player_1']
        )

    @mock.patch('AgileKatas.snake_ladders.randint')
    def test_determine_player_order_equal_dice_roll_player_1_goes_first(self, mocked_randint):
        mocked_randint.side_effect = [6, 6, 6, 1]
        players = ['Player_1', 'Player_2']

        player_order = determine_player_order(players)

        self.assertEqual(
            player_order,
            ['Player_1', 'Player_2']
        )
    # next_turn

    def test_next_turn(self):
        self.assertEqual(
            next_turn(0, ['Player_1', 'Player_2']),
            'Player_2'
        )
        self.assertEqual(
            next_turn(1, ['Player_1', 'Player_2']),
            'Player_1'
        )
