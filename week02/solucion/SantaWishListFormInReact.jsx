const React = require("react");

class WishlistForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name:'', wish:'', priority:1};

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleWishChange = this.handleWishChange.bind(this);
    this.handlePriorityChange=this.handlePriorityChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleNameChange(event) {
    this.setState({name:event.target.value});
  }
  handleWishChange (event){
    this.setState({wish:event.target.value});
  }
  handlePriorityChange(event){
    this.setState({priority:event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.send(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>

        Name:
        <input  id='name' value={this.state.name} onChange={this.handleNameChange}/>
        Wish:
        <textarea id="wish" value={this.state.wish} onChange={this.handleWishChange}/>

        Priority:
       <select  value={this.state.priority} id='priority'  onChange={this.handlePriorityChange}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
       </select>
       <button type='submit'>Send</button>
      </form>
    );
  }
};
