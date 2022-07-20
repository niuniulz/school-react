import React from "react";

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      isToggle: true,
      count: 0,
      numbers: [1, 2, 3, 4, 5],
      value: "请撰写一篇关于DOM的文章",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("Submit!!!!");
    this.setState((state) => ({
      isToggle: !state.isToggle,
    }));
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleFormSubmit(event) {
    alert("提交的文章: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
        <h2> It's {this.state.date.toLocaleTimeString()} </h2>
        <button onClick={this.handleSubmit}>
          submit {this.state.isToggle ? "ON" : "OFF"}
        </button>
        {this.state.count > 0 && <p>这是一个p标签，count:{this.state.count}</p>}
        <ul>
          {this.state.numbers.map((number) => (
            <li key={number.toString()}>列表第{number}项</li>
          ))}
        </ul>

        <form onSubmit={this.handleFormSubmit}>
          <label>
            文章:
            <textarea value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="提交" />
        </form>
      </div>
    );
  }
}

export default Welcome;
