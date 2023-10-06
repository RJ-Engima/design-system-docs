import React, { useState } from "react";
import ReactDOM from "react";
import ReactQuill, {Quill} from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "quill-mention";


const MyEditor = (props) => {
    const atValues = [
        { id: 1, value: "Fredrik Sundqvist" },
        { id: 2, value: "Patrik Sjölin" }
    ];
    const hashValues = [
        { id: 3, value: "Fredrik Sundqvist 2" },
        { id: 4, value: "Patrik Sjölin 2" }
    ];
    const QuillEditor = new Quill("#editor", {
        modules: {
            toolbar: [
                ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                ['link', 'image'],
                ['clean']
            ],
            mention: {
                allowedChars: /^[A-Za-z\sÅÄÖåäö]*$/,
                mentionDenotationChars: ["@", "#"],
                source: function (searchTerm, renderList, mentionChar) {
                    let values;

                    if (mentionChar === "@") {
                        values = atValues;
                    } else {
                        values = hashValues;
                    }

                    if (searchTerm.length === 0) {
                        renderList(values, searchTerm);
                    } else {
                        const matches = [];
                        for (let i = 0; i < values.length; i++)
                            if (
                                ~values[i].value.toLowerCase().indexOf(searchTerm.toLowerCase())
                            )
                                matches.push(values[i]);
                        renderList(matches, searchTerm);
                    }
                }
            }
        }
    });

    // const modules = {
    //     toolbar: [
    //         ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
    //         [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    //         ['link', 'image'],
    //         ['clean']
    //     ]
    // };

    const formats = ['header', 'font', 'size', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block', 'clean', 'list', 'bullet', 'indent', 'link', 'image', 'video'];
    return (
        <>
            <div id="editor">

            </div>
            <ReactQuill value={props.value} onChange={props.onChange} placeholder="Share your thoughts here..." modules={modules} formats={formats} />
        </>

    );
}

export default MyEditor