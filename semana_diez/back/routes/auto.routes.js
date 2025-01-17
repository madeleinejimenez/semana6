var express = require("express");
var router = express.Router();

const autoController = require("../controllers/auto.controller");

/* POST METHOD LIST AUTOS */
router.post("/list", async function (request, response) {
  try {
    const result = await autoController.getList();
    response.status(200).json({
      data: result,
      status: true,
      message: "Autos fetched successfully",
    });
  } catch (error) {
    response.status(500).json({
      status: false,
      message: error.message,
    });
  }
});

/* POST METHOD CREATE AUTO */
router.post("/create", async function (request, response) {
  try {
    console.log(request.body);
    const result = await autoController.postCreate(request.body);
    response.status(200).json({
      status: true,
      info: result,
      message: "Auto created successfully",
    });
  } catch (error) {
    response.status(500).json({
      status: false,
      message: error.message,
    });
  }
});

/* POST METHOD UPDATE AUTO */
router.post("/update", async function (request, response) {
  try {
    const result = await autoController.postUpdate(request.body);
    response.status(200).json({
      status: true,
      info: result,
      message: "Auto updated successfully",
    });
  } catch (error) {
    response.status(500).json({
      status: false,
      message: error.message,
    });
  }
});

/* POST METHOD DELETE AUTO */
router.post("/delete", async function (request, response) {
  try {
    const result = await autoController.postDelete(request.body);
    response.status(200).json({
      status: true,
      info: result,
      message: "Auto deleted successfully",
    });
  } catch (error) {
    response.status(500).json({
      status: false,
      message: error.message,
    });
  }
});

module.exports = router;
