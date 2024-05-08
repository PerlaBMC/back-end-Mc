const Product = require("../models/products");

const getProduct = async (req, res) => {
	try {
		const shoesCollection = await Product.find();

		return res.json({
			ok: true,
			msg: "producto obtenido",
			data: shoesCollection,
		});
	} catch (error) {
		return res.status(500).json({
			ok: false,
			msg: "error en el servidos get",
			data: {},
		});
	}
};

const getProductID = async (req, res) => {
	try {
		const { id } = req.params;
		const product = await Product.findById(id);

		return res.json({
			ok: true,
			msg: "Producto obtenido",
			data: product,
		});
	} catch (error) {
		return res.status(500).json({
			ok: false,
			msg: "Error en el servidor",
			data: {},
		});
	}
};

const postProduct = async (req, res) => {
	try {
		const {
			colection,
			productName,
			productID,
			productPrice,
			productSize,
			image,
			image2,
			image3,
			description,
		} = req.body;

		const postCollection = {
			colection,
			productName,
			productID,
			productPrice,
			productSize,
			image,
			image2,
			image3,
			description,
		};

		const newCollection = await Product(postCollection).save();
		return res.json({
			ok: true,
			msg: "colección creado",
			data: newCollection,
		});
	} catch (error) {
		return res.status(500).json({
			ok: false,
			msg: "error en el servidor",
			data: {},
		});
	}
};

const putProduct = async (req, res) => {
	try {
		const { id } = req.params;
		const {
			colection,
			productName,
			productID,
			productPrice,
			productSize,
			image,
			image2,
			image3,
			description,
		} = req.body;

		const newInformation = {
			colection,
			productName,
			productID,
			productPrice,
			productSize,
			image,
			image2,
			image3,
			description,
		};

		const putCollection = await Product.findByIdAndUpdate(id, newInformation, {
			new: true,
		});
		return res.json({
			ok: true,
			msg: "colección actualizada",
			data: putCollection,
		});
	} catch (error) {
		return res.status(500).json({
			ok: false,
			msg: "error en el servidor put",
			data: {},
		});
	}
};

const deleteProduct = async (req, res) => {
	try {
		const { id } = req.params;

		const deletCollection = await Product.findByIdAndRemove(id);

		return res.json({
			ok: true,
			msg: "colección eliminada",
			data: deletCollection,
		});
	} catch (error) {
		return res.status(500).json({
			ok: false,
			msg: "error en el servidor delete",
			data: {},
		});
	}
};

module.exports = {
getProduct,
getProductID,
postProduct,
putProduct, 
deleteProduct
};
