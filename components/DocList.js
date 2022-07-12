import { ChevronDownIcon, FolderIcon, PlusCircleIcon, PlusIcon, SwitchVerticalIcon, ViewGridIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import { getAllDocs } from "../lib/firebase_functions";
import FileItem from "./FileItem";

function DocList({setShowModal}) {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    getAllDocs(). then (data => {
      console.log(data)
      setDocuments(data)
    })
  },[])

  return (
    <section>
      {/* Container */}
      <div className="max-w-4xl mx-auto pb-4">
        {/* Sub-Header */}
        <div className="grid grid-cols-12 gap-4 py-6 sticky top-16 bg-white z-25 ">
          <p className="col-span-6 ">Today</p>
          <div className="col-span-2 flex items-baseline">
            <p className=" flex-1 text-sm text-gray-600 ">Last modified by</p>
            <ChevronDownIcon className="h-3 w-3 ml-1" />
          </div>

          <p className="col-span-2 text-sm text-gray-600 ">Last modified on</p>
          <div className="flex justify-between col-span-2">
            <ViewGridIcon className="h-5 w-5 text-gray-600" />
            <SwitchVerticalIcon className="h-5 w-5 text-gray-600" />
            <FolderIcon className="h-5 w-5 text-gray-600" />
          </div>
        </div>
        {/* Document List */}
        <div>
          {documents &&
            documents.map((item, i) => <FileItem key={i} item={item} />)}
        </div>
      </div>
      <button
        onClick={() => setShowModal(true)}
        className="fixed bottom-10 right-20 shadow-md shadow-gray-400 p-4 rounded-full cursor-pointer "
      >
        <PlusIcon className="h-8 w-8 text-blue-500 stroke-[3px]" />
      </button>
    </section>
  );
}
export default DocList;
