import { useState } from "react"
import ProductCard from "../components/ProductCard"


const Search = () => {
  
  const [search,setSearch] = useState("")
  const [sort,setSort] = useState("")
  const [maxPrice,setMaxPrice] = useState(100000)
  const [catagory,setCatagory] = useState("")
  const [page,setPage] = useState(1)

  const addToCartHandler = ()=> {}

  const isNextPage = true
  const isPrevPage = true


  return (
    <div className="product-search-page"> 
      <aside>
        <h2>filter</h2>

        <div>
          <h4>sort</h4>
          <select
          value={sort}
          onChange={(e)=>setSort(e.target.value)}
          >
            <option value="">none</option>
            <option value="asc">price(low to high)</option>
            <option value="dsc">price(high to low)</option>
          </select>
        </div>

        <div>
          <h4>Max price: {maxPrice || ""}</h4>
          <input
          type="range"
          min={100}
          max={1000000}
          value={maxPrice}
          onChange={(e)=>setMaxPrice(Number(e.target.value))}
          >
          </input>
        </div>

        <div>
          <h4>catagory</h4>
          <select
          value={catagory}
          onChange={(e)=>setCatagory(e.target.value)}
          >
            <option value="">All</option>
            <option value="">s1</option>
            <option value="">s2</option>
          </select>
        </div>

      </aside>


      <main>
        <h1>Products</h1>
        <input 
         type="text" 
         placeholder="search by name..."
         value={search}
         onChange={(e)=>setSearch(e.target.value)}
        />

        <div className="search-product-list">
          <ProductCard productId='2' name='mac' price={50000} stock={34} handler={addToCartHandler} photo='https://m.media-amazon.com/images/I/71jG+e7roXL._AC_UY327_FMwebp_QL65_.jpg'/>
        </div>

        <article>
          <button disabled={!isPrevPage} onClick={()=>setPage((prev)=>prev-1)}>prev</button>

          <span>{page} of {4}</span>

          <button disabled={!isNextPage} onClick={()=>setPage((next)=>next+1)}>next</button>
        </article>
      </main>
    </div>
  )
}

export default Search
