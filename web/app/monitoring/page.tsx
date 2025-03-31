"use client";
import { useState, useEffect } from "react";
import { FcEmptyTrash, FcFullTrash } from "react-icons/fc";
import { RxCross1 } from 'react-icons/rx'
import { GoDash } from "react-icons/go";
import { FaBed } from 'react-icons/fa'
import {FaBedPulse} from 'react-icons/fa6'

const arr = [10, 38, 41, 15, 29, 35, 46, 23, 7, 2];

export default function Page() {
 const [Status, setStatus] = useState<boolean>(true);

 useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://192.168.57.57/dustbin",{
          method: "GET"
        });
        const data = await response.json();
        console.log(data);
        if(data.sensorData === 4095) setStatus(true);
        else setStatus(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); 
    const intervalId = setInterval(fetchData, 1000);
    return () => clearInterval(intervalId); 
 }, []);

 return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
    <div className="flex flex-col gap-8">
      <DustbinGroup init={0} Status={Status} />
      <DustbinGroup init={10} Status={Status} />
      <DustbinGroup init={20} Status={Status} />
      <DustbinGroup init={30} Status={Status} />
      <DustbinGroup init={40} Status={Status} />
    </div>
    </div>
 );
}

function GreenDustbin({nm,key,Status} : {nm:number,key:number,Status:boolean})
{
  return (
    <div className="flex flex-col">
    {arr.includes(nm) && !Status ?  <Dash status={Status} /> : <PulseBed />}
    <p className="text-center">D{nm}</p>
    </div>
  )
}

function Dash(props: any)
{
  return (
    <>
      { props.status ?  <PulseBed /> : <GoDash className="custom-icon-green text-6xl" />}
    </>
  )
}

function PulseBed() {
    const [state,setState] = useState(true);
    return (
        <>
          <FaBedPulse className="custom-icon-red text-6xl"/>
        </>
    )
}

function DustbinGroup({init,Status}: {init:number,Status:boolean}): React.ReactElement {
  const arr: number[] = [];
  for (let i = 1; i <= 10; i++) {
     arr.push(init + i);
  }
  return (
     <div className="flex gap-4 text-white justify-center items-center">
       {arr.map((item: number, index: number) => (
         <GreenDustbin key={index} nm={item} Status={Status}/>
       ))}
     </div>
  );
 }