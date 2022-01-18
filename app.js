var Milk = () => (
  <li>
    Milk
  </li>
)
var Blueberry = () => (
  <li>
    Blueberry
  </li>
)

var onClick = (event) => {
  console.log('clicked');
}

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false
    };
  }

  onMouseOver() {
    this.setState({
      done: !this.state.done
    });
    console.log('clicked here')
  }

  render() {
    var style = {
      fontWeight: this.state.done ? 'bold' : 'none'
    };

    return (
      <>
      <li onMouseOver={this.onMouseOver.bind(this)} style={style}>{this.props.list}</li>
      </>
    )
  }
};

function GroceryList(props) {
  return (
    <ul>
      {props.groceryList.map(list =>
      <GroceryListItem list={list} />)}
    </ul>
  )};

function App() {
  return (
    <div>
      <h2>Grocery Lists</h2>
      <GroceryList groceryList = {['milk', 'eggs', 'blueberry']}/>
    </div>
  )
};

ReactDOM.render(<App />,
document.getElementById("app"));