import React from 'react'

function Dessert() {
    const hi=100;
    const hello=1000;
    if(hi<hello)
    {
      return<div>u have money left still</div>
    }
    else{
      return<div>u exceeded ur money</div>
    }
}

export default Dessert