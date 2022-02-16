import { game } from './my_proto_pb';

export default class oneScout {
    constructor(team_name = "0", comp = "", round = "0", alliance = "", auto_intake = 0,
        auto_bottom = 0, auto_top = 0, tele_intake = 0, tele_bottom = 0, tele_top = 0, endgame_climbed = 0, driving = 0,
        defense = 0, free_text = "") {
        this.team_name = team_name;
        this.comp = comp;
        this.round = round;
        this.alliance = alliance;

        this.auto_intake = auto_intake;
        this.auto_bottom = auto_bottom;
        this.auto_top = auto_top;

        this.tele_intake = tele_intake;
        this.tele_bottom = tele_bottom;
        this.tele_top = tele_top;

        this.endgame_climbed = endgame_climbed;

        this.driving = driving;
        this.defense = defense;
        this.free_text = free_text;

        // create proto version
        this.proto_version = new game();
        this.update_proto_version();
        console.log(typeof tele_bottom);
    }

    update_proto_version() {
        p_this = this.proto_version;

        p_this.team_number = this.team_name;
        p_this.comp = this.comp;
        p_this.round = this.round;
        p_this.alliance_color = this.alliance;

        p_this.intake_auto = this.auto_intake;
        p_this.bottom_auto = this.auto_bottom;
        p_this.top_auto = this.auto_top;

        p_this.intake_tele = this.tele_intake;
        p_this.bottom_tele = this.tele_bottom;
        p_this.top_tele = this.tele_top;

        p_this.climb_level = this.endgame_climbed;

        p_this.driving = this.driving;
        p_this.defense = this.defense;
        p_this.free_text = this.free_text;
    }
}