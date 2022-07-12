import { convertFromRaw, EditorState } from "draft-js";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import HeaderEditor from "../../components/HeaderEditor";
import RichEditor from "../../components/RichEditor";
import { getOneDoc } from "../../lib/firebase_functions";


function Editor(props) {
  const router = useRouter();
  const { filename } = router.query;
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  // All editor state methods can be referenced at Draft js api - https://draftjs.org/docs/api-reference-editor-state
  //https://draftjs.org/docs/api-reference-data-conversion/#convertfromraw

  useEffect(() => {
    getOneDoc(filename)
      .then((data) => {
        console.log("file data is", data);
        if (data?.editorState) {
          setEditorState(
            EditorState.createWithContent(convertFromRaw(data?.editorState))
          );
        }
      })
      .catch((error) => console.error(error));
  }, [filename]);

  return (
    <div>
      <HeaderEditor filename={filename} editorState={editorState} />
      <RichEditor editorState={editorState} setEditorState={setEditorState} />
    </div>
  );
}
export default Editor;
