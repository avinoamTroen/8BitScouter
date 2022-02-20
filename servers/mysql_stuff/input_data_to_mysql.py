import mysql.connector
import mysql_utils

my_db = mysql.connector.connect(
    host=mysql_utils.HOST,
    user=mysql_utils.USER,
    password=mysql_utils.PASSWORD,
    database=mysql_utils.DB_NAME
)


def insert_record_oneScout(db, val):
    my_cursor = db.cursor()
    sql = "INSERT INTO oneScouts (team_number_str, comp_name, round_number_str, points) VALUES (%s, %s, %s, %s)"

    my_cursor.execute(sql, val)

    db.commit()
    print(my_cursor.rowcount, "record inserted.")


def main():
    val = ('7845t', 'test1', '-1', 15)
    insert_record_oneScout(my_db, val)


if __name__ == '__main__':
    main()
