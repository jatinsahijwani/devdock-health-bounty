"use client"
import { useState, useEffect } from 'react'
import * as fcl from '@onflow/fcl'

fcl.config()
  .put("accessNode.api", "https://rest-testnet.onflow.org")
  .put("discovery.wallet", "https://fcl-discovery.onflow.org/testnet/authn")
  .put("app.detail.title", "Fitness Buddy")
  .put("app.detail.icon", "https://placekitten.com/g/200/200")

export default function Home() {
  const [user, setUser] = useState({ loggedIn: false })
  const [goals, setGoals] = useState("")

  useEffect(() => {
    fcl.currentUser().subscribe(setUser)
  }, [])

  const createProfile = async () => {
    try {
      const transactionId = await fcl.mutate({
        cadence: `
          import FitnessBuddy from 0x9d2ade18cb6bea1a

          transaction(goals: String) {
            prepare(signer: AuthAccount) {
              FitnessBuddy.createProfile(goals: goals)
            }
          }
        `,
        args: (arg: any, t: any) => [arg(goals, t.String)],
        payer: fcl.authz,
        proposer: fcl.authz,
        authorizations: [fcl.authz],
        limit: 999
      })
      console.log("Transaction ID:", transactionId)
    } catch (error) {
      console.error("Error creating profile:", error)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Fitness Buddy</h1>
        
        {user.loggedIn ? (
          <div className="space-y-4">
            <button
              onClick={() => fcl.unauthenticate()}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Log Out
            </button>
            
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-xl font-semibold mb-4">Create Profile</h2>
              <input
                type="text"
                value={goals}
                onChange={(e) => setGoals(e.target.value)}
                placeholder="Enter your fitness goals"
                className="w-full p-2 border rounded mb-4"
              />
              <button
                onClick={createProfile}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Create Profile
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => fcl.authenticate()}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Log In With Wallet
          </button>
        )}
      </div>
    </div>
  )
}