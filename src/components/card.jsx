import React from 'react';


export function Card(props) {
    return ( 
       
            <div className='uni-card'>
                 <a href={props.links[0]} target="_blank">
                    <div className='card-body'>
                        <span className='title'>{props.name}</span>
                        <span className='country'>{props.country}</span>
                    </div>

                    <div className='card-header'>

                        <div className='card-id'>
                                {props.id}
                        </div>

                        <div className='country-w'>
                            <span className='code'>{props.code}</span>
                        </div>
                    </div>
                    
                </a>
            </div>
     );
}
