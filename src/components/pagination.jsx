import React from 'react';

export function Pagination(props) {
    const pageNumbers = []
    const shownNumbers = []
    for (let i = 1; i <= Math.ceil(props.totalResults / props.resultsPerPage); i++){
        pageNumbers.push(i);
    }

    const minNumber = (props.current - 2  < 1 ? 1 : props.current-2)
    const maxNumber = (props.current + 3 > pageNumbers.length ? pageNumbers.length : props.current + 3 )

    for(let i = minNumber; i < maxNumber;i++){
        shownNumbers.push(i)
    }


    return ( 
       <nav>
         <ul className='pagination'>
            <li className="page-item">
                <button onClick={()=>props.paginate(1)} className="page-link">
                    First
                </button>
            </li>
                {shownNumbers.map(number => (
                    <li className="page-item">
                        <button onClick={()=>props.paginate(number)} className={number == props.current ? "page-link active" : "page-link"}>
                            {number}
                        </button>
                    </li>
                ))}

                <li className="page-item">
                    <button onClick={()=>props.paginate(pageNumbers.length)} className={props.current == pageNumbers.length ? "page-link active" : "page-link"}>
                        {pageNumbers.length}
                    </button>
                </li>
            </ul>
       </nav>
     );
}


/*

 <nav>
            <ul className='pagination'>
                {pageNumbers.map(number => {
                    <li className="page-item">
                        <a href="#" className='page-link'>
                            {number}
                        </a>
                    </li>
                })}
            </ul>
        </nav>

*/