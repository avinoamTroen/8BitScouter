import store from "../my_redux/store";
import { clearedCurrentScout, setCompName, setMatchType, setScouterName, setScouterTeamNumber } from "../my_redux/currentScouterActions";

// this func will clear all fields aside from several pregame fields
// these pregame fields it will leave alone

const resetScout = () => {
    const tempScouterTeamNumber = store.getState().currentScout.scouterTeamNumber
    const tempScouterName = store.getState().currentScout.scouterName
    const tempCompName = store.getState().currentScout.compName
    const tempMatchType = store.getState().currentScout.matchType
    store.dispatch(clearedCurrentScout())
    store.dispatch(setScouterTeamNumber(tempScouterTeamNumber))
    store.dispatch(setScouterName(tempScouterName))
    store.dispatch(setCompName(tempCompName))
    store.dispatch(setMatchType(tempMatchType))
}
export default resetScout;