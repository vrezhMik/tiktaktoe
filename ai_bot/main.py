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
        return [i + 1 for i, e in enumerate(self.board) if e == 0]

    def make_move(self, move):
        self.board[int(move) - 1] = self.current_player
        return int(move) - 1

    def lose(self):
        return any(
            [
                all([(self.board[c - 1] == self.opponent_index) for c in line])
                for line in [
                    [1, 2, 3],
                    [4, 5, 6],
                    [7, 8, 9],
                    [1, 4, 7],
                    [2, 5, 8],
                    [3, 6, 9],
                    [1, 5, 9],
                    [3, 5, 7],
                ]
            ]
        )

    def is_over(self):
        return (self.possible_moves() == []) or self.lose()

    def scoring(self):
        return -100 if self.lose() else 0

    def reset(self):
        self.board = [0 for i in range(9)]


app = Flask(__name__)
CORS(app)
ai_algo = Negamax(6)
game = TicTacToe([Human_Player(), AI_Player(ai_algo)])


@app.route('/play', methods=['POST'])
def play():
    data = request.json
    move = data.get('move')
    game_status = data.get('game')
    if not game_status:
        game.reset()
    else:
        game.current_player = 1
        game.make_move(move)
        ai_step = None
        if not game.is_over():
            ai_move = ai_algo(game)
            game.current_player = 2
            ai_step = game.make_move(ai_move)
        data = {'game_over': game.is_over(),
                'win': game.lose()}
        if not ai_step and ai_step != 0:
            game.reset()
        else:
            data["move"] = ai_step
    return jsonify(data)


if __name__ == '__main__':
    app.run()
