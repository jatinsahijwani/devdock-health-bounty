import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Chatting() {
  return (
    <div className="flex h-screen max-h-screen flex-col">
      <header className="flex items-center justify-between bg-gray-900 px-4 py-3 text-white">
        <div className="flex items-center gap-4">
          <Avatar className="rounded-full">
            <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
            <AvatarFallback>RP</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <div className="flex items-center gap-2">
              <h1
                className="max-w-[150px] bg-transparent font-medium focus:outline-none text-white"
                
                
              >
                Dr. Raghu Parmar </h1>
            </div>
            <p className="text-sm text-gray-300">@dr.Raghu</p>
            
          </div>
        </div>
      </header>
      <div className="flex-1 overflow-y-auto bg-black">
        <div className="grid gap-4 p-4">
          <div className="flex items-end gap-2">
            <Avatar className="rounded-full">
              <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
              <AvatarFallback>RP</AvatarFallback>
            </Avatar>
            <div className="max-w-[75%] rounded-lg bg-gray-600 p-3 text-sm text-white">
              <p>Hey there! How's it going?</p>
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <div className="max-w-[75%] rounded-lg bg-blue-500 p-3 text-sm text-white">
              <p>Pretty good, thanks for asking!</p>
            </div>
            <Avatar className="rounded-full">
              <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
              <AvatarFallback>JP</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex items-end gap-2">
            <Avatar className="rounded-full">
              <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
              <AvatarFallback>RP</AvatarFallback>
            </Avatar>
            <div className="max-w-[75%] rounded-lg bg-gray-600 p-3 text-sm text-white">
              <p>Awesome, let's catch up later!</p>
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <div className="max-w-[75%] rounded-lg bg-blue-500 p-3 text-sm text-white">
              <p>Sounds good, talk to you then!</p>
            </div>
            <Avatar className="rounded-full">
              <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
              <AvatarFallback>JP</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
      <div className="bg-black px-4 py-3 text-white">
        <form className="flex items-center justify-center gap-2">
          <Input
            className="bg-gray-900 text-white flex-1 h-12 rounded-full w-[55vw]"
            placeholder="Type your message..."
            type="text"
          />
          <Button className="text-gray-500 rounded-md px-2 py-2 flex items-center justify-center">
            <SendIcon className="h-6 w-6" />
          </Button>
          <Button className="text-gray-500 rounded-md px-2 py-2 flex items-center justify-center ">
            Send Medical History
          </Button>
        </form>
      </div>
    </div>
  )
}

function SendIcon(props) {
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
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}
