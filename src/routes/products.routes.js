const Router = require("express");
const {
	getProduct, 
	getProductID, 
	postProduct, 
	putProduct, 
	deleteProduct,
} = require("../controllers/products.ctrl");

const router = Router();

router.get("/", getProduct, );
router.get("/:id", getProductID, );
router.post("/", postProduct, );
router.put("/:id", putProduct, );
router.delete("/:id", deleteProduct, );

module.exports = router;
