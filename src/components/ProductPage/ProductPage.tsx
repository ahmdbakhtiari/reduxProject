'use client'
import React, { Suspense, useEffect, useState } from 'react'
import products from '../../data/productsDetail.json'
import { ProductDetailType, ProductType } from '@/types/ProductType'
import Image from 'next/image'
import { Button } from '@nextui-org/react'
import { motion } from 'framer-motion'
import { addProduct } from '@/Redux/Slices/ProductCountSlices'
import { useDispatch } from 'react-redux'
import { formatPrice } from '@/lib/utils'
export default function ProductPage({ productId }: { productId: string }) {
    const [product, setProduct] = useState<ProductDetailType>()
    const [isExpanded, setIsExpanded] = useState(false);
    useEffect(() => {
        setProduct(products.productsDetail.find((product: ProductDetailType) => {
            return String(product.id) == productId
        }))
    }, [])
    const dispatch = useDispatch()
    return (
        <div className="border rounded-xl  py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row -mx-4">
                    <div className="md:flex-1 px-4">
                        <div className="h-[460px] rounded-lg  mb-4">
                            <Suspense fallback = {<Image className="w-full h-full object-contain" width={1000} height={1000} alt = "nopic alt"src={'./nopic.png'} />}>

                                <Image className="w-full h-full object-contain" width={1000} height={1000} src={product?.picture ? product.picture : "/nopic.png"} alt={product?.title ? product.title : "picture alt"} />
                            </Suspense>
                        </div>
                        <div className="flex -mx-2 mb-4">
                            <div className="w-1/2 px-2">
                                <Button
                                    onClick={() => {
                                        dispatch(addProduct(product))
                                    }}
                                    color='success' className="w-full  text-white py-2 px-4 rounded-full font-bold ">افزودن به سبد خرید</Button>
                            </div>
                            <div className="w-1/2 px-2">
                                <Button color='secondary' className="w-full  text-white py-2 px-4 rounded-full font-bold">افزودن به علاقه مندیها</Button>
                            </div>
                        </div>
                    </div>
                    <div className="md:flex-1 px-4">
                        <h2 className="text-xl leading-7 font-bold text-gray-800 dark:text-white mb-2">{product?.title}</h2>

                        <div className="flex flex-col mb-4 gap-1">
                            <div>
                                <span className="font-bold text-gray-700 dark:text-gray-300">قیمت : </span>
                                <span className="text-gray-600 dark:text-gray-300">{formatPrice(Number(product?.price))} تومان </span>
                            </div>
                            <div>
                                <span className="font-bold text-gray-700 dark:text-gray-300">موجود در انبار : </span>
                                <span className="text-gray-600 dark:text-gray-300">{product?.inventory}</span>
                            </div>
                        </div>
                        <div className="mb-4">
                            <span className="font-bold text-gray-700 dark:text-gray-300">انتخاب رنگ:</span>
                            <div className="flex items-center mt-2">
                                {product?.colors.map(color => (
                                    <button key={product.id} className={`w-6 h-6 rounded-full ${color} mr-2`}></button>
                                ))}
                            </div>
                        </div>
                        <div className="mb-4">
                            <span className="font-bold text-gray-700 dark:text-gray-300">انتخاب صفحه نمایش:</span>
                            <div className="flex items-center mt-2">
                                <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">S</button>
                                <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">M</button>
                                <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">L</button>
                                <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XL</button>
                                <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XXL</button>
                            </div>
                        </div>

                        <div>
                            <span className="font-bold text-gray-700 dark:text-gray-300">توضیحات:</span>
                            <motion.div
                                initial={{ height: '98px' }} // ارتفاع اولیه
                                animate={{ height: isExpanded ? 'auto' : '98px' }} // تغییر ارتفاع براساس حالت
                                transition={{ duration: 0.3 }} // مدت زمان انیمیشن
                                className="overflow-hidden text-gray-600 dark:text-gray-300 text-sm mt-2">
                                {product?.description}
                            </motion.div>

                            <Button
                                className='mt-4'
                                color='primary'
                                onClick={() => setIsExpanded(prev => !prev)}
                            >
                                {isExpanded ? 'بستن' : 'بیشتر'}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
