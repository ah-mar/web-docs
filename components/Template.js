import Image from "next/image"
import recipe from "/public/recipe.png"

function Template(props) {
const {title, theme, imageSrc} = props.item

  return (
    <div>
        <div onClick={() => props.setShowModal(true)} className="relative w-[135px] h-[170px] hover:ring-1 ring-blue-600 ">
            <Image src={recipe} alt={title} layout="fill" className="cursor-pointer " />
        </div>
        
        <p className="text-sm text-gray-800 font-semibold mt-2">{title}</p>
        <p className="text-xs  text-gray-500 font-light">{theme}</p>


    </div>
  )
}
export default Template

//sm:w-[135px] sm:h-[170px]