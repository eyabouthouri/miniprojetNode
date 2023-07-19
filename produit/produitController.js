var express = require('express');
var router = express.Router();
var service=require("./produitService");

router.post("/addp",service.addP)
router.get("/listp",service.listP)
router.get("/rech/:nom",service.searchProduit)
router.put("/up/:id",service.updateP)
router.get("/getonel/:id",service.getOneL)

router.delete("/deletep/:id",service.deleteP)



module.exports = router;