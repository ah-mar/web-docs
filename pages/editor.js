import { useRouter } from "next/router"

function Editor(props) {

    const router = useRouter()
  return (
    <div>editor {router.query.filename}</div>
  )
}
export default Editor