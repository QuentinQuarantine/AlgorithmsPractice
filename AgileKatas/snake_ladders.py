# http://agilekatas.co.uk/katas/SnakesAndLadders-Kata

from random import randint

def move(state, dice_value):
    """
    params:
    state: int - player's current position in the board
    dice_value: int - amount to move on the board

    return: int - state after movement
    """
    return state + dice_value


def reset():
    return 1

def die_roll():
    """
    return: int - amount of steps to take in the board
    """
    return randint(1, 6)
