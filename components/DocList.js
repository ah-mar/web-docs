import { ChevronDownIcon, FolderIcon, PlusCircleIcon, PlusIcon, SwitchVerticalIcon, ViewGridIcon } from "@heroicons/react/outline";
import FileItem from "./FileItem";

function DocList() {
  return (
    <section >
        {/* Container */}
        <div className="max-w-4xl mx-auto pb-4">

        {/* Sub-Header */}
      <div className="grid grid-cols-12 gap-4 py-6 sticky top-16 bg-white z-25 ">
        <p className="col-span-6 ">Today</p>
        <div className="col-span-2 flex items-baseline">
          <p className=" flex-1 text-sm text-gray-600 ">
            Owned by anyone
          </p>
          <ChevronDownIcon className="h-3 w-3 ml-1" />
        </div>

        <p className="col-span-2 text-sm text-gray-600 ">
          Last modified by me
        </p>
        <div className="flex justify-between col-span-2">
          <ViewGridIcon className="h-5 w-5 text-gray-600" />
          <SwitchVerticalIcon className="h-5 w-5 text-gray-600" />
          <FolderIcon className="h-5 w-5 text-gray-600" />
        </div>
      </div>
      {/* Document List */}
      <div>
        {Array(40).fill().map((item,i) => (
            <FileItem key={i} />
        ))}
      </div>
        </div>
<button className="fixed bottom-10 right-20 shadow-md shadow-gray-400 p-4 rounded-full cursor-pointer ">
    <PlusIcon className="h-8 w-8 text-blue-500 stroke-[3px]" />
</button>
    </section>
  );
}
export default DocList;
