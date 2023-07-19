var mongoose=require("mongoose")
var Schema=mongoose.Schema

var Produit=new Schema({
    nom:String,
    prix:Number,
    quantite:Number,
    img:String,  
})
Produit.index({ nom: 'text' });

module.exports=mongoose.model("produit",Produit)
