import React from 'react'

export const Pic = (id) => {
   
    let adress=require('../icon-fonts/cryptoicons/'+id.id+'.png')

    return (
       <img src={adress.default}></img>
    )
    
}
