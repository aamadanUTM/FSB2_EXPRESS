import connection from "../db/db.js";

export const loginModel = (data, callback) => {
  const query =
    "SELECT * FROM users WHERE email = ? AND user_password = md5(?)";
  connection.query(query, [data.email, data.password], (err, results) => {
    if (err) {
      return callback(err);
    }
    return callback(null, results);
  });
};
