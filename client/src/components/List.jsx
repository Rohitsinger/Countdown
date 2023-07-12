import React from 'react'
import 'boxicons';
import  {useGetLabelsQuery} from '../store/apiSlice'
import  {useDeleteTransactionMutation} from '../store/apiSlice'




const List = () => {
  const {data,isFetching,isSuccess,isError}=useGetLabelsQuery(); 
  const [deleteTransaction] = useDeleteTransactionMutation()

let transactions;
if(isFetching){
transactions = <div>Fetching</div>
} else if(isSuccess){
  const handleClick = (e)=>{
    if(!e.target.dataset.id){return 0}
    deleteTransaction({_id:e.target.dataset.id})
 }
transactions = data.map((val,index)=><Transaction key={index} handler={handleClick} category={val}></Transaction>)
console.log(isSuccess);
} else if(isError){
transactions = <div>Error</div>
}


  return (
    <div className='flex flex-col py-6 gap-3'>
      <h1 className='py-4 text-xl font-bold'>History</h1>
        {transactions}
    </div>
  )
}

function Transaction({category,handler}) {
    if(!category) return null;
    return(
        <div className='item flex justify-center bg-gray-50 py-2 rounded-r' style={{borderRight:`8px solid ${category.color}`}}>
        
        <button className='px-3' onClick={handler}><box-icon size ="15px" color={category.color} data-id={category._id??""} name="trash"></box-icon></button>
       
        <span className='w-full block'>{category.name??""}</span>

        </div>
    )
}

export default List
