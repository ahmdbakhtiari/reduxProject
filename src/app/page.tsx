'use client'
import { minusCount, plusCount } from "@/Redux/Slices/CounterSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
export default function Home() {

    const countSelector = useSelector((state: any) => state.counterReducer.count)
    const dispatch = useDispatch()
    return (
        <>
            <div className="flex items-center justify-evenly ">
                <div
                    onClick={() => {
                        dispatch(plusCount(1))
                    }}
                    className="h-52 w-52 bg-sky-200 rounded-lg m-auto text-center pt-[8%] text-lg font-bold cursor-pointer transition-all hover:text-white">
                    Click on Plus
                </div>
                <div
                    onClick={() => {
                        dispatch(minusCount(1))
                    }}
                    className="h-52 w-52 bg-red-200 rounded-lg m-auto text-center pt-[8%] text-lg font-bold cursor-pointer transition-all hover:text-white">
                    Click on Minus
                </div>
            </div>
            <p className="font-bold text-2xl mx-auto mt-4 text-center">{countSelector}</p>
        </>
    );
}
