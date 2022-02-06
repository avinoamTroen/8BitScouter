import mysql.connector
import mysql_utils


def create_the_db(db):
    """
    creates db if it doesn't already exist
    :param db: db to create (type is string)
    :return: none
    """
    my_db = mysql.connector.connect(
        host=mysql_utils.HOST,
        user=mysql_utils.USER,
        password=mysql_utils.PASSWORD
    )

    my_cursor = my_db.cursor()

    query = "CREATE DATABASE IF NOT EXISTS " + db
    my_cursor.execute(query)


def main():
    """
    creates main database (from mysql_utils) if it doesn't already exist after the user assents
    :return: none
    """
    databases = mysql_utils.get_all_databases()
    while True:
        # print general purpose info on what databases their are
        print("HERE ARE ALL YOUR CURRENT DATABASES:\n(IF THE NEW DB IS THE SAME AS ONE OF THESE NOTHING WILL HAPPEN):"
              "\n")
        for num, db in enumerate(databases):
            if (num + 1) % 6 == 0:
                print(db)
            else:
                print(db, end=" ")
        # prompt user for decision on creating server
        res = input(
            f"\nDO YOU WANT TO CREATE DATABASE {mysql_utils.DB_NAME}?\nENTER "
            f"Y/y FOR YES AND N/n FOR NO:\n")
        if res in ('Y', 'y'):
            create_the_db(mysql_utils.DB_NAME)
            break
        elif res in ('N', 'n'):
            break


if __name__ == '__main__':
    main()
