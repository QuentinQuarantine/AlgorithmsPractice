# http://agilekatas.co.uk/katas/SnakesAndLadders-Kata

from random import randint


def move(current_state, dice_value, snakes=None, ladders=None):
    """
    params:
    state: int - player's current position in the board
    dice_value: int - amount to move on the board
    snakes: list = (head, tail): represents a snake connecting squares 'head' and 'tail'
    ladders: list = (bottom, top): represents a ladder connecting squares 'bottom' and 'top'

    return: int - state after movement
    """
    if not snakes:
        snakes = []

    if not ladders:
        ladders = []

    new_state = current_state + dice_value

    if new_state > 100:
        return current_state

    for (head, tail) in snakes:
        if head == new_state:
            print(f"Oh no! I am falling from {head} to {tail}.")
            return tail

    for (bottom, top) in ladders:
        if bottom == new_state:
            print(f"Uhul! I am climbing a ladder from {bottom} to {top}.")
            return top

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
    print(f'Die value: {die}')
    state = move(state, die)
    return has_won(state)


def next_turn(current_player, players):
    """
    params: 
    current_player: number - index of the current player's turn in the players list
    players: list of players
    """
    return players[1 if current_player == 0 else 0]


def demo_gameplay(players, number_of_turns=10):
    players_order = determine_player_order(players)
    players_state = {player: reset() for player in players}
    snakes = [(20, 10), (99, 1), (45, 12), (73, 51)]
    ladders = [(13, 44), (25, 39), (7, 18), (4, 68)]
    for turn in range(number_of_turns):
        print(f'Turn:{turn}')
        players_state[players_order[0]] = move(players_state[players_order[0]], die_roll(), snakes=snakes, ladders=ladders)
        print(f'{players_order[0]} moved to {players_state[players_order[0]]}')
        players_state[players_order[1]] = move(players_state[players_order[1]], die_roll(), snakes=snakes, ladders=ladders)
        print(f'{players_order[1]} moved to {players_state[players_order[1]]}')


def determine_player_order(players):
    players_dict = {}
    while True:
        for player in players:
            players_dict[player] = die_roll()
        if players_dict[players[0]] != players_dict[players[1]]:
            break

    return sorted(players, key=lambda player: players_dict[player], reverse=True)
