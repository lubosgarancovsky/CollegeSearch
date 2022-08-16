import React  from 'react';
import { SearchBar } from '../components/searchbar';
import axios from 'axios';

export function Header(props) {

    const searchSubmit = (country, name) => {
        props.handleLoading(true)
        const url = `http://universities.hipolabs.com/search?name=${name}&country=${country}`

        axios.get(url)
        .then(res => {
            props.getData(res.data);
            props.handleLoading(false) 
      })
    }

    return ( 
        <section className='search-header'>
            <h1>Search for any university in the world</h1>
            <SearchBar searchSubmit={searchSubmit}/>
        </section>
     );
}