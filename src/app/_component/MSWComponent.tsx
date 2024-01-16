"use client"
import { useEffect } from "react"


export default function MSWComponent() {
    useEffect(() => {
        if (typeof window != 'undefined') { //브라우저에서만 돌아간다는 것을 보장해야함
            if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
                require("@/mocks/browser")
            }
        }
    }, [])
    return null;
}

