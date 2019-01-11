import React from 'react';
import {Controlled as CodeMirror} from 'react-codemirror2';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/python/python';
import 'codemirror/mode/r/r';
import 'codemirror/mode/jsx/jsx';

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
