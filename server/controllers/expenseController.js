

const ExpenseModel = require('../models/ExpenseModel')


const expenseController =async(req,res)=>{
  try {
    const createExpense = await new ExpenseModel.Categories({
        type:"Investment",
        color:'#FCBE44',
    })
    createExpense.save()
        return res.status(200).json(createExpense)
        
  } catch (error) {
    return res.json({message:`Error while creating Expenses ${error}`})
  }
     
   
 }
const getExpenseController =async(req,res)=>{
    const data = await ExpenseModel.Categories.find({})
   let filteredCategory =  await data.map((v)=>Object.assign({},{type:v.type,color:v.color}))
   console.log(typeof(filteredCategory));
     return res.status(200).json(filteredCategory)
 } 

//create transaction

const createTransactionController =async(req,res)=>{
    const {name,type,amount} = req.body; 

    try {
      const createExpense = await new ExpenseModel.Transaction({
        name,
        type,
        amount,
        date:new Date()
      })
      createExpense.save()
          return res.status(201).json(createExpense)
          
    } catch (error) {
      return res.json({message:`Error while creating Expenses ${error}`})
    }
}

const getTransactionController =async(req,res)=>{
    const data = await ExpenseModel.Transaction.find({})

     return res.status(200).json(data)
 } 

 const deleteTransactionController =async(req,res)=>{
    // let deleteId = req.params.id
    // if(!deleteId){
    //   res.status(400).json({message:"No Id Found"})
    // }
   try {
    const result =  await ExpenseModel.Transaction.deleteOne(req.body)
     res.status(200).send(result)

   
   } catch (error) {
       console.log(error);
       
      return res.json({message:`Error while Deleting Expenses ${error}`})

   }
 } 

 const getLabelsController =async(req,res)=>{
     await ExpenseModel.Transaction.aggregate([
  {
    $lookup:{
        from:"categoies",
        localField:'type',
        foreignField:"type",
        as:"categories_info"
    }
},
    {
        $unwind:"$categories_info"
    }

]).then(result=>{
    
    let filteredCategory =  result.map((v)=>Object.assign({},{_id:v._id,name:v.name,type:v.type,amount:v.amount,color:v.categories_info['color']}))
    res.json(filteredCategory)}).catch(error=>res.status(400).json(error))

     
 } 

module.exports = {expenseController,getExpenseController,createTransactionController,getTransactionController,deleteTransactionController,getLabelsController}

// const createExpense = await new ExpenseModel(req.body)
// await createExpense.save();
// res.status(201).json("Transaction done")
