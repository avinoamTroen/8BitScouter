# this module will have mainly names and commands for mysql code so that the names
# and commands can be centralized

# imports
import mysql.connector

# connection to server
HOST = "localhost"
USER = "root"
PASSWORD = "sMqYl326337995"


DB_NAME = "scouting_8bit"


def get_all_databases():
    """
    :return: a list of all the databases on the server computer
    """
    my_db = mysql.connector.connect(
        host=HOST,
        user=USER,
        password=PASSWORD
    )

    my_cursor = my_db.cursor()

    query = "SHOW DATABASES "
    my_cursor.execute(query)

    list_of_dbs = []

    for db in my_cursor:
        list_of_dbs.append(db)
    return list_of_dbs
