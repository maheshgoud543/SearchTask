import { useState } from 'react'
import './Search.css'

const searchKeywords = [
    { keyword: "video playback issues", description: "Troubleshooting video playback problems in live streaming applications" },
    { keyword: "AWS Kinesis Video React integration", description: "Integrating AWS Kinesis Video Streams with a React application" },
    { keyword: "CSP error script loading", description: "Resolving content security policy errors related to loading scripts" },
    { keyword: "Next.js store selection dropdown", description: "Implementing a store selection dropdown in Next.js applications" }
]

const Search = () => {
    const [searchdata, setSearchData] = useState("")
    const [filterItems, setFilterItems] = useState(searchKeywords)

    const handleChange = (e) => {
        const searchdata = e.target.value;
        setSearchData(searchdata)

        const filteredItems = searchKeywords.filter((se) =>
            se.keyword.toLowerCase().includes(searchdata.toLowerCase())
        )
        setFilterItems(filteredItems)
    }

    return (
        <div className="Search ">
            <input placeholder="Search Bar" type="text" value={searchdata} onChange={handleChange} />
            <div className='Search_data'>
                {filterItems.length > 0 ? <ul >
                    {filterItems.map((searchword, index) => ( //Here I mapped SearchKeywords instead of filetrItems
                        <li key={index} >
                            <p>{searchword.keyword}</p>
                            <p>{searchword.description}</p>
                        </li>
                    ))}
                </ul> : <p>No Items found, Search Again</p>}
            </div>
        </div>
    )
}

export default Search
