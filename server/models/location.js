const mongoose = require('mongoose');
const locationSchema = new mongoose.Schema({
    發生時間: String,
    發生地點: String,
    死亡受傷人數: String,
    車種: String,
    經度: String,
    緯度: String
});

module.exports = mongoose.models.location || mongoose.model('location', locationSchema);