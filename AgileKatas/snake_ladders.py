# http://agilekatas.co.uk/katas/SnakesAndLadders-Kata

from random import randint


def move(current_state, dice_value):
    """
    params:
    state: int - player's current position in the board
    dice_value: int - amount to move on the board

    return: int - state after movement
    """

    new_state = current_state + dice_value

    if new_state > 100:
        return current_state
    return new_state


def reset():
    return 1


def die_roll():
    """
    return: int - amount of steps to take in the board
    """
    return randint(1, 6)


def has_won(state):
    return state == 100


def play(state):
    die = die_roll()
    state = move(state, die)
    return has_won(state)
