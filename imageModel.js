const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    imgUrl: { type: String, require: true},
    view: {type: Number, default: 0},
    like: {type: Number, default: 0},
    title: {type: String, default: ''},
    caption: {type: String, default:''},
    userPost: {type: String, default: ''}
},{
    timestamps: { createAt: 'created_at', updateAt: 'update_at'}
});

module.exports = mongoose.model('image', imageSchema);