const mongoose = require('mongoose');
const mongoosePaginete = require('mongoose-paginate');

const productschema = new mongoose.Schema({
    login: {
        type: String,
        required: true,
    },
    senha: {
        type: String,
        required: true,
    },
    creatdAt: {
        type: Date,
        default: Date.now
    }
})

productschema.plugin(mongoosePaginete);

mongoose.model("Product",productschema);