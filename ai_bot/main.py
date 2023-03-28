from flask import Flask, jsonify, request
from easyAI import TwoPlayerGame, AI_Player, Negamax
from easyAI.Player import Human_Player
from flask_cors import CORS


class TicTacToe(TwoPlayerGame):
    def __init__(self, players):
        self.players = players
        self.board = [0 for i in range(9)]
        self.current_player = 1

    def possible_moves(self):
        return [i for i, e in enumerate(self.board) if e == 0]

    def make_move(self, move):
        self.board[int(move)] = self.current_player
        return move

    def unmake_move(self, move):
        self.board[int(move)] = 0

    def lose(self):
        return any(
            [
                all([(self.board[c] == self.opponent_index) for c in line])
                for line in [
                    [0, 1, 2],
                    [3, 4, 5],
                    [6, 7, 8],
                    [0, 3, 6],
                    [1, 4, 7],
                    [2, 5, 8],
                    [0, 4, 8],
                    [2, 4, 6],
                ]
            ]
        )

    def is_over(self):
        return (self.possible_moves() == []) or self.lose()

    def show(self):
        print(
            "\n"
            + "\n".join(
                [
                    " ".join([[".", "O", "X"][self.board[3 * j + i]]
                             for i in range(3)])
                    for j in range(3)
                ]
            )
        )

    def scoring(self):
        return -100 if self.lose() else 0


app = Flask(__name__)
CORS(app)
ai_algo = Negamax(6)
game = TicTacToe([Human_Player(), AI_Player(ai_algo)])


@app.route('/play', methods=['POST'])
def play():
    data = request.json  # get the JSON data from the request body
    move = data.get('move')  # get the 'id' parameter from the JSON data
    game.make_move(move)
    if not game.is_over():
        ai_player = game.players[1]
        ai_move = ai_player.ask_move(game)
        ai_step = game.make_move(ai_move)
    return jsonify({'game_state': game.show(), 'game_over': game.is_over(), 'win': game.lose(), "move": ai_step})


if __name__ == '__main__':
    # ai_algo = Negamax(6)
    # TicTacToe([Human_Player(), AI_Player(ai_algo)]).play()
    app.run()
