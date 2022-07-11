import { DocumentTextIcon } from "@heroicons/react/solid";
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";

function Login() {
  const { data: session } = useSession();
  const router = useRouter()

  console.log("session in login is", session);

  //Facebook not redirecting to homepage, google works without this
  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session]);

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
export default Login;
