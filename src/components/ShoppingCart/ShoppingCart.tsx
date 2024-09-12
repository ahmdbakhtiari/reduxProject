'use client'
import { formatPrice } from '@/lib/utils'
import { ProductType } from '@/types/ProductType'
import { Button } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function ShoppingCart() {
    const products = useSelector((state: any) => state.addProductReducer)
    const [finalPrice, setFinalPrice] = useState<number>(0);
    useEffect(() => {
        const totalPrice = products.reduce((acc: number, product: ProductType) => acc + Number(product.price), 0);
        setFinalPrice(Number(totalPrice));
    }, [products]);

    return (

        <div className="container mx-auto mt-10">
            <div className="sm:flex shadow-md my-10">
                <div className="  w-full  sm:w-3/4 bg-white px-10 py-10">
                    <div className="flex justify-between border-b pb-8">
                        <h1 className="font-semibold text-2xl">سبد خرید</h1>
                        <h2 className="font-semibold text-2xl">{products.length > 0 ? products.length : 0} سفارش</h2>
                    </div>
                    {products.map((product: ProductType) => (

                        <div key={product.id} className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
                            <div className="md:w-4/12 2xl:w-1/4 w-full">
                                <Image src={product.picture ? product.picture : '/nopic.png'} alt={product.title} width={100} height={40} className="h-full object-center object-cover md:block hidden" />
                            </div>
                            <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                                {/* <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">RF293</p> */}
                                <div className="flex items-center justify-between w-full">
                                    <Link href= {`/products/${product.id}`} className="text-base text-gray-800 leading-8 transition-all hover:text-blue-900">{product.title}</Link>
                                    <select aria-label="Select quantity" className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none">
                                        <option>01</option>
                                        <option>02</option>
                                        <option>03</option>
                                    </select>
                                </div>
                                {/* <p className="text-xs leading-3 text-gray-600 pt-2">Height: 10 inches</p>
                        <p className="text-xs leading-3 text-gray-600 py-4">Color: Black</p>
                        <p className="w-96 text-xs leading-3 text-gray-600">Composition: 100% calf leather</p> */}
                                <div className="flex items-center justify-between pt-5">
                                    <div className="flex item-center gap-3">
                                        {/* <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">Add to favorites</p> */}
                                        <Button size='sm' className="text-white" color='success'>افزودن به علاقه مندیها</Button>
                                        {/* <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">Remove</p> */}
                                        <Button size='sm' className="text-white" color='danger'>حذف</Button>
                                    </div>
                                    <p className="text-base font-black leading-none text-gray-800">{formatPrice(Number(product.price))} تومان</p>
                                </div>
                            </div>
                        </div>
                    ))}

                    <a href="#" className="flex font-semibold text-indigo-600 text-sm mt-10">
                        <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
                            <path
                                d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                        </svg>
                        ادامه به خرید
                    </a>
                </div>
                <div id="summary" className=" w-full   sm:w-1/4   md:w-1/2     px-8 py-10">
                    <h1 className="font-semibold text-2xl border-b pb-8">خلاصه سفارشات</h1>
                    <div className="flex justify-between mt-10 mb-5">
                        <span className="font-semibold text-sm uppercase">آیتم {products.length}</span>
                        <span className="font-semibold text-sm">{formatPrice(finalPrice + 50000)}</span>
                    </div>
                    <div>
                        <label className="font-medium inline-block mb-3 text-sm uppercase">
                            نوع تحویل
                        </label>
                        <select
                            className="block p-2 text-gray-600 w-full text-sm"
                            onChange={(e) => {
                                if(e.target.options.selectedIndex === 0) {
                                    setFinalPrice(prev => prev + 50000)
                                }else if(e.target.options.selectedIndex === 1){
                                    setFinalPrice(prev => prev - 50000)
                                }
                            }}
                        >
                            <option value="50.000 تومان">هزینه ارسال 50.000 تومان</option>
                            <option value="0 تومان">دریافت حضوری 0 تومان</option>
                        </select>
                    </div>
                    <div className="py-10">
                        <label
                            className="font-semibold inline-block mb-3 text-sm uppercase"
                        >
                            کد تخفیف
                        </label>
                        <input
                            type="text"
                            id="promo"
                            placeholder="کد تخفیف خود را وارد کنید "
                            className="p-2 text-sm w-full"
                        />
                    </div>
                    <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
                        اعمال کردن
                    </button>
                    <div className="border-t mt-8">
                        <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                            <span>جمع هزینه ها </span>
                            <span>{formatPrice(finalPrice + 50000)}</span>
                        </div>
                        <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                            پرداخت
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
