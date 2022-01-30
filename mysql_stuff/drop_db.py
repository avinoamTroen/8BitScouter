import mysql.connector
import mysql_utils

mydb = mysql.connector.connect(
  host=mysql_utils.HOST,
  user=mysql_utils.USER,
  password=mysql_utils.PASSWORD
)

mycursor = mydb.cursor()

query = "DROP DATABASE " + mysql_utils.DB_NAME
mycursor.execute(query)