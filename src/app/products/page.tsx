import React from 'react'
import data from '../../data/products.json'
import ProductCard from '@/components/ProductCard/ProductCard'

export default function page() {


    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {data && data.products.map(product => (
                <div key={product.id}>
                    <ProductCard product={product} />
                </div>
            ))}
        </div>

    )
}
