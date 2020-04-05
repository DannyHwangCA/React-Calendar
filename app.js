class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        date: new Date(),
        staticDate: ""
      };
    }
    
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(), 1000
      )
    }
  
    componentWillMount() {
      clearInterval(this.timerID);
    }
    
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    render() {
      return (
        <div>
          <h2>{this.state.date.toDateString()}</h2>
          <h2>{this.state.date.toLocaleTimeString()}</h2>
        </div>
      )
    }
  }
  
  ReactDOM.render(<App />, document.getElementById('app'));