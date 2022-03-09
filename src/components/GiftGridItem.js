import React from 'react'

export const GiftGridItem = ({id,title,url}) => {
    
  return (
    <div className="card animate__animated animate__faceIn">
        <img src={url} alt={title}/>
        <p>{title}</p>
    </div>
  )
}
