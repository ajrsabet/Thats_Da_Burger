const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "da_burger_db"
});

// Connect
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  createBurger();
});



// Create
function createBurger() {
  console.log("Inserting a new burgers...\n");
  const query = connection.query(
    "INSERT INTO burgers SET ?",
    {
      name: "Beet Burger",
      eaten: true,
    },
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " burgers inserted!\n");
      // Call updateburgers AFTER the INSERT completes
      updateBurger();
    }
  );

  // logs the actual query being run
  console.log(query.sql);
}

// Read
function readBurger() {
  console.log("Selecting all burgers...\n");
  connection.query("SELECT * FROM burgers", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    // connection.end();
  });
}

// Update
function updateBurger() {
  console.log("Updating all Rocky Road quantities...\n");
  const query = connection.query(
    "UPDATE burgers SET ? WHERE ?",
    [
      {
        eaten: true
      },
      {
        name: "Impossible Burger"
      }
    ],
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " burgers updated!\n");
      // Call deleteburgers AFTER the UPDATE completes
      deleteBurger();
    }
  );

  // logs the actual query being run
  console.log(query.sql);
}

// Delete
function deleteBurger() {
  console.log("Deleting all Beet Burgers...\n");
  connection.query(
    "DELETE FROM burgers WHERE ?",
    {
      name: "Beet Burger"
    },
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " burgers deleted!\n");
      // Call readburgers AFTER the DELETE completes
      readBurger();
    }
  );
}


