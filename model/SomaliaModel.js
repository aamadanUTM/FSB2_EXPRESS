import connection from "../db/db.js";
export const getAllSomaliaStatesModel = (callback) => {
  const query = "SELECT * FROM states_admin";
  connection.query(query, (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results);
  });
};

export const getAllSomaliaStatesByIDModel = (id, callback) => {
  const query = "SELECT * FROM states_admin WHERE state_id=?";
  connection.query(query, [id], (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results);
  });
};

export const createSomaliaStateModel = (data, callback) => {
  const query = "INSERT INTO states_admin (state_name) values(?)";
  connection.query(query, [data.state_name], (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results);
  });
};
