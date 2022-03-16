paramNames = """id
compName
matchType
matchNumber
teamNumber
scouterName
whenCaptured
scouterTeamNumber
ballsInUpperAuto
ballsInLowerAuto
ballsMissedAuto
passedLine
ballsHumanShotAuto
ballsHumanScoredAuto
autoMalfunction
autoFreeText
ballsInUpperTele
ballsInLowerTele
ballsMissedTele
levelClimbed
climbSuccessful
climbTime
defensiveDefenseLevel
offensiveDefenseLevel
wasDefendedLevel
goodTeamMateLevel
wasBroken
freeText
generalImpression
robotNoFunction
systemNoFunction
""".splitlines()
c = 0
for n in paramNames:
    if n[0:2] != '//':
        print(f"avg_dict['{n}'] = data_dict['{n}S']  # CHANGE_THIS", end="\n")
        c += 1
