import mysql.connector
import mysql_utils

my_db = mysql.connector.connect(
    host=mysql_utils.HOST,
    user=mysql_utils.USER,
    password=mysql_utils.PASSWORD,
    database=mysql_utils.DB_NAME
)


def insert_record_oneScout(db, vals):
    my_cursor = db.cursor()
    # cols are the parameters
    cols = "('compName', 'matchType', 'matchNumber', 'teamNumber', 'scouterName', 'whenCaptured', " \
           "'scouterTeamNumber', 'driverStation', 'startPlace', 'ballsInUpperAuto', 'ballsInLowerAuto', " \
           "'ballsMissedAuto', 'passedLine', 'ballsHumanShotAuto', 'ballsHumanScoredAuto', 'whichBallsCollected', " \
           "'autoMalfunction', 'autoFreeText', 'ballsInUpperTele', 'ballsInLowerTele', 'ballsMissedTele', " \
           "'levelClimbed', 'climbSuccessful', 'climbTime', 'defensiveDefenseLevel', 'offensiveDefenseLevel', " \
           "'wasDefendedLevel', 'shootingLocations', 'collectingLocations', 'goodTeamMateLevel', 'wasBroken', " \
           "'freeText', 'generalImpression', 'robotNoFunction', 'systemNoFunction', ) "
    # vals are the values of the record we now want to insert
    # the param vals will be of type tuples and str will make it use able for us
    vals = str(vals)
    sql = f"INSERT INTO oneScouts {cols} VALUES {vals}"

    my_cursor.execute(sql)

    db.commit()
    print(my_cursor.rowcount, "record inserted.")


def main():
    val = ('7845t', 'test1', '-1', 15)
    insert_record_oneScout(my_db, val)


if __name__ == '__main__':
    main()
