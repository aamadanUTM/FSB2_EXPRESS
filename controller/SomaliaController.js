import {
  getAllSomaliaStatesModel,
  getAllSomaliaStatesByIDModel,
  createSomaliaStateModel,
} from "../model/SomaliaModel.js";
export const getAllSomaliaStatesController = (req, res) => {
  getAllSomaliaStatesModel((err, results) => {
    if (err) {
      res.status(500).json({
        code: "error",
        message: err.message,
      });
    }
    res.status(200).json({
      code: "success",
      data: results,
    });
  });
};
export const getAllSomaliaStatesByIDController = (req, res) => {
  const id = req.params.id;
  getAllSomaliaStatesByIDModel(id, (err, results) => {
    if (err) {
      res.status(500).json({
        code: "error",
        message: err.message,
      });
    }
    res.status(200).json({
      code: "success",
      data: results,
    });
  });
};
export const createSomaliaStateController = (req, res) => {
  const data = req.body;
  createSomaliaStateModel(data, (err, results) => {
    if (err) {
      res.status(500).json({
        code: "error",
        message: err.message,
      });
    }
    res.status(201).json({
      code: "success",
      message: "State created successfully",
      data: results,
    });
  });
};
