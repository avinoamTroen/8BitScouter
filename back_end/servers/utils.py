IPADDR = "127.0.0.1"
PORT = 3173
HOST_NAME = "localhost"
PATH_FOR_INPUT = '/input_server/one_scout/json'
PATH_FOR_SCOUT_OUTPUT = '/output_server/one_scout/json'

class OneScout:
    def __init__(self, team_name="7845", comp="test", round="0", alliance="BLUE", auto_intake=0,
                 auto_bottom=0, auto_top=0, tele_intake=0, tele_bottom=0, tele_top=0, endgame_climbed=0, driving=5,
                 defense=5, free_text=""):
        self.team_name = team_name
        self.comp = comp
        self.round = round
        self.alliance = alliance

        self.auto_intake = auto_intake
        self.auto_bottom = auto_bottom
        self.auto_top = auto_top

        self.tele_intake = tele_intake
        self.tele_bottom = tele_bottom
        self.tele_top = tele_top

        self.endgame_climbed = endgame_climbed

        self.driving = driving
        self.defense = defense
        self.free_text = free_text

        # create proto version
        self.proto_version = my_proto_pb2.game()
        self.update_proto_version()

    @classmethod
    def from_proto(cls, proto_version):
        p = proto_version  # p is just shorter
        return cls(team_name=p.team_number, comp=p.comp, round=p.round, alliance=p.alliance_color,
                   auto_intake=p.intake_auto, auto_bottom=p.bottom_auto, auto_top=p.top_auto, tele_intake=p.intake_tele,
                   tele_bottom=p.bottom_tele, tele_top=p.top_tele, endgame_climbed=p.climb_level, driving=p.driving,
                   defense=p.defense, free_text=p.free_text)

    def update_proto_version(self):
        p_self = self.proto_version

        p_self.team_number = self.team_name
        p_self.comp = self.comp
        p_self.round = self.round
        p_self.alliance_color = self.alliance

        p_self.intake_auto = self.auto_intake
        p_self.bottom_auto = self.auto_bottom
        p_self.top_auto = self.auto_top

        p_self.intake_tele = self.tele_intake
        p_self.bottom_tele = self.tele_bottom
        p_self.top_tele = self.tele_top

        p_self.climb_level = self.endgame_climbed

        p_self.driving = self.driving
        p_self.defense = self.defense
        p_self.free_text = self.free_text
