txt=""" p_self = self.proto_version

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
        p_self.free_text = self.free_text"""

new_txt1 = txt.replace("self", "this")
new_txt2 = "\n".join([line + ";" for line in new_txt1.splitlines()]).replace("\n;", "\n")
print(new_txt2)