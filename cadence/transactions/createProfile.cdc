import FitnessBuddy from 0x9d2ade18cb6bea1a

transaction(goals: String) {
    prepare(signer: AuthAccount) {
        FitnessBuddy.createProfile(goals: goals)
    }
}