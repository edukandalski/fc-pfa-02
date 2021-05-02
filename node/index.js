const express = require("express")
const mysql = require("mysql")

const conf = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
}

const app = express()

app.get("/", (req, res) => {
  const con = mysql.createConnection(conf)
  con.connect((err) => {
    if (err) res.status(500).send("DB error!")

    con.query("SELECT name FROM topics", (err, result) => {
      if (err) res.status(500).send("DB error!")
      con.end()
      let html = "<h1>Full Cycle Rocks!</h1>"
      html = html.concat("<p>List of topics:<ul>")
      result.forEach((element) => {
        html = html.concat(`<li>${element.name}</li>`)
      })
      html = html.concat("</ul></p>")
      res.send(html)
    })
  })
})

app.listen(3000, () => console.log("Server running!"))
