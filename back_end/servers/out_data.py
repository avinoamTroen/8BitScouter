# all functions in this module which return data from sql will return a
# jsonified object which can be sent


# *****************************remove defaults*****************************************
# generic helper function to remove all of a value from a list
def remove_all_occurrences(list_obj, value):
    """
    generic helper function to remove unwanted default values
    :param list_obj:
    :param value:
    :return:
    """
    while value in list_obj:
        list_obj.remove(value)


def cut_dict(data_dict, num_of_rounds):
    """
    takes a data dict of scouts (each value in dict is a list of values for the particular field) and cuts the
    dict to have only the latest results (latest num_of_rounds results)
    :param data_dict: data dict of scouts
    :param num_of_rounds: int - cuts by this
    :return: None
    """
    for key in data_dict:
        if len(data_dict[key]) > num_of_rounds:
            data_dict[key] = data_dict[key][-num_of_rounds:]


# remove default unuseful data like -1
def remove_unused_values(data_dict):
    """
    clears a dict with info from scouts of deafault - garbage data
    :param data_dict: dict of scouts in which each value is a list
    :return: None
    """
    # Defaults
    DEF_STR = ""
    DEF_NUM_CHOICE = -1
    DEF_ZERO = 0
    DEF_TIME = "1989-03-20 00:00:00"

    # remove irrelevant data
    remove_all_occurrences(data_dict['compNameS'], DEF_STR)
    remove_all_occurrences(data_dict['matchTypeS'], DEF_STR)
    remove_all_occurrences(data_dict['matchNumberS'], DEF_ZERO)
    remove_all_occurrences(data_dict['teamNumberS'], DEF_ZERO)
    remove_all_occurrences(data_dict['scouterNameS'], DEF_STR)
    remove_all_occurrences(data_dict['whenCapturedS'], DEF_TIME)
    remove_all_occurrences(data_dict['scouterTeamNumberS'], DEF_ZERO)
    remove_all_occurrences(data_dict['autoFreeTextS'], DEF_STR)
    remove_all_occurrences(data_dict['climbTimeS'], DEF_ZERO)
    remove_all_occurrences(data_dict['defensiveDefenseLevelS'], DEF_NUM_CHOICE)
    remove_all_occurrences(data_dict['offensiveDefenseLevelS'], DEF_NUM_CHOICE)
    remove_all_occurrences(data_dict['wasDefendedLevelS'], DEF_NUM_CHOICE)
    remove_all_occurrences(data_dict['goodTeamMateLevelS'], DEF_NUM_CHOICE)
    remove_all_occurrences(data_dict['wasBrokenS'], DEF_NUM_CHOICE)
    remove_all_occurrences(data_dict['freeTextS'], DEF_STR)
    remove_all_occurrences(data_dict['generalImpressionS'], DEF_NUM_CHOICE)


# *********************************  "Expected" next round  ****************************************
def avg(num_list):
    """
    :param num_list: a list of numbers
    :return: the average, if the list is empty - will return 0
    """
    if num_list:
        return sum(num_list) / len(num_list)
    # returns 0 if list is empty
    return 0


# return average (of relevant data) of scouts - a json
def get_avg(data_dict, num_of_rounds):
    # cut data dict by num of rounds (if less than don't touch)
    cut_dict(data_dict, num_of_rounds)
    # remove garbage values
    remove_unused_values(data_dict)

    # make calculations and update avg_dict
    avg_dict = dict()
    # not sending idS, compNames, matchTypes, matchNumbers, scouterNames, whenCaptureds, scouterTeamNumbers
    # in the results here
    # notice the format things are sent in as it will be crucial when unpacking
    if data_dict['teamNumberS']:  # checks it's not an empty list
        avg_dict['teamNumber'] = data_dict['teamNumberS'][0]  # getting 0 cuz they are all meant to be the same

    avg_dict['ballsInUpperAuto'] = avg(data_dict['ballsInUpperAutoS'])
    avg_dict['ballsInLowerAuto'] = avg(data_dict['ballsInLowerAutoS'])
    avg_dict['ballsMissedAuto'] = avg(data_dict['ballsMissedAutoS'])

    avg_dict['passedLine'] = sum(data_dict['passedLineS'])

    avg_dict['ballsHumanShotAuto'] = sum(data_dict['ballsHumanShotAutoS'])
    avg_dict['ballsHumanScoredAuto'] = sum(data_dict['ballsHumanScoredAutoS'])
    avg_dict['autoMalfunction'] = sum(data_dict['autoMalfunctionS'])

    avg_dict['autoFreeText'] = '\n'.join(data_dict['autoFreeTextS'])

    avg_dict['ballsInUpperTele'] = avg(data_dict['ballsInUpperTeleS'])
    avg_dict['ballsInLowerTele'] = avg(data_dict['ballsInLowerTeleS'])
    avg_dict['ballsMissedTele'] = avg(data_dict['ballsMissedTeleS'])

    climbs = data_dict['levelClimbedS']
    avg_dict['levelClimbed'] = [climbs.count(0), climbs.count(1), climbs.count(2), climbs.count(3), climbs.count(4)]

    avg_dict['climbSuccessful'] = sum(data_dict['climbSuccessfulS'])
    avg_dict['climbTime'] = sum(data_dict['climbTimeS'])

    avg_dict['defensiveDefenseLevel'] = avg(data_dict['defensiveDefenseLevelS'])
    avg_dict['offensiveDefenseLevel'] = avg(data_dict['offensiveDefenseLevelS'])
    avg_dict['wasDefendedLevel'] = avg(data_dict['wasDefendedLevelS'])
    avg_dict['goodTeamMateLevel'] = avg(data_dict['goodTeamMateLevelS'])
    avg_dict['wasBroken'] = avg(data_dict['wasBrokenS'])

    avg_dict['freeText'] = '\n'.join(data_dict['freeTextS'])

    avg_dict['generalImpression'] = avg(data_dict['generalImpressionS'])
    avg_dict['robotNoFunction'] = sum(data_dict['robotNoFunctionS'])
    avg_dict['systemNoFunction'] = sum(data_dict['systemNoFunctionS'])
    return avg_dict

# return min/max - a json


# return time past adjusted score - a json

# **********************************  Match expectation  *************************************
# return


# *************************************  Ranked Top Teams  ***************************************************

# ********************************* Comp expectation ***************************************
