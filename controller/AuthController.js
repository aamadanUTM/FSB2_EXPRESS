import jwt from "jsonwebtoken";
import { loginModel } from "../model/AuthModel.js";
export const loginController = (req, res) => {
  const data = req.body;
  loginModel(data, (err, results) => {
    if (err) {
      res.status(500).json({
        message: "Internal Server Error",
        error: err,
      });
    } else {
      if (results.length === 0) {
        return res.status(401).json({
          message: "Invalid email or password",
        });
      }
      const token = generateToken(results[0]);
      res.status(200).json({
        message: "Login successful",
        data: results,
        token: token,
      });
    }
  });
};

const generateToken = (user) => {
  return jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: "5m",
  });
};
