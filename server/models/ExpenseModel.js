const mongoose =require("mongoose");

const categorySchema = new mongoose.Schema({
   type: { type: String, default: "Investment" },
   color: { type: String, default: "rgb(54, 162, 235)" }
})
const transactionSchema = new mongoose.Schema({
   name: { type: String, default: "Anonymous" },
   type: { type: String, default: "Investment" },
   amount: { type: Number,required:true },
   date: { type: Date, default: Date.now }

})

const Categories = mongoose.model('categoies', categorySchema)
const Transaction = mongoose.model('transaction', transactionSchema)

exports.default = Transaction;


module.exports = { Categories, Transaction }

// amount: { type: Number,required:true },
// category: { type: String, required:true },
// reference:{type:String},
// description: { type: String, required:true },
// date: { type: Date, default: Date.now }