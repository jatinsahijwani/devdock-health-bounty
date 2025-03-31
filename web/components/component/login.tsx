"use client"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useState } from "react"
import AuthContract from '../../lib/AuthContract';
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Login() {
  const router = useRouter();
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [error,setError] = useState('');
  let handleSubmit = async() => {
    const response = await AuthContract.methods.login(username,password).call();
    if(response)
      {
        router.push('/');
      }
      else
      {
        setError("Incorrect Credentials");
      }
  }
  return (
    <div className="flex min-h-[100dvh] w-full flex-col items-center justify-center bg-gray-100 px-4 py-12 dark:bg-gray-950">
      <div className="container mx-auto flex max-w-6xl flex-col items-center justify-center gap-12 lg:flex-row">
        <div className="flex w-full flex-col items-center justify-center gap-6 lg:w-1/2">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter text-gray-900 dark:text-gray-50 sm:text-5xl md:text-6xl">
              Welcome to our Healthcare Platform
            </h1>
            <p className="max-w-[500px] text-gray-500 dark:text-gray-400 md:text-xl">
              Securely access your medical records, communicate with your healthcare providers, and manage your
              prescriptions.
            </p>
          </div>
          <img
            alt="Healthcare Illustration"
            className="aspect-[5/4] w-full max-w-[500px] rounded-xl object-cover"
            height="400"
            src="/bg.png"
            width="500"
          />
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-6 lg:w-1/2">
          <div className="flex w-full max-w-md flex-col items-center justify-center gap-6 rounded-xl bg-white p-8 shadow-lg dark:bg-gray-900">
            <div className="flex w-full items-center justify-between">
              
            </div>
            <div className="grid w-full gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Username</Label>
                <div className="relative">
                  <MailIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <Input className="pl-10" value={username} onChange={(e) => {
                    setUsername(e.target.value);
                  }} id="username" placeholder="Enter your username" type="text" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <LockIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <Input value={password} onChange={(e) => {
                    setPassword(e.target.value);
                  }} className="pl-10" id="password" placeholder="Enter your password" type="password" />
                </div>
              </div>
              <div className="flex-col items-center justify-between">
                <span className="text-md flex justify-center items-center pb-4 text-red-500">{error}</span>
                <Button className="w-full" onClick={handleSubmit}>Sign In</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function LockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}


function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}
