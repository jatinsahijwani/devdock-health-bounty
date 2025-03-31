"use client";
import Link from "next/link";
import { useRouter } from "next/navigation"
export function Selection() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-8">
      <div className="text-center space-y-2">
        <div className="text-4xl font-bold typewriter">I am a..</div>
        <p className="text-gray-500 dark:text-gray-400">Select your role</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="group relative h-[300px] w-[300px] overflow-hidden rounded-lg">
         <Link href='/home'>
          <div className="absolute inset-0 bg-gray-900 opacity-0 transition-opacity duration-300 group-hover:opacity-80" />
          <div className="absolute inset-0 flex items-center justify-center p-6 text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">USER</h3>
              <p>User / Patient</p>
            </div>
          </div>
          <img
            alt="Card 1"
            className="h-full w-full object-cover"
            height="300"
            src="/image.png"
            style={{
              aspectRatio: "300/300",
              objectFit: "cover",
            }}
            width="300"
          />
        </Link>
        </div>
        <div className="group relative h-[300px] w-[300px] overflow-hidden rounded-lg">
        <Link href='/home'>
          <div className="absolute inset-0 bg-gray-900 opacity-0 transition-opacity duration-300 group-hover:opacity-80" />
          <div className="absolute inset-0 flex items-center justify-center p-6 text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">DOCTOR</h3>
              <p>Doctor</p>
            </div>
          </div>
          <img
            alt="Card 2"
            className="h-full w-full object-cover"
            height="300"
            src="/doctor.png"
            style={{
              aspectRatio: "300/300",
              objectFit: "cover",
            }}
            width="300"
          />
          </Link>
        </div>
        <div className="group relative h-[300px] w-[300px] overflow-hidden rounded-lg">
        <Link href='/home'>
          <div className="absolute inset-0 bg-gray-900 opacity-0 transition-opacity duration-300 group-hover:opacity-80" />
          <div className="absolute inset-0 flex items-center justify-center p-6 text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">PHARMACIST</h3>
              <p>Pharmacist</p>
            </div>
          </div>
          <img
            alt="Card 3"
            className="h-full w-full object-cover"
            height="300"
            src="/pharma.png"
            style={{
              aspectRatio: "300/300",
              objectFit: "cover",
            }}
            width="300"
          />
          </Link>
        </div>
      </div>
    </div>
  )
}
