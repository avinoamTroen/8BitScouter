lines = """case actionTypes.ballsInUpperAuto_SET:
    return produce(state, stateCopy => {
        stateCopy.ballsInUpperAuto = action.payload.ballsInUpperAuto;
        return stateCopy;
    });
case actionTypes.ballsInLowerAuto_SET:
    return produce(state, stateCopy => {
        stateCopy.ballsInLowerAuto = action.payload.ballsInLowerAuto;
        return stateCopy;
    });
case actionTypes.ballsMissedAuto_SET:
    return produce(state, stateCopy => {
        stateCopy.ballsMissedAuto = action.payload.ballsMissedAuto;
        return stateCopy;
    });
case actionTypes.ballsInUpperTele_SET:
    return produce(state, stateCopy => {
        stateCopy.ballsInUpperTele = action.payload.ballsInUpperTele;
        return stateCopy;
    });
case actionTypes.ballsInLowerTele_SET:
    return produce(state, stateCopy => {
        stateCopy.ballsInLowerTele = action.payload.ballsInLowerTele;
        return stateCopy;
    });
case actionTypes.ballsMissedTele_SET:
    return produce(state, stateCopy => {
        stateCopy.ballsMissedTele = action.payload.ballsMissedTele;
        return stateCopy;
    });
""".splitlines()


cases = []
current = ""
for i, line in enumerate(lines):
    current += line + "\n"
    if (i+1)%5 == 0:
        cases.append(current[:-1])
        current = ""

for case in cases:
    copyCase = case
    copyCase = copyCase.replace("= action", "+= action").replace("SET", "INC")
    copyCase = copyCase[:copyCase.find("payload") + 8] + "numToIncrement" + copyCase[copyCase.find(";"):]
    print(copyCase)

    case = case.replace("= action", "+= action").replace("SET", "DEC")
    case = case[:case.find("payload") + 8] + "numToDecrement" + case[case.find(";"):]
    print(case)
    print("")


