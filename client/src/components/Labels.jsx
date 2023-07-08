import React from 'react'

const obj = [
    {
        type:'Savings',
        color:'#f9c74f',
        percent:20
    },
    {
        type:'Investment',
        color:'rgb(54, 162, 235)',
        percent:10
    },
    {
        type:'Expense',
      
        color: 'rgb(255, 99, 132)',
        percent:45
    },
]

const Labels = () => {
  return (
    <d>
      {obj.map((val,index)=><LabelComponent key={index} data ={val}></LabelComponent>)}
    </d>
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
            <h3 className='font-bold mt-3'>{data.percent??""}%</h3>
        </div>
    )
}
export default Labels
