const db = require('../config/db');

exports.createUser = async (username) => {
  const [result] = await db.query(
    'INSERT INTO users (username) VALUES (?)',
    [username]
  );

  return { id: result.insertId, username };
};

exports.findUserByUsername = async (username) => {
  const [rows] = await db.query(
    'SELECT * FROM users WHERE username = ?',
    [username]
  );

  return rows[0];
};
