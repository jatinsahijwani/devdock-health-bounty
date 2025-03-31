pub contract FitnessBuddy {

    pub struct WorkoutPlan {
        pub let id: UInt64
        pub let name: String
        pub let description: String
        pub let exercises: [String]
        pub let duration: UInt64

        init(id: UInt64, name: String, description: String, exercises: [String], duration: UInt64) {
            self.id = id
            self.name = name
            self.description = description
            self.exercises = exercises
            self.duration = duration
        }
    }

    pub struct FitnessProfile {
        pub let address: Address
        pub var goals: String
        pub var workoutPlans: [WorkoutPlan]
        pub var buddies: [Address]

        init(address: Address, goals: String) {
            self.address = address
            self.goals = goals
            self.workoutPlans = []
            self.buddies = []
        }
    }

    pub var profiles: {Address: FitnessProfile}

    init() {
        self.profiles = {}
    }

    pub fun createProfile(goals: String) {
        let profile = FitnessProfile(address: self.account.address, goals: goals)
        self.profiles[self.account.address] = profile
    }

    pub fun updateGoals(newGoals: String) {
        if let profile = &self.profiles[self.account.address] as &FitnessProfile {
            profile.goals = newGoals
        }
    }

    pub fun addBuddy(buddyAddress: Address) {
        if let profile = &self.profiles[self.account.address] as &FitnessProfile {
            profile.buddies.append(buddyAddress)
        }
    }
}