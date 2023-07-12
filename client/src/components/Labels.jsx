import React from 'react'
import  {useGetCategoriesQuery} from '../store/apiSlice'
import  {useGetLabelsQuery} from '../store/apiSlice'
import { getLabels } from '../helper/helper';

const Labels = () => {
  const {data,isFetching,isSuccess,isError}=useGetLabelsQuery(); 
 

let transactions;

if(isFetching){
 transactions = <div>Fetching</div>
} else if(isSuccess){
  transactions =  getLabels(data,'type').map((val,index)=><LabelComponent key={index} data ={val}></LabelComponent>)
 
} else if(isError){
  transactions = <div>Error</div>
}

  return (
    <div>
      {transactions}
      
    </div>
  )
}


function LabelComponent({data}) {

    if(!data) return <></>;

    return(
        <div className='labels flex justify-between border-b-4'>
             <div className='flex gap-2 mt-2'>
             <div className='w-2 h-2  rounded py-3 ' style={{background:data.color??'#f9c74f'}}> </div>
                <div className=''><h3 className='text-md ml-4  '>{data.type??""}</h3></div>
               
            </div> 
            <h3 className='font-bold mt-3'>{(Math.round(data.percent))??0}%</h3>
        </div>
    )
}
export default Labels
