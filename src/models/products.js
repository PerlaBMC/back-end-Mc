const {Schema, model} = require ("mongoose");

const productSchema = Schema ({
    colection: {
        type: String,
    },

    productName: {
        type: String,
    },

    productID: {
        type: String,
    },

    productPrice: {
        type: Number
    },

    productSize: {
        type: {
            type1: {type: String},
            type2: {type:String},
            type3: {type:String},
            type4: {type: String},
            type5: {type: String},
            type6: {type: String},
            type7: {type:String},
            type8: {type:String},
            type9: {type: String},
            type10: {type: String}
        }
    },

    image: {
        type: String
    },

    image2: {
        type: String
    },

    image3: {
        type: String
    },

    description: {
        type: String
    }
})


productSchema.methods.toJSON = function () {
    const {__v, _id, ...rest} = this.toObject();
    rest.id = _id;
    return rest;
};



module.exports = model ("product", productSchema, "products");