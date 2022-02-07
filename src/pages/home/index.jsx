import React, { useState } from 'react';
import Layout from '../../layouts/main.layout';
import { Editor, EditorState, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';

const Home = () => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

  function handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }

  return (
    <Layout pageTitle="Home Page">
      <p>I&apos;m making this by following the Gatsby Tutorial.</p>
      <Editor editorState={editorState} onChange={setEditorState} placeholder={'Wait typing... :|]'} handleKeyCommand={handleKeyCommand} />
    </Layout>
  );
};

export default Home;
