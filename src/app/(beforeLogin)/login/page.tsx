"use client";

import { useRouter } from "next/navigation";
import Main from "@/app/(beforeLogin)/_component/Main";
import { useEffect } from "react";


export default function Login() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/i/flow/login');
  }, [])
  return (
    <Main />

  );
}

//router.reaplace 
//localhost:3000 > localhost:3000/login > localhost:3000/i/flow/login