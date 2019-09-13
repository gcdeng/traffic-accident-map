const path = require('path');
const fs = require('fs');
const csv = require('csvToJson');
const mongoose = require('mongoose');
const initDb = require('./models/db');
const db = initDb();
const LocationModel = require('./models/location');
let importCsvToDb = async () => {
    let csvFiles = fs.readdirSync(path.join(__dirname, './csv/'));
    for (let index = 1; index < csvFiles.length; index++) {
        let csvFileName = csvFiles[index];
        let csvFilePath = path.join(__dirname, './csv/'+csvFileName);
        console.log(csvFilePath);
        let jsonArray = await csv().fromFile(csvFilePath);
        let data = await LocationModel.insertMany(jsonArray);
        console.log(data);  
    }
    mongoose.disconnect();
}
importCsvToDb();