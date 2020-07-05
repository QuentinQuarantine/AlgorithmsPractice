# http://agilekatas.co.uk/katas/SnakesAndLadders-Kata


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
