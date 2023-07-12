import React from 'react'
import {useForm} from 'react-hook-form'
import List from './List'
import {default as api} from '../store/apiSlice'
const Form = () => {

    const {register,handleSubmit,resetField} = useForm()
    const [addTransaction] = api.useAddTransactionMutation()
    const onSubmit = async(data) =>{
      if(!data) return {};
      await addTransaction(data).unwrap();
      resetField('name')
      resetField('amount')
      console.log(data);
    }
  return (
    <div className='form mx-w-sm mx-auto w-96'>
      <h1 className='font-bold pb-4 text-xl'>Transanction</h1>
      <form action="" id='form' onSubmit={handleSubmit(onSubmit)}>
        <div className="grid">
            <div className="input_group">
                <input type="text" {...register('name')} placeholder='Salary house Rent SIP' className='outline-none box-shadow-lg' />
            </div>
            <select  className='mt-4 block my-auto w-full py-2 px-3 border border-gray-200 bg-white rounded-md focus:outline-none focus:ring-indigo-500 sm:text-sm' {...register('type')}>
                <option value="Investment" >Investment</option>
                <option value="Expense">Expense</option>
                <option value="Savings">Savings</option>
            </select>
            <div className="input-group mt-4">
                <input type="text" {...register('amount')} placeholder='Amount' className='outline-none box-shadow-lg' />
            </div>
            <div className="submit_btn mt-4">
                <button className='border py-2 text-white bg-indigo-500 w-full'> Make Transaction</button>
            </div>
        </div>

      </form>
      <List></List>
    </div>
  )
}

export default Form
