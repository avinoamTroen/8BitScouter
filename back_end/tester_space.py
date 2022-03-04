paramNames = """// metadata
compName
matchType
matchNumber
teamNumber
scouterName
whenCaptured
scouterTeamNumber
driverStation
// autonomous
startPlace
ballsInUpperAuto
ballsInLowerAuto
ballsMissedAuto
passedLine
ballsHumanShotAuto
ballsHumanScoredAuto
whichBallsCollected
autoMalfunction
autoFreeText
// tele-op
ballsInUpperTele
ballsInLowerTele
ballsMissedTele
// end game
levelClimbed
climbSuccessful
climbTime
// post game
defensiveDefenseLevel
offensiveDefenseLevel
wasDefendedLevel
shootingLocations
collectingLocations
goodTeamMateLevel
wasBroken
freeText
generalImpression
// post game flags
robotNoFunction
systemNoFunction
""".splitlines()
print('(', end='')
for n in paramNames:
    if n[0:2] != '//':
        print(f"'{n}', ", end="")
print(')', end='')