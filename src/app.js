class IndecisionApp extends React.Component {
  render() {
    const title = 'Titol app';
    const subtitle = 'Subtitol app';
    const options = ['a', 'b', 'c'];

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    )
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
       {this.props.options.map((option) => <Option key={option} optionText={option}/>)}
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.optionText}
      </div>
    )
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <div>
        Add option
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
