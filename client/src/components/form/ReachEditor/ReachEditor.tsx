import React from "react";
import MUIRichTextEditor from "mui-rte";
import useStyles from "./styles";
import { EditorState } from 'draft-js';
import { convertToHTML, convertFromHTML } from 'draft-convert';

const controls = [
    "title", "bold", "italic", "underline",
    "strikethrough", "highlight", "undo", "redo",
    "link", "media", "numberList", "bulletList",
    "save"
]

interface IReachEditorProps {
    onChange(html:any): void,
    label?: string
}

const ReachEditor: React.FC<IReachEditorProps> = ({onChange, label}) => {
    const classes = useStyles()

    const onRTEChange = (state: EditorState) => {
        const currentState:any = state.getCurrentContent()
        const html = convertToHTML(currentState)
        onChange(html)
    }

    return (
        <div className={classes.editorWrapper}>
            <MUIRichTextEditor
                label={label}
                controls={controls}
                onChange={onRTEChange}
                toolbarButtonSize="small"
            />
        </div>
    );
}

export default ReachEditor