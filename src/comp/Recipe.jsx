import React from 'react'

function Recipe({ title,calories,image,ingredients }) {
  return (
    <div className='container mx-auto bg-white flex place-items-center rounded-lg pt-3 pb-3 flex-col'>
            <b><h1 className='text-xl-3'>{title}</h1></b>
            <img src={image} alt=""/>
            <p>Calories : {Math.round(calories)}</p>
        
            <ol>
                {ingredients.map(ingredient=>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
              
            
  
            
  
        </div>
  )
}

export default Recipe