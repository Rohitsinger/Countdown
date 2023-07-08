import React from 'react'

const Form = () => {
  return (
    <div className='form mx-w-sm mx-auto w-96'>
      <h1 className='font-bold pb-4 text-xl'>Transanction</h1>
      <form action="" id='form'>
        <div className="grid">
            <div className="input-group">
                <input type="text" placeholder='Salary house Rent SIP' className='outline-none box-shadow-lg' />
            </div>
            <select name="" id="" className='form-input'>
                <option value="Investment" >Investment</option>
                <option value="Expenses">Expenses</option>
                <option value="Savings">Savings</option>
            </select>
            <div className="input-group">
                <input type="text" placeholder='Amount' className='outline-none box-shadow-lg' />
            </div>
            <div className="submit_btn">
                <button className='border py-2 text-white bg-indigo-500 w-full'> Make Transaction</button>
            </div>
        </div>

      </form>
    </div>
  )
}

export default Form
