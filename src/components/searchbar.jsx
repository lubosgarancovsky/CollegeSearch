import React, {useState} from 'react';

export function SearchBar(props) {

    const [country, setCountry] = useState('')
    const [name, setName] = useState('')


    const countryValue = event => {
        setCountry(event.target.value)
    }

    const nameValue = event => {
        setName(event.target.value)
    }



    return ( 
        <div className='searchbar'>
            <input type="text" placeholder='United States...' onChange={countryValue}></input>
            <input type="text" placeholder='Harvard...' onChange={nameValue}></input>
            <button onClick={()=>{
                props.searchSubmit(country, name)
            }}>Search</button>
        </div>
     );
}