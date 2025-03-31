import Link from "next/link"

export default function Telemedicine() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <BriefcaseMedicalIcon className="h-6 w-6" />
          <span className="sr-only">Acme Telehealth</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Services
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Connect with your Doctor
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Schedule a video call appointment with a top-rated doctor in your area.
                  </p>
                </div>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-[#4CAF50] px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-[#43a047] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#4CAF50] disabled:pointer-events-none disabled:opacity-50 dark:bg-[#4CAF50] dark:text-gray-50 dark:hover:bg-[#43a047] dark:focus-visible:ring-[#4CAF50]"
                  href="/videocall"
                >
                  Connect with Doctor
                </Link>
              </div>
              <img
                alt="Doctor"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                height="550"
                src="/doc.png"
                width="550"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <img
                alt="Doctor Profile"
                className="mx-auto aspect-square overflow-hidden rounded-full object-cover sm:w-full lg:order-last"
                height="400"
                src="/placeholder.svg"
                width="400"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Dr. Jane Doe</h2>
                  <p className="text-gray-500 dark:text-gray-400">Family Medicine Specialist</p>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Dr. Jane Doe is a highly experienced family medicine specialist with over 15 years of practice. She
                    is known for her compassionate care and personalized approach to patient treatment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Availability</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Check Dr. Jane Doe's upcoming availability and schedule your appointment.
                </p>
              </div>
              <div className="grid grid-cols-7 gap-2">
                <div className="bg-gray-100 px-2 py-1 text-center font-medium dark:bg-gray-800">Sun</div>
                <div className="bg-gray-100 px-2 py-1 text-center font-medium dark:bg-gray-800">Mon</div>
                <div className="bg-gray-100 px-2 py-1 text-center font-medium dark:bg-gray-800">Tue</div>
                <div className="bg-gray-100 px-2 py-1 text-center font-medium dark:bg-gray-800">Wed</div>
                <div className="bg-gray-100 px-2 py-1 text-center font-medium dark:bg-gray-800">Thu</div>
                <div className="bg-gray-100 px-2 py-1 text-center font-medium dark:bg-gray-800">Fri</div>
                <div className="bg-gray-100 px-2 py-1 text-center font-medium dark:bg-gray-800">Sat</div>
                <div className="bg-[#4CAF50] text-gray-50 px-2 py-1 text-center font-medium">9:00 AM</div>
                <div className="bg-[#4CAF50] text-gray-50 px-2 py-1 text-center font-medium">10:00 AM</div>
                <div className="bg-[#4CAF50] text-gray-50 px-2 py-1 text-center font-medium">11:00 AM</div>
                <div className="bg-[#4CAF50] text-gray-50 px-2 py-1 text-center font-medium">2:00 PM</div>
                <div className="bg-[#4CAF50] text-gray-50 px-2 py-1 text-center font-medium">3:00 PM</div>
                <div className="bg-[#4CAF50] text-gray-50 px-2 py-1 text-center font-medium">4:00 PM</div>
                <div className="bg-gray-100 px-2 py-1 text-center font-medium dark:bg-gray-800">5:00 PM</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Acme Telehealth. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function BriefcaseMedicalIcon(props) {
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
      <path d="M12 11v4" />
      <path d="M14 13h-4" />
      <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <path d="M18 6v14" />
      <path d="M6 6v14" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  )
}
