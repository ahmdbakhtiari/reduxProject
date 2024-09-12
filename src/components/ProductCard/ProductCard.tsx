'use client'
import Image from 'next/image'
import React from 'react'
import { ProductType } from '../../types/ProductType'
import { formatPrice } from '@/lib/utils'
import { Button } from '@nextui-org/react'
import { useDispatch } from 'react-redux'
import { addProduct } from '@/Redux/Slices/ProductCountSlices'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'

export default function ProductCard({ product, className }: { product: ProductType, className?: string }) {
    const dispatch = useDispatch()
    const router = useRouter()
    return (

        <div className={`${className}max-w-sm h-full flex flex-col justify-between bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-all hover:shadow-xl`}>


            <Link href={`/products/${product.id}`}>
                <Image
                    className="w-full h-48 object-contain p-2"
                    src={product.picture}
                    alt={product.title}
                    width={500}
                    height={300}
                /></Link>
            <div className="p-4 mt-6 flex flex-col justify-between h-full">
                <Link href={`/products/${product.id}`}><h2 className="text-sm leading-6 text-gray-800 text-right overflow-hidden transition-all hover:text-primary-600">{product.title}</h2></Link>
                {/* <p className="text-gray-600 mt-2">{product.description}</p> */}
                <div className="flex items-center justify-between mt-8">
                    <span className="text-xl text-gray-900">{formatPrice(Number(product.price))}</span>
                    {/* <a
                        href="#"
                        className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-lg hover:bg-blue-600 transition"
                    >
                        Add to Cart
                    </a> */}
                    <Button color='success' className='text-white'
                        onClick={() => {
                            dispatch(addProduct(product))
                        }}
                    >افزودن به سبد</Button>
                </div>
            </div>
        </div>
    )
}
