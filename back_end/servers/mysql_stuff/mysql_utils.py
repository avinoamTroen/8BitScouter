# this module will have mainly names and commands for mysql code so that the names
# and commands can be centralized

# imports
import mysql.connector

# connection to server
HOST = "localhost"
USER = "root"
PASSWORD = "sMqYl326337995"


DB_NAME = "scouting_8bit"


# useful general purpose functions
def exe_query(query):
    """
    executes query in main database
    :param query: SQL query to execute (a string)
    :return: my_cursor
    """
    my_db = mysql.connector.connect(
        host=HOST,
        user=USER,
        password=PASSWORD
    )

    my_cursor = my_db.cursor()

    my_cursor.execute(query)

    return my_cursor


def get_all_databases():
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
