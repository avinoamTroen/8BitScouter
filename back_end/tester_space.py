paramNames = """compName
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
print('(', end='')
for n in paramNames:
    if n[0:2] != '//':
        print(f"json_data['{n}'], ", end="")
print(')', end='')
