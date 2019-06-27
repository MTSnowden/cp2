const express = require("express");
const router = express.Router();
const {list,show,create,remove} = require( "./controllers");


router.get("/movies", list);
router.get("/movies/:id", show);
router.post("/movies", create);
router.delete("/movies/:id", remove);

module.exports = router;