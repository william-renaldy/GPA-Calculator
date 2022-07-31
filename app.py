from flask import Flask, jsonify, redirect, render_template, request, url_for

import json
import gpa

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/submit", methods = ["POST","GET"])
def submit():
    if request.method == "POST":
        
        data = request.form["ques"]
        data = json.loads(data)

        grade = list(map(int,data[::2]))
        credit = list(map(int,data[1::2]))

        print(grade,credit)

        GPA = gpa.calculate(grade,credit)

        return jsonify(f"Your Grade Point Average (GPA) is {GPA}")

    else:
        return redirect(url_for("home"))


@app.errorhandler(404)
def error(e):
    return redirect(url_for("home"))



if __name__ == "__main__":
    app.run(debug = True)