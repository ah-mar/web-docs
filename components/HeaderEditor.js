import { DocumentTextIcon, LockClosedIcon } from "@heroicons/react/solid";

import { ChatAltIcon, VideoCameraIcon } from "@heroicons/react/outline";
import { useSession } from "next-auth/react";
import { createDocument } from "../lib/firebase_functions";
import { convertToRaw } from "draft-js";
import { useRouter } from "next/router";


function HeaderEditor({filename, editorState}) {

const writableState = convertToRaw(editorState.getCurrentContent())
const router = useRouter()
const {data: session} = useSession()
const author = session?.user?.name

function handleSaveFile() {

  console.log("In handle Save file ",filename, author, writableState)
  
  createDocument(filename, author, writableState).then (data => console.log(data)).catch(error => console.log(error))

}

function handleCloseFile() {
  router.push("/")
}

console.log("writable state is", writableState)

  return (
    <header className="flex items-center justify-between gap-2 py-2 px-4 shadow-lg">
      <div className="flex items-center gap-2">
        <DocumentTextIcon className="h-10 w-10 text-blue-500 shrink-0" />
        <div>
          <h1 className=" px-2 text-xl text-gray-500">{filename || "Untitled Document"}</h1>
          <nav className="hidden lg:block">
            <button className=" py-1 px-2 text-sm text-gray-700 hover:bg-gray-100">
              File
            </button>
            <button className=" py-1 px-2 text-sm text-gray-700 hover:bg-gray-100">
              Edit
            </button>
            <button className=" py-1 px-2 text-sm text-gray-700 hover:bg-gray-100">
              View
            </button>
            <button className=" py-1 px-2 text-sm text-gray-700 hover:bg-gray-100">
              Insert
            </button>
            <button className=" py-1 px-2 text-sm text-gray-700 hover:bg-gray-100">
              Format
            </button>
            <button className=" py-1 px-2 text-sm text-gray-700 hover:bg-gray-100">
              Tools
            </button>
            <button className=" py-1 px-2 text-sm text-gray-700 hover:bg-gray-100">
              Extension
            </button>
            <button className=" py-1 px-2 text-sm text-gray-700 hover:bg-gray-100">
              Help
            </button>
          </nav>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-4">
        <ChatAltIcon className="shrink-0 h-10 w-10 text-gray-500 hover:bg-gray-100 p-2 rounded-full" />
        <VideoCameraIcon className="shrink-0 h-10 w-10 text-blue-500 hover:bg-gray-100 p-2 rounded-full" />

        <button className="flex items-center gap-1 border py-2 px-4 bg-blue-500 text-white rounded">
          <LockClosedIcon className="h-4 w-4 text-white hover:bg-gray-100  rounded-full" />
          <span className="font-bold">Share</span>
        </button>
        <img
          src={session?.user?.image}
          alt=""
          className="w-8 h-8 rounded-full flex justify-center items-center bg-indigo-500  hover:shadow-sm hover:scale-125 transition-all duration-300 border"
        />

        </div>

        <button onClick={handleSaveFile} className="text-sm font-bold text-gray-500 border p-2 rounded-md cursor-pointer hover:shadow-lg hover:text-blue-500">
          Save
        </button>
        <button onClick={handleCloseFile} className="text-sm font-bold text-gray-500 border p-2 rounded-md cursor-pointer hover:shadow-lg hover:text-blue-500">
          Close
        </button>
      </div>
    </header>
  );
}
export default HeaderEditor;
