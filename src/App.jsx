import React, {useState, useEffect} from 'react'
import './App.scss'
import {Header} from './containers/header'
import {Card} from './components/card'
import {Pagination} from './components/pagination'
import { Footer } from './containers/footer'

function App() {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const [currentPage, setCurrentPage] = useState(1)
  const [resultsPerPage, setResultsPerPage] = useState(15)

  const indexOfLastPost = currentPage * resultsPerPage;
  const indexOfFirstPost = indexOfLastPost - resultsPerPage;
  const currentResults = data.slice(indexOfFirstPost, indexOfLastPost)

  const getData = (result) => {
    setData(result)
    setCurrentPage(1)
  }

  const handleLoading = (current) => {
    setLoading(current)
  }

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
    window.scrollTo(0, 0)
  }
  

  return (
    <div className="App">
      <Header getData={getData} handleLoading={handleLoading}></Header>
      <h1>{loading ? 'LOADING...' : data.length + " results found"}</h1>
      <div className='search-body'>
        <div className='cards-wrapper'>
          {currentResults.map((item, index) => (
            <Card code={item.alpha_two_code}  country={item.country} name={item.name} id={index+(currentPage*resultsPerPage)-resultsPerPage+1} links={item.web_pages}></Card>
          ))}
        </div>
        {data.length > 0 &&
        <Pagination resultsPerPage={resultsPerPage} totalResults={data.length} paginate={paginate} current={currentPage}/>
        }
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
