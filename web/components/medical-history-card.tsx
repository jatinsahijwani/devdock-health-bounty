import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export function MedicalHistoryCard() {
  return (
    <Card key="1" className="m-[2vw] border-green-600 border-[5px]">
      <CardHeader>
        <CardTitle className=" text-green-600 text-4xl">Medical History</CardTitle>
        <CardDescription>Patient's medical history and prescription details</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border-black">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-red-600 text-2xl">Diabetes</h3>
              <Button  size="icon" variant="outline">
                <FileEditIcon className="h-4 w-4" />
                <span className="sr-only ">Edit</span>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-yellow-500">Medication</h4>
                <ul className="list-disc list-inside">
                  <li>Insulin</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-yellow-500 ">Prescribed by</h4>
                <p>Dr. Smith Johnson</p>
              </div>
              <div>
                <h4 className="font-medium text-blue-500">Date</h4>
                <p>March 12, 2023</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-red-600 text-2xl">Hypertension</h3>
              <Button size="icon" variant="outline">
                <FileEditIcon className="h-4 w-4" />
                <span className="sr-only">Edit</span>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium  text-yellow-500">Medication</h4>
                <ul className="list-disc list-inside">
                  <li>Aspirin</li>
                  <li>Lisinopril</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium  text-yellow-500 ">Prescribed by</h4>
                <p>Dr. Alice Lee</p>
              </div>
              <div>
                <h4 className="font-medium text-blue-500">Date</h4>
                <p>June 5, 2023</p>
              </div>
            </div>
          </div>
        </div>
        <Separator className="my-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-red-600 text-2xl">Asthma</h3>
              <Button size="icon" variant="outline">
                <FileEditIcon className="h-4 w-4" />
                <span className="sr-only">Edit</span>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium  text-yellow-500">Medication</h4>
                <ul className="list-disc list-inside">
                  <li>Albuterol</li>
                  <li>Inhaled corticosteroids</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium  text-yellow-500">Prescribed by</h4>
                <p>Dr. Michael Brown</p>
              </div>
              <div>
                <h4 className="font-medium text-blue-500">Date</h4>
                <p>August 20, 2023</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-red-600 text-2xl">Allergies</h3>
              <Button size="icon" variant="outline">
                <FileEditIcon className="h-4 w-4" />
                <span className="sr-only">Edit</span>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium  text-yellow-500">Medication</h4>
                <ul className="list-disc list-inside">
                  <li>Antihistamines</li>
                  <li>EpiPen</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium  text-yellow-500">Prescribed by</h4>
                <p>Dr. Sarah White</p>
              </div>
              <div>
                <h4 className="font-medium text-blue-500">Date</h4>
                <p>December 10, 2023</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="mt-[5vh]">
        <Button className="w-full" variant="outline">
          View previous reports
        </Button>
      </CardFooter>
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