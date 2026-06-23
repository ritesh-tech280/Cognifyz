const mongoose =require("mongoose");

const productSchema =
new mongoose.Schema({

    name: String,

    category: String,

    quantity: Number,

    price: Number,

    supplier: String,

    owner: {
        type:
        mongoose.Schema.Types.ObjectId,

        ref: "User"
    }

});

module.exports =
mongoose.model(
    "Product",
    productSchema
);