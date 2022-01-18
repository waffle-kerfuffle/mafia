import React from 'react'

export const Pic = (id) => {
   
    var adress=require('../icon-fonts/cryptoicons/'+id.id+'.png')
    return (
       <img src={adress}></img>
    )
}
