import React, { Component, useState } from 'react'
import PropTypes from 'prop-types'
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';

const GifExpertApp=()=>{
    //const categories=['One Punch','Samurai X','Dragon Ball'];

    const [categories, setCategories] = useState(['One Punch']);
  /*   const handleAdd=()=>{
        //setCategories(['HunterxHunter',...categories]);
        setCategories(cats=>[...cats,'HunterxHunter']);
    }; */
    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>
            <ol>
                {
                    categories.map(category=>(
                        //return <li key={category}>{category}</li>

                        <GiftGrid
                            key={ category }
                            category={ category }
                        /> 
                    ))
                }
            </ol>
        </>
    );
}
export default GifExpertApp;