# http://agilekatas.co.uk/katas/SnakesAndLadders-Kata

from random import randint


def move(current_state, dice_value, snakes=None):
    """
    params:
    state: int - player's current position in the board
    dice_value: int - amount to move on the board
    snakes: list = (start, end): represents a snake connecting squares 'start' and 'end'

    return: int - state after movement
    """
    if not snakes:
        snakes = []

    new_state = current_state + dice_value

    if new_state > 100:
        return current_state

    for (head, tail) in snakes:
        if head == new_state:
            return tail
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
