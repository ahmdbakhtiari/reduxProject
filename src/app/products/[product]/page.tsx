import Loading from '@/components/Loading/Loading'
import ProductPage from '@/components/ProductPage/ProductPage'
import React, { Suspense } from 'react'

export default function page({ params }: { params: { product: string } }) {


    return (
        <Suspense fallback = {<Loading />}>
            <div>
                <ProductPage productId={params.product} />
            </div>
        </Suspense>
    )
}
