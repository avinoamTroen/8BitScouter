import mysql.connector
import mysql_utils

mydb = mysql.connector.connect(
    host=mysql_utils.HOST,
    user=mysql_utils.USER,
    password=mysql_utils.PASSWORD,
    database=mysql_utils.DB_NAME

)

mycursor = mydb.cursor()

query = ("CREATE TABLE customers ("
         "id INT AUTO_INCREMENT PRIMARY KEY, "
         "team_number VARCHAR(255), "
         "num_of_balls INT()")
mycursor.execute(query)