import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";

export default function Component() {
  return (
    <div className="flex h-screen w-full">
      <div className="flex h-full w-64 flex-col border-r bg-gray-100 dark:border-gray-800 dark:bg-gray-950">
        <div className="flex h-16 items-center justify-between border-b px-6 dark:border-gray-800">
          <div className="flex items-center gap-3">
            <MoveLeftIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
            <h1 className="text-lg font-semibold">Chatbot</h1>
          </div>
        </div>
        <div className="flex-1 overflow-auto p-4">
          <nav className="grid gap-2">
            <Link
              className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-500 transition-all hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50"
              href="#"
            >
              <UploadIcon className="h-5 w-5" />
              File Upload
            </Link>
            <Link
              className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-500 transition-all hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50"
              href="#"
            >
              <UserIcon className="h-5 w-5" />
              Account Settings
            </Link>
            <Link
              className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-500 transition-all hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50"
              href="#"
            >
              <GaugeIcon className="h-5 w-5" />
              Other Options
            </Link>
          </nav>
        </div>
      </div>
      <div className="flex flex-1 flex-col">
        <header className="flex h-16 items-center justify-between border-b bg-white px-6 dark:border-gray-800 dark:bg-gray-900">
          <div className="flex items-center gap-3">
            <MicroscopeIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            <Input
              className="w-64 bg-gray-100 dark:bg-gray-800"
              placeholder="Search"
              type="text"
            />
          </div>
          <div className="flex items-center gap-3">
            <Button size="icon" variant="ghost">
              <GaugeIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            </Button>
            <Avatar className="h-8 w-8">
              <AvatarImage alt="User" src="/placeholder-avatar.jpg" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </header>
        <div className="flex-1 overflow-auto p-6">
          <div className="mx-auto flex max-w-2xl flex-col gap-6">
            <div className="flex w-full items-center gap-3">
              <Input
                className="flex-1"
                placeholder="Enter a topic"
                type="text"
              />
              <Button>Start</Button>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Avatar className="shrink-0">
                  <AvatarImage alt="Chatbot" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>CB</AvatarFallback>
                </Avatar>
                <div className="flex-1 rounded-lg bg-gray-200 p-4 dark:bg-gray-800">
                  <p>
                    Hello! I'm an AI chatbot. What topic would you like to
                    discuss?
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 justify-end">
                <div className="flex-1 rounded-lg bg-blue-500 p-4 text-white dark:bg-blue-600">
                  <p>I'd like to discuss technology and the future of AI.</p>
                </div>
                <Avatar className="shrink-0">
                  <AvatarImage alt="You" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>You</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex items-start gap-3">
                <Avatar className="shrink-0">
                  <AvatarImage alt="Chatbot" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>CB</AvatarFallback>
                </Avatar>
                <div className="flex-1 rounded-lg bg-gray-200 p-4 dark:bg-gray-800">
                  <p>
                    That's a fascinating topic! What are your thoughts on the
                    potential impact of AI on society?
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 justify-end">
                <div className="flex-1 rounded-lg bg-blue-500 p-4 text-white dark:bg-blue-600">
                  <p>
                    I believe AI has the potential to greatly improve many
                    aspects of our lives, from healthcare to transportation.
                    However, I'm also concerned about the ethical implications
                    and the need for responsible development and deployment of
                    AI systems.
                  </p>
                </div>
                <Avatar className="shrink-0">
                  <AvatarImage alt="You" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>You</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex items-start gap-3">
                <Avatar className="shrink-0">
                  <AvatarImage alt="Chatbot" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>CB</AvatarFallback>
                </Avatar>
                <div className="flex-1 rounded-lg bg-gray-200 p-4 dark:bg-gray-800">
                  <p>
                    Those are excellent points. What do you think are the most
                    important ethical considerations when it comes to AI
                    development?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-16 items-center border-t bg-white px-6 dark:border-gray-800 dark:bg-gray-900">
          <div className="flex w-full items-center gap-3">
            <Input
              className="flex-1"
              placeholder="Type your message..."
              type="text"
            />
            <Button>Send</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function GaugeIcon(props) {
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
      <path d="m12 14 4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </svg>
  );
}

function MicroscopeIcon(props) {
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
      <path d="M6 18h8" />
      <path d="M3 22h18" />
      <path d="M14 22a7 7 0 1 0 0-14h-1" />
      <path d="M9 14h2" />
      <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
      <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
    </svg>
  );
}

function MoveLeftIcon(props) {
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
      <path d="M6 8L2 12L6 16" />
      <path d="M2 12H22" />
    </svg>
  );
}

function UploadIcon(props) {
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  );
}

function UserIcon(props) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
