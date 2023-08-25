const express = require("express");
// const { userValidation } = require("../../validations");
const { musicController } = require("../../controllers");
// const validate = require("../../middlewares/validation");

const router = express.Router();

/** create music */
router.post(
  "/create-music",
  // validate(musicValidation.createmusic),
  musicController.createMusic
);

/** Get music list */
router.get(
  "/list",
  // validate(musicValidation.getmusicList),
  musicController.getMusicList
);

/**  Delete music */
router.delete(
  "/delete-music/:musicId",
  // validate(musicValidation.getmusicList),
  musicController.deletemusic
);

module.exports = router;