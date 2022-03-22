import mysql.connector
import servers.mysql_stuff.mysql_utils as mysql_utils

my_db = mysql.connector.connect(
    host=mysql_utils.HOST,
    user=mysql_utils.USER,
    password=mysql_utils.PASSWORD,
    database=mysql_utils.DB_NAME
)


def get_match(scout):
    """
    gets a "match id"
    :param scout: a scout (tuples)
    :return: a tuples containig (compName, matchType, matchNumber, teamNumber)
    """
    return scout[1], scout[2], scout[3], scout[4]


def get_teams_of_comp(db, compName):
    """
    *IMPORTANT* this function always works on the oneScouts table
    gets all the team numbers of a given comp
    :param db: the DB to search
    :param compName: name of the comp to search (str)
    :return: a set - containing the numbers of all the teams in the comp
    """
    my_cursor = db.cursor()
    table = 'oneScouts'
    sql = f"SELECT teamNumber FROM {table} WHERE compName = %s"

    my_cursor.execute(sql, (compName, ))

    my_result = my_cursor.fetchall()

    # remove duplicates
    my_result = set(my_result)

    teams = set()

    # remove tuple "wrapper"
    for team_tup in my_result:
        teams.add(team_tup[0])

    return teams


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


def scouts_to_dict(scouts):
    """
    :param scouts: a list of tuples of scouts - what you get from the sql query
    :return: a dictionary containing keys of classic inputs + capital S and pairs of arrays with the relevant values
    """
    # create dict with empty arrays
    my_dict = {'idS': [],
               'compNameS': [],
               'matchTypeS': [],
               'matchNumberS': [],
               'teamNumberS': [],
               'scouterNameS': [],
               'whenCapturedS': [],
               'scouterTeamNumberS': [],
               'ballsInUpperAutoS': [],
               'ballsInLowerAutoS': [],
               'ballsMissedAutoS': [],
               'passedLineS': [],
               'ballsHumanShotAutoS': [],
               'ballsHumanScoredAutoS': [],
               'autoMalfunctionS': [],
               'autoFreeTextS': [],
               'ballsInUpperTeleS': [],
               'ballsInLowerTeleS': [],
               'ballsMissedTeleS': [],
               'levelClimbedS': [],
               'climbSuccessfulS': [],
               'climbTimeS': [],
               'defensiveDefenseLevelS': [],
               'offensiveDefenseLevelS': [],
               'wasDefendedLevelS': [],
               'goodTeamMateLevelS': [],
               'wasBrokenS': [],
               'freeTextS': [],
               'generalImpressionS': [],
               'robotNoFunctionS': [],
               'systemNoFunctionS': []}

    # fill arrays in dict!
    matches_done = set()
    for scout in scouts:
        # check validity (not having an identical scout in terms of the match) - only add if valid
        this_match = get_match(scout)
        if this_match in matches_done:
            continue  # this will skip the iteration if the match already exists
        matches_done.add(this_match)
        # add values of scout to dict
        my_dict['idS'].append(scout[0])
        my_dict['compNameS'].append(scout[1])
        my_dict['matchTypeS'].append(scout[2])
        my_dict['matchNumberS'].append(scout[3])
        my_dict['teamNumberS'].append(scout[4])
        my_dict['scouterNameS'].append(scout[5])
        my_dict['whenCapturedS'].append(scout[6])
        my_dict['scouterTeamNumberS'].append(scout[7])
        my_dict['ballsInUpperAutoS'].append(scout[8])
        my_dict['ballsInLowerAutoS'].append(scout[9])
        my_dict['ballsMissedAutoS'].append(scout[10])
        my_dict['passedLineS'].append(scout[11])
        my_dict['ballsHumanShotAutoS'].append(scout[12])
        my_dict['ballsHumanScoredAutoS'].append(scout[13])
        my_dict['autoMalfunctionS'].append(scout[14])
        my_dict['autoFreeTextS'].append(scout[15])
        my_dict['ballsInUpperTeleS'].append(scout[16])
        my_dict['ballsInLowerTeleS'].append(scout[17])
        my_dict['ballsMissedTeleS'].append(scout[18])
        my_dict['levelClimbedS'].append(scout[19])
        my_dict['climbSuccessfulS'].append(scout[20])
        my_dict['climbTimeS'].append(scout[21])
        my_dict['defensiveDefenseLevelS'].append(scout[22])
        my_dict['offensiveDefenseLevelS'].append(scout[23])
        my_dict['wasDefendedLevelS'].append(scout[24])
        my_dict['goodTeamMateLevelS'].append(scout[25])
        my_dict['wasBrokenS'].append(scout[26])
        my_dict['freeTextS'].append(scout[27])
        my_dict['generalImpressionS'].append(scout[28])
        my_dict['robotNoFunctionS'].append(scout[29])
        my_dict['systemNoFunctionS'].append(scout[30])

    return my_dict


def scouts_to_results(scouts):
    """
    :param scouts: a list of tuples (each tuple a record of a scout)
    :return:
    """
    # if no results were found
    if not scouts:  # an empty list is false in python
        return {}, False
    # if got a legit result
    else:
        # can sort the list now...
        # ******************************ADD LATER***********************************
        # create dict with empty arrays
        my_dict = scouts_to_dict(scouts)
        # once the values from all the matches are added we can return the dict and true
        return my_dict, True


def get_comp_records(db, compName, teamNumber):
    """
    *IMPORTANT* this function always works on the oneScouts table
    :param db: the database from which to pull the
    scout
    :param compName: competition name - str
    :param teamNumber: team number - int
    :return: a dictionary with all the relevant details (keys are named like inputs only with an added capital S
    at the end, values are arrays with the values from all matches),a boolean value denoting whether a scout was found
    (if false the dictionary will be returned empty)
    """
    my_cursor = db.cursor()
    table = 'oneScouts'
    sql = f"SELECT * FROM {table} WHERE compName = %s and teamNumber = %s"

    my_cursor.execute(sql, (compName, teamNumber))

    scouts = my_cursor.fetchall()
    return scouts_to_results(scouts)


def get_team_records(db, teamNumber, compNameS=None):
    """
    *IMPORTANT* this function always works on the oneScouts table
    :param db: the database from which to pull the scout
    :param compNameS: a list containing competition names (of type str). the function will return all match data of the
    team in these competitions, in the event that the list is empty (default) then all competitions will be returned
    :param teamNumber: team number - int
    :return: a dictionary with all the relevant details (keys are named like inputs only with an added capital S
    at the end, values are arrays with the values from all relevant matches),a boolean value denoting whether a scout
    was found (if false the dictionary will be returned empty)
    """
    my_cursor = db.cursor()
    table = 'oneScouts'
    if not compNameS:
        # if we want data from all competitions

        sql = f"SELECT * FROM {table} WHERE teamNumber = %s"

        my_cursor.execute(sql, (teamNumber,))

        scouts = my_cursor.fetchall()
        return scouts_to_results(scouts)

    else:
        # if we want data from only some competitions
        sql = f"SELECT * FROM {table} WHERE teamNumber = %s AND ({'compName = %s OR' * len(compNameS)[:-2]})"

        my_cursor.execute(sql, (teamNumber + tuple(compNameS)))

        scouts = my_cursor.fetchall()
        return scouts_to_results(scouts)


def main():
    get_teams_of_comp(my_db, 'ISR DISTRICT #2')


if __name__ == '__main__':
    main()
