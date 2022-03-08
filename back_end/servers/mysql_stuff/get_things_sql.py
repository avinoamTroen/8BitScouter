import mysql.connector
import servers.mysql_stuff.mysql_utils as mysql_utils
import json

my_db = mysql.connector.connect(
    host=mysql_utils.HOST,
    user=mysql_utils.USER,
    password=mysql_utils.PASSWORD,
    database=mysql_utils.DB_NAME
)


def get_single_scout(db, compName, matchType, matchNumber, teamNumber):
    """
    *IMPORTANT* this function always works on the oneScouts table
    :param db: the database from which to pull the scout
    :param compName: competition name - str
    :param matchType: match type - str
    :param matchNumber: match number - int
    :param teamNumber: team number - int
    :return: a dictionary with all the relevant details, a boolean value denoting whether a scout was found
    (if false the dictionary will be returned empty)
    """
    my_cursor = db.cursor()
    table = 'oneScouts'
    sql = f"SELECT * FROM {table} WHERE compName = %s and matchType = %s and " \
          f"matchNumber = %s and teamNumber = %s"

    my_cursor.execute(sql, (compName, matchType, matchNumber, teamNumber))

    my_result = my_cursor.fetchone()

    # need to empty my_cursor
    my_cursor.fetchall()

    # if no results were found
    if my_result is None:
        return {}, False
    # if got a legit result
    else:
        # notice that id is one of the things returned
        my_dict = {'id': my_result[0],
                   'compName': my_result[1],
                   'matchType': my_result[2],
                   'matchNumber': my_result[3],
                   'teamNumber': my_result[4],
                   'scouterName': my_result[5],
                   'whenCaptured ': my_result[6],
                   'scouterTeamNumber': my_result[7],
                   'ballsInUpperAuto': my_result[8],
                   'ballsInLowerAuto': my_result[9],
                   'ballsMissedAuto': my_result[10],
                   'passedLine': my_result[11],
                   'ballsHumanShotAuto': my_result[12],
                   'ballsHumanScoredAuto': my_result[13],
                   'autoMalfunction': my_result[14],
                   'autoFreeText': my_result[15],
                   'ballsInUpperTele': my_result[16],
                   'ballsInLowerTele': my_result[17],
                   'ballsMissedTele': my_result[18],
                   'levelClimbed': my_result[19],
                   'climbSuccessful': my_result[20],
                   'climbTime': my_result[21],
                   'defensiveDefenseLevel': my_result[22],
                   'offensiveDefenseLevel': my_result[23],
                   'wasDefendedLevel': my_result[24],
                   'goodTeamMateLevel': my_result[25],
                   'wasBroken': my_result[26],
                   'freeText': my_result[27],
                   'generalImpression': my_result[28],
                   'robotNoFunction': my_result[29],
                   'systemNoFunction': my_result[30]
                   }

        return my_dict, True


def get_comp_records():
    pass


def main():
    my_result = get_single_scout(my_db, 'ISR DISTRICT #2', 'Qualifications', '7', '1690')
    print(my_result)
    print('-----------------------')
    for x in my_result[0]:
        print(x, my_result[0][x])
    print('>>>>>>>>>>>>>>>>>>>>>>>>')


if __name__ == '__main__':
    main()
