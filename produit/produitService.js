var express = require('express');
var Produit = require ("./produitModel")
async function addP(req, res, next) {
    try {
      const newLibrary = new Produit({
        nom: req.body.nom,
        prix: req.body.prix,
        quantite: req.body.quantite,
        img: req.body.img.substring(req.body.img.lastIndexOf("\\") + 1),
      });
  
      const savedData = await newLibrary.save();
      console.log(savedData);
      res.json(savedData);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  
async function listP(req, res, next) {
  try {
    const obj = await Produit.find();
    console.log(obj);
    res.json(obj);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
deleteP = async(req,res,next)=>{
    try {
        await Produit.findByIdAndDelete(req.params.id)
        res.status(200).json("produit supprimer !")
    } catch (error) {
        res.json(error)
    }
}
async function getOneL(req,res,next)
{
  try {
    const obj = await  Produit.findById(req.params.id)
  console.log(obj)
  res.json(obj)
} catch (err) {
  console.error(err);
  res.status(500).json({ error: "Server error" });
}}
 
async function searchProduit(req, res, next) {
    try {
      const searchTerm = req.params.nom;
  
      // Make sure to use the correct Mongoose model name you have defined.
      const messages = await Produit.find({ $text: { $search: searchTerm } });
  
      res.json(messages);
    } catch (err) {
      console.error(err);
      next(err);
    }
  }
  
  
  
  async function updateP(req, res, next) {
    try {
      const updatedProduct = await Produit.findByIdAndUpdate(
        req.params.id,
        {
          nom: req.body.nom,
          prix: req.body.prix,
          quantite: req.body.quantite,
        },
        { new: true }
      ).exec();
  
      if (!updatedProduct) {
        // If the product with the specified ID is not found, return a 404 Not Found response
        return res.status(404).json({ message: "Product not found" });
      }
  
      console.log(updatedProduct); // You can log the updated object if needed
  
      res.json({ message: "The product has been modified", updatedProduct });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  }
  
  




  module.exports = { addP,listP,deleteP ,searchProduit,updateP,getOneL};