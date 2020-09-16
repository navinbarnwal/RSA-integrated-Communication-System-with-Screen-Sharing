from flask import Flask, jsonify, request
from flask_mysqldb import MySQL
from flask_cors import CORS
import logging as logger
from flask_socketio import SocketIO

logger.basicConfig(level="DEBUG")
app = Flask(__name__)
app.config['SECRET_KEY'] = 'vnkdjnfjknfl1232#'
socketio = SocketIO(app)

app.config['MYSQL_USER'] = 'campus-talk'
app.config['MYSQL_PASSWORD'] = 'abc'

app.config['MYSQL_DB'] = 'campus-talk'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
mysql = MySQL(app)
CORS(app)


@app.route('/api/chat')
def sessions():
    return render_template('session.html')

def messageReceived(methods=['GET', 'POST']):
    print('message was received!!!')

@socketio.on('my event')
def handle_my_custom_event(json, methods=['GET', 'POST']):
    print('received my event: ' + str(json))
    socketio.emit('my response', json, callback=messageReceived)

@app.route('/api/display',  methods=['GET'])
def display():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM userdetails")
    rv = cur.fetchall()
    cur.close()
    return jsonify(rv)

@app.route('/api/updateUser', methods=['POST'])
def userUpdate():
    cur = mysql.connection.cursor()
    name = request.get_json()['name']
    department = request.get_json()['department']
    username = request.get_json()['userName']
    macAddress = request.get_json()['macAddress']
    cur.execute("UPDATE userdetails SET name = '" +str(name)+"', department = '"+str(department)+"', username= '"+str(username)+"' WHERE macAddress = '" +str(macAddress)+"'")
    mysql.connection.commit()
    result = {'name': name, 'username': username, 'department': department, 'macAddress': macAddress}
    cur.close()
    return jsonify({'result': result, 'status':'User Detail Updated in database !!'}),200

@app.route('/api/addUser', methods=['POST'])
def addUser():
    cur = mysql.connection.cursor()
    name = request.get_json()['name']
    department = request.get_json()['department']
    username = request.get_json()['userName']
    macAddress = request.get_json()['macAddress']
    cur.execute("INSERT INTO userdetails(name, username, department, macAddress) VALUES (%s, %s, %s, %s)", (name, username, department, macAddress))
    mysql.connection.commit()
    result = {'name':name,'department':department,'username':username, 'macAddress': macAddress}
    return jsonify({'result': result})


@app.route('/api/auth', methods=['POST'])
def auth():
    macAddress = request.get_json()['macAddress']
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM userdetails WHERE macAddress = '"+ str(macAddress) +"';")
    rv = cur.fetchall()
    cur.close()
    return jsonify(rv)

if __name__ == '__main__':
    app.run(debug=True, port=5000, use_reloader=True)
