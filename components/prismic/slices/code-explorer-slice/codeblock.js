import React from 'react';
import {Controlled as CodeMirror} from 'react-codemirror2';
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/python/python');
require('codemirror/mode/r/r');
require('codemirror/mode/jsx/jsx');

export default class CodeBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <CodeMirror
        value={this.props.tab.primary.code[0].text}
        key={this.props.tab.primary.uid}
        options={{
          mode: this.props.tab.primary.language,
          theme: 'material',
          lineNumbers: true,
        }}
      />
    );
  }
}
