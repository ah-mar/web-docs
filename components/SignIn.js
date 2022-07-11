import { DocumentTextIcon } from "@heroicons/react/outline";
import { signIn } from "next-auth/react";

function SignIn() {
  return (
    <div className="flex flex-col gap-3 items-center justify-center w-full h-screen bg-gray-100">
      <DocumentTextIcon className="h-36 w-32 text-blue-500" />
      <h1 className="text-2xl">G- Docs</h1>
      <button
        className="px-6 py-2 border bg-blue-500 text-white font-bold rounded-lg"
        onClick={signIn}
      >
        Log In
      </button>
    </div>
  );
}
export default SignIn