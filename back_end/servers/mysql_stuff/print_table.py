import mysql.connector
import mysql_utils


def print_table(db, table):
    """
    prints table
    :param table: db to create (type is string)
    :return: none
    """
    my_db = mysql.connector.connect(
        host=mysql_utils.HOST,
        user=mysql_utils.USER,
        password=mysql_utils.PASSWORD,
        database=db
    )

    my_cursor = my_db.cursor()

    query = "SELECT * from " + table
    my_cursor.execute(query)

    data = my_cursor.fetchall()
    for thing in data:
        print(thing)


def main():
    """
    print oneScouts table
    :return: none
    """
    print_table(mysql_utils.DB_NAME, 'oneScouts')


if __name__ == '__main__':
    main()
