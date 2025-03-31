"use client";
import { ResponsiveLine } from "@nivo/line";
import { ReactNode, useEffect,useState } from "react";
import { useRouter } from "next/navigation";


export default function Component() {
  const router = useRouter();
  const [wrist,setWrist] = useState(false);
  const [bpm,setBpm] = useState(81);
  let callApi = async() => {
    
  }
  const callApis = async() => {
    const response = await fetch("http://192.168.57.57/dustbin",{
      method: "GET"
    });
    const data = await response.json();
    if(data.sensorData == 4095) setWrist(true);
    else setWrist(false);
  }
  useEffect(()=> {
    setInterval(callApis,200);
  },[])
  return ( 
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-900 text-white py-4 px-4">
        <h1 className="text-2xl font-bold">Smart Health Monitoring Dashboard</h1>
      </header>
      <main className="flex-1 p-6 space-y-2">
        <section>
          <div className="grid grid-cols-4 gap-4">
            <div className={`${wrist ? 'bg-green-600' : 'bg-red-600'} rounded-lg shadow p-4`}>
              <h3 className={`text-l font-bold mb-2 ${wrist ? 'text-red-600': 'text-white'}`}>Band Status</h3>
              <p className="text-4xl font-bold text-white">{wrist ? 'On-Wrist ✅' : 'Off-Wrist ❌'}</p>
            </div>
            <div className="bg-[#fca510] rounded-lg shadow p-4">
              <h3 className="text-l font-bold mb-2 text-white">Heart Rate</h3>
              {wrist ? <p className="text-4xl font-bold text-white">{bpm} BPM</p> : <p className="text-4xl font-bold text-white">- BPM</p>} 
            </div>
            <div className="bg-[#fca510]  rounded-lg shadow p-4">
              <h3 className="text-l font-bold text-white mb-2">Blood Pressure</h3>
              <p className="text-4xl font-bold text-white">120/80 mmHg</p>
            </div>
            <div className="bg-[#fca510]  rounded-lg shadow p-4">
              <h3 className="text-l font-bold mb-2 text-wh">Blood Oxygen</h3>
              <p className="text-4xl font-bold text-white">99%</p>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-4 text-white">Activity Tracker</h2>
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-lg font-bold mb-2 text-red-600">Daily Activity</h3>
            <LineChart className="aspect-[8/2]" />
          </div>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-4 text-white">Medication Manager</h2>
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-lg font-bold mb-2 text-blue-600">Current Medications</h3>
            <ul className="space-y-2">
              <li className="flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-red-600">Aspirin</h4>
                  <p className="text-black">81mg, 1 tablet daily</p>
                </div>
                <div className="flex gap-2">
                  <button className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-green-700">Log Taken</button>
                  <button className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                    Add Reminder
                  </button>
                </div>
              </li>
              <li className="flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-red-600">Lisinopril</h4>
                  <p className="text-gray-500">10mg, 1 tablet daily</p>
                </div>
                <div className="flex gap-2">
                  <button className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-green-700">Log Taken</button>
                  <button className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                    Add Reminder
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </section>
        
        <section>
          <h2 className="text-xl font-bold mb-4">Appointment Calendar</h2>
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-lg font-bold mb-2 text-red-600">Upcoming Appointments</h3>
            <ul className="space-y-2">
              <li className="flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-black">Dr. Smith</h4>
                  <p className="text-black">April 15, 2:00 PM</p>
                </div>
                <div>
                  <button className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                    Set Reminder
</button>
                </div>
              </li>
              <li className="flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-black">Dr. Johnson</h4>
                  <p className="text-black">May 1, 10:30 AM</p>
                </div>
                <div>
                  <button onClick={()=> {router.push('/videocall')}} className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                    Join Now
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}

function LineChart(props: React.HTMLProps<HTMLDivElement>) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  )
}