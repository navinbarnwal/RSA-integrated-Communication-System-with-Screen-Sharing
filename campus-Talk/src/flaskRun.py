from flask import Flask
from flask_mysqldb import MySQL
from flask_cors import CORS
from flask import jsonify

app = Flask(__name__)

app.config['MYSQL_USER'] = 'campus-talk'
app.config['MYSQL_PASSWORD'] = 'abc'

app.config['MYSQL_DB'] = 'campus-talk'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

mysql = MySQL(app)
CORS(app)
@app.route('/api/display',  methods=['GET'])
def display():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM userdetails")
    rv = cur.fetchall()
    return jsonify(rv)

@app.route('/api/userUpdate', methods=['POST'])
def userUpdate():
    cur = mysql.connection.cursor()
    name = request.get_json()['name']
    department = request.get_json()['department']
    username = request.get_json()['userName']
    macAddress = request.get_json()['macAddress']
    cur.execute("UPDATE tasks SET name = '" + str(name) + "' WHERE macAddress = " +
                macAddress)
    mysql.connection.commit()
    result = {'name': name}

    return jsonify({'result': result})

@app.route('/api/addUser', methods=['POST'])
def addUser():
    cur = mysql.connection.cursor()
    title = request.get_json()['title']
    cur.execute("INSERT INTO tasks (title) VALUES ('" + str(title) + "')")
    mysql.connection.commit()
    result = {'title': title}
    return jsonify({'result': result})

if __name__ == '__main__':
    app.run(debug=True)
