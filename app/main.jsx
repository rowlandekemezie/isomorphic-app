const ReactDOM = require('react-dom');
const React = require('react');

const GloceryItemList = require('./component/GloceryItemList.jsx');
const GloceryItemStore = require('./stores/GloceryItemStore.jsx');
let initial = GloceryItemStore.getItems();
console.log(initial);
function render() {
  ReactDOM.render(<GloceryItemList items={initial} />, document.getElementById('app'));
}
GloceryItemStore.onChange((items) => {
  initial = items;
  render();
});
render();
