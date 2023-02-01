const { default: mongoose } = require('mongoose');
const Cube = require('../Models/Cube');
const path = require('path')

exports.create= (cube)=> Cube.create(cube)

exports.getAll= ()=> Cube.find()

exports.findOne= (cubeID)=> Cube.findById(cubeID)

