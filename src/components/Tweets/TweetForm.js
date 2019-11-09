import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTweet } from './../../actions/tweetActions';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    this.props.dispatch(addTweet(this.state.value));
    this.setState({value: ''});
  }

  handleChange() {
    this.setState({value: event.target.value});
  }
  
  render() {
    return (
      <div className="tweet" >
        <input type="text"
          className="tweet-text" 
          maxLength="80" 
          value={this.state.value}
          onChange={this.handleChange} />
        <button className="page-button tweet-button" onClick={this.handleClick}>+</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(Form);