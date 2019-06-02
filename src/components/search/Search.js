import React from 'react'

const Search = (props) => {
    return ( 
     
        <form className=' ' onSubmit={props.handleCitySubmit}>
        
            <input 
                className = 'inpClass'
                type="text" 
                value={props.value} 
                onChange={props.handleInputChange} 
                placeholder='Enter the City'/>
                
            <button className=' btnClass'>
                Search the City
            </button>
        
        </form>
 
     )
}
 
export default Search;