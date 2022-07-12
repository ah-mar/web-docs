import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";
import { convertFromRaw, convertToRaw } from "draft-js";
//import { Editor } from "react-draft-wysiwyg";
import { useState } from "react";
import dynamic from "next/dynamic";

function RichEditor({editorState, setEditorState}) {
    

    // Editor component depends on Window Api. Lazy loading.
    const Editor = dynamic(
      () => import("react-draft-wysiwyg").then((module) => module.Editor),
      {
        ssr: false,
      }
    );

    function onEditorStateChange(newState) {
        setEditorState(newState)


    }


  return (
    <div>
      <div className="bg-[#F8F9FA] min-h-screen pb-16">
        
        <Editor
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
          toolbarClassName="flex sticky top-0 z-50 !justify-center mx-auto"
          editorClassName="mt-6 p-10 bg-white shadow-lg max-w-5xl mx-auto mb-12 border !min-h-[75vh]"
        />
      </div>
    </div>
  );
}
export default RichEditor;


//Write
// convertToRaw(editorState.getCurrentContent()

//Read 
// EditorState.createWithContent(
//           convertFromRaw(snapshot?.data()?.editorState)