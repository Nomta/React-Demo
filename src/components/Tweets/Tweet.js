import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateTweet, deleteTweet } from './../../actions/tweetActions';
import ModalEditor from './../ModalEditor/ModalEditor';
import EditorConfirm from './../ModalEditor/EditorConfirm';
import ErrorAlert from './../Modal/ErrorAlert';

class Tweet extends Component {
  constructor(props) {
    super(props);
    this.state = { error: false }
    this.changeValue = this.changeValue.bind(this);
    this.deleteValue = this.deleteValue.bind(this);
    this.errorMessageClose = this.errorMessageClose.bind(this);
  }

  changeValue(value) {
    if (value) {
      this.props.dispatch(updateTweet(value, this.props.id));
    }
    else {
      this.setState({ error: true });
    }
  }

  deleteValue() {
    this.props.dispatch(deleteTweet(this.props.id));
  }

  errorMessageClose() {
    this.setState({ error: false });
  }
  
  render() {
    return (
      <Fragment>
        <li className="page-control">
          <span className="control-text control-text-plus">
            {this.props.children}
          </span>
          <span className="control-edit-button tweet-edit-button">
            <ModalEditor
              action={ this.changeValue }
              value={ this.props.children }
              title="Изменение записи" 
                maxLength="80" />
            </span>
          <EditorConfirm 
            action={this.deleteValue} 
            title="Удаление записи"
            className="page-button control-button"
            button="&times;">
            <div className="tweet-confirm">
              Вы действительно хотите удалить эту запись
              <div>
                <input type="text" className="control-text dialog-control"
                  value={this.props.children} disabled />
                &nbsp;?
              </div>
            </div>
          </EditorConfirm>
        </li>
        <ErrorAlert display={ this.state.error } close={ this.errorMessageClose }>
          Заметка не должна быть пустой.
        </ErrorAlert>
      </Fragment>
    );
  }
}

Tweet.propTypes = {
  children: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(Tweet);