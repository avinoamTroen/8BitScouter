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
            compName VARCHAR(100),
            matchType VARCHAR(50),
            matchNumber SMALLINT,
            teamNumber SMALLINT,
            scouterName VARCHAR(30),
            whenCaptured DATETIME,
            scouterTeamNumber SMALLINT,
            ballsInUpperAuto SMALLINT, 
            ballsInLowerAuto SMALLINT,
            ballsMissedAuto SMALLINT,
            passedLine BOOLEAN,
            ballsHumanShotAuto BOOLEAN,
            ballsHumanScoredAuto BOOLEAN,
            autoMalfunction BOOLEAN,
            autoFreeText VARCHAR(500),
            ballsInUpperTele SMALLINT,
            ballsInLowerTele SMALLINT,
            ballsMissedTele SMALLINT,
            levelClimbed SMALLINT,
            climbSuccessful BOOLEAN,
            climbTime FLOAT,
            defensiveDefenseLevel SMALLINT,
            offensiveDefenseLevel SMALLINT,
            wasDefendedLevel SMALLINT,
            goodTeamMateLevel SMALLINT,
            wasBroken SMALLINT,
            freeText VARCHAR(500),
            generalImpression SMALLINT,
            robotNoFunction BOOLEAN,
            systemNoFunction BOOLEAN)"""

    my_cursor.execute(query)


def main():
    create_tables(mysql_utils.DB_NAME)


if __name__ == '__main__':
    main()
