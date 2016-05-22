const React = require('react');
const Action = require('../actions/GloceryItemActionCreator.jsx');

class GloceryListAddItem extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
    };
    this.handleInputName = this.handleInputName.bind(this);
    this.addItem = this.addItem.bind(this);
  }
  handleInputName(e) {
    this.setState({
      input: e.target.value,
    });
  }
  addItem(e) {
    e.preventDefault();
    Action.add({
      name: this.state.input,
    });
    this.setState({
      input: '',
    });
  }
  render() {
    return (
      <div className="grocery-addItem">
        <form onSubmit={this.addItem}>
          <input
            type="text"
            value={this.state.input}
            placeholder="Enter your stuff"
            onChange={this.handleInputName}
          />
          <button>
            Add Item
          </button>
        </form>
      </div>
    );
  }
}
module.exports = GloceryListAddItem;
