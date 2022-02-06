import mysql.connector
import mysql_utils


def delete_db(db):
    """
    deletes db if db exists
    :param db: a database name (a string)
    :return: none
    """
    my_db = mysql.connector.connect(
        host=mysql_utils.HOST,
        user=mysql_utils.USER,
        password=mysql_utils.PASSWORD)

    my_cursor = my_db.cursor()

    query = "DROP DATABASE IF EXISTS " + db
    my_cursor.execute(query)


def main():
    """
    deletes the main database (from mysql_utils) after checking with the user
    :return: none
    """
    databases = mysql_utils.get_all_databases()
    while True:
        # print general info on what databases their are here
        print("HERE ARE ALL YOUR CURRENT DATABASES:\n(IF THE NEW DB IS THE SAME AS ONE OF THESE NOTHING WILL HAPPEN):"
              "\n")
        for num, db in enumerate(databases):
            if (num + 1) % 6 == 0:
                print(db)
            else:
                print(db, end=" ")

        # prompt for decision on deleting the database
        res = input(
            f"\n\nDO YOU WANT TO DELETE DATABASE {mysql_utils.DB_NAME}?\nTHIS IS RISKY AND PROBABLY A BAD IDEA.\nENTER "
            f"Y/y FOR YES AND N/n FOR NO:\n")
        if res in ('Y', 'y'):
            delete_db(mysql_utils.DB_NAME)
            break
        elif res in ('N', 'n'):
            break


if __name__ == '__main__':
    main()
