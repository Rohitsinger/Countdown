import React from 'react'
import _, { transform } from 'lodash'

export function getSum(transaction,type) {
   
  
   let sum =  _(transaction)
            .groupBy("type")
            .map((obj,keys)=>{
             if(!type) return _.sumBy(obj,'amount')
             return {
                'type':keys,
                'color':obj[0].color,
                'total':_.sumBy(obj,'amount')
             }
            })
            .value()
            return sum;
  }

export  function getLabels(transaction) {
   

   let amountSum = getSum(transaction,'type')
   let Total = _.sum(getSum(transaction))
   let percent = _(amountSum)
                   .map(obj=>_.assign(obj,{percent:(100*obj.total)/Total}))
                   .value()

                   return percent;
  
}
