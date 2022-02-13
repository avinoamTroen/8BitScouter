import mysql.connector
import mysql_utils


def create_tables(db):
    """
    will create the main tables in db
    :param db: database (string)
    :return: none
    """
    my_db = mysql.connector.connect(
        host=mysql_utils.HOST,
        user=mysql_utils.USER,
        password=mysql_utils.PASSWORD,
        database=db

    )

    my_cursor = my_db.cursor()

    query = ("CREATE TABLE customers ("
             "id INT AUTO_INCREMENT PRIMARY KEY, "
             "team_number VARCHAR(255), "
             "num_of_balls INT())")
    my_cursor.execute(query)
