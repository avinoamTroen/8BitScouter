# Avinoam Troen
# input_data_to_mysql

def insert_record_oneScout(db, values):
    """
    inserts a single scout into the DB
    :param db: DB connection to enter data into
    :param values: values of oneScout (a tuple)
    :return: none
    """
    # get cursor
    my_cursor = db.cursor()

    # prepare sql query
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

    # execute sql
    my_cursor.execute(sql, values)

    # commit changes to DB
    db.commit()

    # log insertion after success
    print('insert_record_oneScout:', my_cursor.rowcount, "record inserted.")


def main():
    pass


if __name__ == '__main__':
    main()
