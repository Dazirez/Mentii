import flask 
from flask_sqlalchemy import SQLAlchemy


app = flask.Flask("__main__")
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////test.db'
db = SQLAlchemy(app)

class Streamer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    title = db.Column(db.String(80),  nullable=False)
    avi = db.Column(db.String(20),  nullable=False, default ='default.jpg')

    def __repr__(self):
        return '<User %r>' % self.username

@app.route("/")
def my_index():
    flask.render_template("index.html", token="Mentii")

app.run(debug=True)

