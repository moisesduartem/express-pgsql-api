const express = require("express");
const router = express.Router();

const userController = require("./../controllers/user");

router.get("/users", userController.index);
router.get("/users/:id", userController.show);
router.put("/users/:id", userController.update);
router.delete("/users/:id", userController.destroy);
router.post("/users", userController.store);

module.exports = router;