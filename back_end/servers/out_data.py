# all functions in this module which return data from sql will return a
# jsonified object which can be sent


# *****************************remove defaults*****************************************
# remove ""
def remove_all_occurrences(list_obj, value):
    """
    generic helper function to remove unwanted default values
    :param list_obj:
    :param value:
    :return:
    """
    while value in list_obj:
        list_obj.remove(value)


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
# return average (of relevant data) of scouts - a json
def get_avg(data_dict, num_of_rounds):
    # cut data dict by num of rounds (if less than don't touch)

    # remove garbage values
    remove_unused_values(data_dict)

    # make calculations and update avg_dict

# return min/max - a json


# return time past adjusted score - a json

# **********************************  Match expectation  *************************************
# return


# *************************************  Ranked Top Teams  ***************************************************

# ********************************* Comp expectation ***************************************
