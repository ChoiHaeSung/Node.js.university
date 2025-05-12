const express =require("express");
const router = express.Router();
const {getLogin } = require("../controllers/loginConrtoller");

router.route("/").get(getLogin);

module.exprots = router