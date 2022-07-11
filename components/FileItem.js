import { ChevronDownIcon, DotsVerticalIcon, FolderIcon, SwitchVerticalIcon, ViewGridIcon } from "@heroicons/react/outline";
import { DocumentIcon, FilterIcon } from "@heroicons/react/solid";

function FileItem() {
  return (
    <div className="grid grid-cols-12 gap-4 py-3 px-3 border-b rounded hover:bg-blue-200 cursor-pointer">
      <DocumentIcon className="h-6 w-6 text-blue-500 col-span-1" />
      <p className="col-span-5 text-sm">File Name</p>
      <div className="col-span-2 flex items-baseline">
        <p className=" flex-1 text-sm text-gray-500 ">me</p>
      </div>

      <p className="col-span-2 text-sm text-gray-500 ">Feb 6, 2021</p>
      <div className="flex justify-end mr-2 col-span-2">
        <DotsVerticalIcon className="h-5 w-5 text-gray-500" />
        
      </div>
      
      
    </div>
  );
}
export default FileItem