import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Star Trek Lower Decks']);

    /* const handleAdd = () => {
        setCategories([...categories, 'Hataraku Saibou']);
        //setCategories( cats => [...cats, 'Hataraku Saibou']);   Esta forma es equivalente a la anterior
    } */

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />

            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                        key={ category }
                        category={category}/>
                    ))                    
                }
            </ol>
        </>
    );
}

