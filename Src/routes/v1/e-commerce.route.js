const express = require("express");
const { e_commerceController} = require("../../controllers");
const { e_commerceService } = require("../../services");

const router = express.Router();

/** Get categort list */
router.get(
    "/list",
    e_commerceController.getList,
  );
module.exports = router;