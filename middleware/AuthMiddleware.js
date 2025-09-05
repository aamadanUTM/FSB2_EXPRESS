import jwt from "jsonwebtoken";
export const AuthMiddleware = (req, res, next) => {
  const token = req.headers["authorization"].split(" ")[1];
  console.log("Authorization Header:", token);
  if (!token) {
    return res.status(401).json({
      code: "error",
      message: "Access denied. No token provided.",
    });
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        code: "error",
        message: "Invalid token.",
      });
    }
    req.user = decoded;
    console.log("Decoded JWT:", decoded);
    next();
  });
};
