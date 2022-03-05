import mysql.connector
from servers.mysql_stuff import mysql_utils

my_db = mysql.connector.connect(
    host=mysql_utils.HOST,
    user=mysql_utils.USER,
    password=mysql_utils.PASSWORD,
    database=mysql_utils.DB_NAME
)


def insert_record_oneScout(db, vals):
    my_cursor = db.cursor()
    # cols are the parameters
    cols = "(compName, matchType, matchNumber, teamNumber, scouterName,whenCaptured,  scouterTeamNumber, " \
           "ballsInUpperAuto, ballsInLowerAuto, ballsMissedAuto, passedLine, ballsHumanShotAuto, " \
           "ballsHumanScoredAuto, autoMalfunction, " \
           "autoFreeText, ballsInUpperTele, ballsInLowerTele, ballsMissedTele, levelClimbed, climbSuccessful, " \
           "climbTime, defensiveDefenseLevel, offensiveDefenseLevel, wasDefendedLevel, " \
           "goodTeamMateLevel, wasBroken, freeText, generalImpression, robotNoFunction, systemNoFunction) "

    place_holders = "(%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, " \
                    "%s, %s, %s, %s, %s, %s, %s, %s, %s, %s) "
    sql = f"INSERT INTO oneScouts {cols} VALUES {place_holders}"

    my_cursor.execute(sql, vals)

    db.commit()
    print(my_cursor.rowcount, "record inserted.")


def main():
    val = ('7845t', 'test1', '-1', 15)
    insert_record_oneScout(my_db, val)


if __name__ == '__main__':
    main()
