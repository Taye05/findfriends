import React from 'react';


const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div class=" w-full ">
        <input type="search"
         placeholder="find your favourite super friends" 
         onChange = {searchChange}
         />
        </div>
    )
}

export default SearchBox;