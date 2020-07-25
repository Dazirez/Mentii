import flask 
app = flask.Flask("__main__")

@app.route("/")
def my_index():
    flask.render_template("index.html", token="Mentii"))

app.run(debug=True)