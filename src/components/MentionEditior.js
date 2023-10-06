import React, { useState, useMemo } from 'react';
import { RichTextEditor } from '@mantine/rte';
import 'react-quill/dist/quill.snow.css';


function MyEditor(props) {
  const mentions = useMemo(
    () => ({
      allowedChars: /^[A-Za-z\sÅÄÖåäö]*$/,
      mentionDenotationChars: ['@', '#'],
      source: (searchTerm, renderList, mentionChar) => {
        const list = mentionChar === '@' ? props.tags : "";
        const includesSearchTerm = list.filter((item) =>
          item.value.toLowerCase().includes(searchTerm.toLowerCase())
        );
        renderList(includesSearchTerm);
      },
    }),
    []
  );

  return (
    <RichTextEditor
      value={props.value}
      onChange={props.onChange}
      placeholder="Share your thoughts here..."
      mentions={mentions}
      controls={[
        ['bold', 'italic', 'underline', 'link', 'codeBlock'],
        ['unorderedList', 'h1', 'h2', 'h3'],
        ['sup', 'sub'],
      ]}
    />
  );
}

export default MyEditor