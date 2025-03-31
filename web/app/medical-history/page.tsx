"use client";
import { HoverEffect1 } from "@/components/ui/card-hover-effect1";
import React, { useEffect, useState } from "react";
import { DiagnosisForm } from "@/components/component/diagnosis-form";
import MedicalHistoryContract from '../../lib/MedicalHistoryContract';


export default function CardHoverEffectDemo() {
  return (
    <div className=" w-full ">
      <div className="ml-[2vw] grid grid-cols-2">
          <MedicalHistoryCard />
          <div>
            <HoverEffect1 items={projects1} />
            <DiagnosisForm />
          </div>
      </div>
    </div>
  );
}
const projects1 = [
    {
      title: "Patient Name: Balrma Sharma",
      description:
        "He has been diagnosed with both asthma and diabetes. His medical history includes regular monitoring of his blood sugar levels and adherence to a strict diet.",
      link: "http://localhost:3000/medical-history",
    },
  ];

  import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
  import { Button } from "@/components/ui/button"
  import { Separator } from "@/components/ui/separator"
  
  export function MedicalHistoryCard() {

    const [medicalHistory,setMedicalHistory] = useState([]);

    useEffect(() => {

      let x = async() => {
        const response = await MedicalHistoryContract.methods.getMedicalRecords("123412341234").call();
        if(response) setMedicalHistory(response);
      }

      x();
    },[])

    return (
      <Card key="1" className="m-[2vw] border-green-600 border-[2px] rounded-xxl h-[42vw]">
        <CardHeader className=" align-middle items-center">
          <CardTitle className=" text-blue-400 text-4xl font-monospaced">Medical History</CardTitle>
          <CardDescription>Patient's medical history and prescription details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {medicalHistory.length > 0 && <div className="grid grid-cols-1  gap-4">
            <div className="border-black">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-white text-2xl">{medicalHistory[0].disease}</h3>
               </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-yellow-500">Medication</h4>
                  <ul className="list-disc list-inside">
                    <li>{medicalHistory[0].medications}</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-yellow-500 ">Prescribed by</h4>
                  <p>{medicalHistory[0].doctorName}</p>
                </div>
                <div>
                  <h4 className="font-medium text-white">Date</h4>
                  <p>April 15, 2023</p>
                </div>
              </div>
            
            </div>
          </div>}
          <Separator className="my-4" />
          {medicalHistory.length > 1 && <div className="grid grid-cols-1  gap-4">
            <div className="border-black">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-white text-2xl">{medicalHistory[1].disease}</h3>
               </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-yellow-500">Medication</h4>
                  <ul className="list-disc list-inside">
                    <li>{medicalHistory[1].medications}</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-yellow-500 ">Prescribed by</h4>
                  <p>{medicalHistory[1].doctorName}</p>
                </div>
                <div>
                  <h4 className="font-medium text-white">Date</h4>
                  <p>March 19, 2012</p>
                </div>
              </div>
            </div>
          </div>}
          <Separator className="my-4" />
          { <div className="grid grid-cols-1  gap-4">
            <div className="border-black">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-white text-2xl">Hyper-Tension</h3>
               </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-yellow-500">Medication</h4>
                  <ul className="list-disc list-inside">
                    <li>ACE Inhibitors</li>
                    <li>Amlodipine</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-yellow-500 ">Prescribed by</h4>
                  <p>Dr. Ruchika Sharma</p>
                </div>
                <div>
                  <h4 className="font-medium text-white">Date</h4>
                  <p>October 5, 2003</p>
                </div>
              </div>
            </div>
          </div>}
        </CardContent>
      </Card>
    )
  }
  
  function FileEditIcon(props) {
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
        <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z" />
      </svg>
    )
  }