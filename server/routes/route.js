const routes = require('express').Router();
const controller = require('../controllers/expenseController')


    

// const router = express.Router()

routes.route('/api/categories')
.post(controller.expenseController)
.get(controller.getExpenseController)

routes.route('/api/transaction')
.post(controller.createTransactionController)
.get(controller.getTransactionController)
.delete(controller.deleteTransactionController)
// routes.delete('/api/transaction/:id',controller.deleteTransactionController)


routes.route('/api/labels').get(controller.getLabelsController)

// router.post('/api/post-categories',expenseController)

// router.get('/api/get-categories',getExpenseController)

// router.post('/api/post-transaction',createTransactionController)

// router.get('/api/get-transaction',getTransactionController)




// router.get('/api/get-Label',getLabelsController)

module.exports = routes