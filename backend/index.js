const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");
const app = express();
const port = 3000;
app.use(cors());

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "123456",
  port: 5432,
});

app.use(express.json());

async function createTable() {
  const client = await pool.connect();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS feedback (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255),
        email VARCHAR(255),
        product VARCHAR(255),
        star_count INTEGER
      );
    `);
    console.log("Table created or already exists: feedback");
  } catch (error) {
    console.error("Error creating table:", error);
  } finally {
    client.release();
  }
}

createTable();

app.post("/submitData", async (req, res) => {
  try {
    const { name, email, product, starCount } = req.body;

    const client = await pool.connect();
    const result = await client.query(
      "INSERT INTO feedback (name, email, product, star_count) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, email, product, starCount]
    );

    const insertedData = result.rows[0];
    client.release();

    res.json({ success: true, data: insertedData });
  } catch (error) {
    console.error("Error inserting data:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

app.get("/getData", async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM feedback");
    const data = result.rows;
    client.release();

    res.json({ success: true, data });
  } catch (error) {
    console.error("Error retrieving data:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
