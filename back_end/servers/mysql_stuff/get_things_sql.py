import mysql.connector
import servers.mysql_stuff.mysql_utils as mysql_utils
import json

my_db = mysql.connector.connect(
    host=mysql_utils.HOST,
    user=mysql_utils.USER,
    password=mysql_utils.PASSWORD,
    database=mysql_utils.DB_NAME
)


def get_record(db, compName, matchType, matchNumber, teamNumber):
    my_cursor = db.cursor()
    sql = f"SELECT scouterName FROM oneScouts WHERE compName = %s and matchType = %s and " \
          f"matchNumber = %s and teamNumber = %s"

    my_cursor.execute(sql, (compName, matchType, matchNumber, teamNumber))

    my_result = my_cursor.fetchone()

    # need to empty my_cursor
    my_cursor.fetchall()
    return my_result


def main():
    my_result = get_record(my_db, 'test1', '-1', '7845t', 'bla')
    print(my_result)
    print('-----------------------')
    for x in my_result:
        print(x)
    print('>>>>>>>>>>>>>>>>>>>>>>>>')
    d = {'team_name': my_result[0]}
    print(d)
    print(type(d))
    print('<<<<<<<<<<<<<<<<<<<<<<<<<<<<')
    j = json.dumps(d)
    print(j)
    print(type(j))


if __name__ == '__main__':
    main()
