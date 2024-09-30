import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard';

function Search() {
    const [products, setProducts] = useState(null);
    const [fproducts, setFproducts] = useState(null);
    const [filter, setFilter] = useState('')
    async function fetchData() {
        try {                                                             //Error Handling
            const res = await axios.get('https://dummyjson.com/products');
            setProducts(res.data.products)
        } catch (error) {
            alert('Error in Fetching data')
        }

    }
    function handelSearch() {
        if (filter === '') {
            return alert('please enter somthing');
        }
        console.log(filter)
        console.log(products)
        const temp = products.filter((el) => el.category.toLowerCase().includes(filter.toLowerCase()) || el.title.toLowerCase().includes(filter.toLowerCase()) || el.description.toLowerCase().includes(filter.toLowerCase()));
        setFproducts(temp);
        setFilter('');
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <div className='bg-black sm:w-11/12 p-3 black m-auto md: lg:w-1/2 mt-3 rounded-3xl flex gap-3'>
                <input placeholder='Search here' className='p-3 rounded-3xl w-4/5 outline-none border-0' type="text" value={filter} onChange={(e) => setFilter(e.target.value)} />
                <button onClick={handelSearch} className='text-white sm:p-2 w-1/5 bg-orange-400 rounded-3xl'> Search</button>
            </div>
            <div>
                {fproducts ? <div className='w-full flex flex-wrap justify-evenly items-center p-4 gap-3'>
                    {fproducts.map((product) => {
                        return <ProductCard key={product.id} product={product}></ProductCard>
                    })}
                </div> : <>
                    <h1 className='text-center m-6'>Your Resuls will be shown here</h1>
                </>}

            </div>

        </>
    )
}

export default Search
