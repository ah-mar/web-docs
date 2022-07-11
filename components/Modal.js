import { useRouter } from "next/router";
import { useState } from "react";

function Modal({ setShowModal }) {
     const [modalInput, setModalInput] = useState("");

    const router = useRouter()

  function handleModalSubmit(e) {
    e.preventDefault();
    if(!modalInput) return;
    console.log("filename is", modalInput)
    setShowModal(false);
    router.push(`/editor?filename=${modalInput}`)
  }

  return (
    <form
      onSubmit={handleModalSubmit}
      className="absolute flex flex-col gap-2 justify-center top-1/3 left-1/3 h-[300px] w-[400px] bg-gray-700/90 z-50 rounded-lg p-4"
    >
      <label className="px-2 text-white text-sm font-bold" htmlFor="">
        Enter Filename
      </label>
      <input
        type="text"
        value={modalInput}
        onChange={(e) => setModalInput(e.target.value)}
        placeholder="cheesecake recipe"
        className="p-2 rounded-md"
      />
      <button
        disabled={!modalInput}
        type="submit"
        className="  p-2 rounded-md bg-blue-500 text-white font-bold mt-6"
      >
        Submit
      </button>
      <button
        type="button"
        onClick={() => setShowModal(false)}
        className="absolute top-4 right-4 text-white text-xs border p-1 rounded font-bold"
      >
        Close
      </button>
    </form>
  );
}
export default Modal;
