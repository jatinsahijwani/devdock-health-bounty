import web3 from './web3';

const contractAddress = '0x98DD4b641DaF59eA977FC890FC45D5e206087F9f'
const abi = [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "medicalRecordsByAadhar",
      "outputs": [
        {
          "internalType": "string",
          "name": "disease",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "doctorName",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "date",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "aadharNumber",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "disease",
          "type": "string"
        },
        {
          "internalType": "string[]",
          "name": "medications",
          "type": "string[]"
        },
        {
          "internalType": "string",
          "name": "doctorName",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "date",
          "type": "uint256"
        }
      ],
      "name": "addMedicalRecord",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "aadharNumber",
          "type": "uint256"
        }
      ],
      "name": "getMedicalRecords",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "disease",
              "type": "string"
            },
            {
              "internalType": "string[]",
              "name": "medications",
              "type": "string[]"
            },
            {
              "internalType": "string",
              "name": "doctorName",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "date",
              "type": "uint256"
            }
          ],
          "internalType": "struct MedicalHistory.MedicalRecord[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }]

const MedicalHistoryContract = new web3.eth.Contract(abi,contractAddress);

export default MedicalHistoryContract;