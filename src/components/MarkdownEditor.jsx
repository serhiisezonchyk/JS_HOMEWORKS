import '@toast-ui/editor/dist/toastui-editor.css';
import React, { Component, createRef } from 'react';
import { Editor } from '@toast-ui/editor';

class MarkdownEditor extends Component {
  constructor(props) {
    super(props);
    this.editorRef = createRef();
    this.editorInstance = null;
  }

  componentDidMount() {
    this.editorInstance = new Editor({
      el: this.editorRef.current,
      hideModeSwitch: true,
      initialEditType: 'markdown',
      previewStyle: 'vertical',
      height: '500px',
    });

    this.editorInstance.addHook('change', this.handleChange);
  }

  componentWillUnmount() {
    if (this.editorInstance) {
      this.editorInstance.removeHook('change', this.handleChange);
      this.editorInstance.destroy();
    }
  }

  handleChange = () => {
    const content = this.editorInstance.getMarkdown();
    this.props.onContentChange(content);
  };

  render() {
    return <div ref={this.editorRef} />;
  }
}

MarkdownEditor.defaultProps = {
  onContentChange: () => {},
};
export default MarkdownEditor;
