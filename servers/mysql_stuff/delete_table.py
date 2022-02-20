import mysql.connector
import mysql_utils


def delete_table(db, table_name):
    """
    will delete a table in db
    :param db: database (string)
    :param table_name: table to be deleted (string)
    :return: none
    """
    my_db = mysql.connector.connect(
        host=mysql_utils.HOST,
        user=mysql_utils.USER,
        password=mysql_utils.PASSWORD,
        database=db

    )

    my_cursor = my_db.cursor()
    query = f"DROP TABLE IF EXISTS {table_name}"""

    my_cursor.execute(query)


def main():
    table = 'oneScouts'
    while True:
        # prompt for decision on deleting the database
        res = input(
            f"\n\nDO YOU WANT TO DELETE table {table} from db {mysql_utils.DB_NAME}?\nTHIS IS RISKY AND PROBABLY A BAD IDEA.\nENTER "
            f"Y/y FOR YES AND N/n FOR NO:\n")
        if res in ('Y', 'y'):
            delete_table(mysql_utils.DB_NAME, table)
            break
        elif res in ('N', 'n'):
            break


if __name__ == '__main__':
    main()
