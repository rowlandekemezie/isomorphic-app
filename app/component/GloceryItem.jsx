const React = require('react');
const Action = require('../actions/GloceryItemActionCreator.jsx');

class GloceryItem extends React.Component {
  constructor() {
    super();
    this.delete = this.delete.bind(this);
    this.togglePurchased = this.togglePurchased.bind(this);
  }
  delete(e) {
    e.preventDefault();
    Action.delete(this.props.item);
  }

  togglePurchased(e) {
    e.preventDefault();
    if (this.props.item.purchased){
      Action.unbuy(this.props.item);
    } else {
      Action.buy(this.props.item);
    }
  }
  render() {
    return (
      <div className="grocery-item row">
        <div className="six columns">
          <h4 className={this.props.item.purchased ? "strikethrough" : ""}>
            {this.props.item.name}
          </h4>
        </div>
        <form className="three columns" onSubmit={this.togglePurchased}>
          <button className={this.props.item.purchased ? "" : "button-primary"}>
            {this.props.item.purchased ? "Unbuy" : "Buy"}</button>
        </form>
        <form classeName="three columns" onSubmit={this.delete}>
          <button>&times;</button>
        </form>
      </div>
    );
  }
}
GloceryItem.PropTypes = {
  item: React.PropTypes.string,
  purchased: React.PropTypes.bool,
};
module.exports = GloceryItem;
