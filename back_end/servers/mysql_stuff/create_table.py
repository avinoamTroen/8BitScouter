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
    # query =
    query = """CREATE TABLE oneScouts (id INT AUTO_INCREMENT PRIMARY KEY, 
             team_number_str VARCHAR(255), 
             comp_name VARCHAR(255), 
             round_number_str VARCHAR(255), 
             points INT)"""

    my_cursor.execute(query)


def main():
    create_tables(mysql_utils.DB_NAME)


if __name__ == '__main__':
    main()
