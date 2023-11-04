import React, { useState } from 'react'
import './form.css'
import { Message } from '../Message/Message';

export const Form = ({categories, setCategories}) => {

  const[category, setCategory] = useState('');
  const[error, setError] = useState(false);

  function handleSubmit(e){

    e.preventDefault();
    if (category === '') {
      setError(true);
      return;
    }

    if (categories.includes(category)) {
      return;
    }
    setCategories(categories.concat(category));
    setCategory('');
    setError(false);
  }

  return (
    <div className='container'>
        <form className='form' onSubmit={handleSubmit}>
            <div className='camp'>
                <label htmlFor="search">Name picture</label>
                <input type="text" id='search' value={category} onChange={(e)=>{setCategory(e.target.value)}}/>
            </div>

            <input type="submit"  className='send' value='Send'/>

            {error && <Message>This camp is obligatory</Message>}

        </form>
    </div>
  )
}
