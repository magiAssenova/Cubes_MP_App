const { default: mongoose } = require('mongoose');
const Cube = require('../Models/Accessory');
const path = require('path');
const Accessory = require('../Models/Accessory');

exports.getAll=()=>Accessory.find()