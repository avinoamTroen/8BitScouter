IPADDR = "127.0.0.1"
PORT = 3173
MAX_MSG_SIZE = 1024


class OneScout:
    def __init__(self, team_name, comp, round_name, alliance, driving, balls_collected, balls_in_outer, endgame_climbed, free_text):
        self.team_name = team_name
        self.comp = comp
        self.round = round_name
        self.alliance = alliance
        self.driving = driving
        self.balls_collected = balls_collected
        self.balls_in_outer = balls_in_outer
        self.endgame_climbed = endgame_climbed
        self.free_text = free_text
