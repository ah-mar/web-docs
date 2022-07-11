import {
  ChevronDoubleDownIcon,
  DotsVerticalIcon,
} from "@heroicons/react/solid";
import templateList from "../templateList";
import Template from "./Template";

function Gallery({setShowModal}) {
  return (
    <section className="bg-gray-100 p-4 ">
      {/* Container */}
      <div className="max-w-4xl mx-auto py-5">
        {/* Header */}

        <div className="flex items-center justify-between w-full">
          <h2 className="text-gray-800">Start a new document</h2>
          <div className="flex items-center">
            <button className="flex items-center hover:bg-gray-300 px-4 py-2 rounded cursor-pointer">
              <p className="text-sm text-gray-600">Template Gallery</p>
              <ChevronDoubleDownIcon className="h-5 w-5 border-r border-gray-300 ml-3 text-gray-600" />
            </button>
            <DotsVerticalIcon className="h-5 w-5 ml-3 text-gray-600" />
          </div>
        </div>

        {/* Gallery */}
        <div className="flex flex-wrap items-center justify-between gap-2 mt-4 ">
            {templateList.map(item => (
                <Template setShowModal={setShowModal} key={item.title + item.theme} item={item} />
            ))}
        </div>
      </div>
    </section>
  );
}
export default Gallery;
