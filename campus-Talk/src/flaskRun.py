from flask import Flask
from flask_mysqldb import MySQL

app = Flask(__name__)

app.config['MYSQL_USER'] = 'campus'
app.config['MYSQL_PASSWORD'] = 'abc'
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_DB'] = 'campus-talk'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

mysql = MySQL(app)

@app.route('/')
def index():
    cur = mysql.connection.cursor()

    cur.execute('''INSERT INTO example VALUES (1, 'Anthony','Antthony232', 'Departmetn of computer', '2323:#443:343')''')
    #cur.execute('''INSERT INTO example VALUES (2, 'Billy')''')
    mysql.connection.commit()

    cur.execute('''SELECT * FROM example''')
    results = cur.fetchall()
    print(results)
    return str(results[1]['id'])
