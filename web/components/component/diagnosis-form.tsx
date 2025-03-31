import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import MedicalHistoryContract from "@/lib/MedicalHistoryContract" 
import web3 from "@/lib/web3"
import { useRouter } from "next/navigation"

export function DiagnosisForm() {
  const router = useRouter();
  const [aadharNumber,setAadharNumber] = useState('');
  const [disease,setDisease] = useState('');
  const [medication,setMedication] = useState('');
  const doctorName = "Dr. John Doe";
  const currentDate = new Date();
  const handleSubmit = async() => {
    const accounts = await web3.eth.getAccounts();
    const gasEstimate = await MedicalHistoryContract.methods.addMedicalRecord(aadharNumber,disease,[medication],doctorName,currentDate.getTime()).estimateGas({from : accounts[0]});
    await MedicalHistoryContract.methods.addMedicalRecord(aadharNumber,disease,[medication],doctorName,currentDate.getTime()).send({from : accounts[0], gas: gasEstimate});
    router.push('/');
  }
   return (
    <div className="space-y-6 w-[47vw] border border-gray-600 rounded-xl">
    <div className="space-y-2 text-center m-6">
      <h1 className="text-3xl font-bold text-blue-400" >Patient Diagnosis</h1>
      <p className="text-gray-500 dark:text-gray-400">Upload your patient's diagnosis, disease, and medication.</p>
    </div>
    <div className=" grid grid-cols-2 gap-4 m-[5vh]">
      <div className="gap-4">
        <div className=" w-[45vh] max-w-[45vh]">
          <Label htmlFor="patient-name">Patient Name</Label>
          <Input id="patient-name" placeholder="Enter patient name" required />
        </div>
        <div className=" w-[45vh] mt-3 max-w-[45vh]">
          <Label htmlFor="patient-age">Patient Age</Label>
          <Input id="patient-age" placeholder="Enter patient age" required type="number" />
        </div>
      </div>
      <div className=" w-[45vh] max-w-[45vh]">
        <Label htmlFor="diagnosis">Aadhar Number</Label>
        <Input id="aadharNumber" value={aadharNumber} onChange={(e) => {
          setAadharNumber(e.target.value);
        }} placeholder="Enter Patient's Aadhar Number" required />
      </div>
      <div className=" w-[45vh] max-w-[45vh]">
        <Label htmlFor="disease">Disease</Label>
        <Input id="disease" value={disease} onChange={(e) => {
          setDisease(e.target.value);
        }} placeholder="Enter disease" required />
      </div>
      <div className="w-[45vh] max-w-[45vh]">
        <Label htmlFor="medication">Medication</Label>
        <Input id="medication" value={medication} onChange={(e) => {
          setMedication(e.target.value);
        }} placeholder="Enter, seperated Medications" required />
      </div>
      <div className="w-[45vh] max-w-[45vh]">
        <Label htmlFor="pdf-upload">Upload PDF (Optional)</Label>
        <Input accept="application/pdf" id="pdf-upload" type="file"  />
      </div>

      <div className="w-[10vw] mt-[4vh] rounded-xxl">
      <Button onClick={handleSubmit} className=" bg-green-500" type="submit">
        Submit
      </Button >

      </div>
      
    </div>
    <div className="text-center m-6">
      </div>
  </div>
  
  )
}
