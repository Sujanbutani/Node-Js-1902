const express = require("express");
const { musicController } = require("../../controllers");

const router = express.Router();

/** create music */
router.post(
  "/create-music",
  musicController.createMusic
);

/** Get music list */
router.get(
  "/list",
  musicController.getMusicList
);

/** Get music details by id */
router.get(
  "/get-details/:musicId",
  musicController.getMusicDetails
);

/** upadate music */
router.put(
  "/update-details/:musicId",
  musicController.updateDetails
);

/**  Delete music */
router.delete(
  "/delete-music/:musicId",
  musicController.deletemusic
);

module.exports = router;