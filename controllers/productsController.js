const fs = require('fs');
const path = require('path');
const products = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','products.json'),'utf-8'))
const categories = require('../data/categories.json')

module.exports = {
    search : (req,res) => {
        
    },
    detail : (req,res) => {
        
        return res.render('productDetail',{
            product : products.find(producto => producto.id === +req.params.id)
        })
    },
    add : (req,res) => {
        return res.render('productAdd',{
            categories
        })
    },
    store : (req,res) => {
        res.send(req.body)
    },
    edit : (req,res) => {
        return res.render('productEdit',{
            categories
        })
    },
    update : (req,res) => {
        res.send(req.body)
    },
    destroy : (req,res) => {

    }
}