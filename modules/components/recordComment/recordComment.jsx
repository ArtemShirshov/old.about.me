// @flow
import React, {PureComponent, type Node} from 'react';
import {connect} from 'react-redux';

import {setComment} from 'reducers/recordForm';

import s from './recordComment.scss';

type PropsType = {};

/**
 * Main container for home page
 *
 * @return {Node} - Element
 */
export class RecordComment extends PureComponent<PropsType> {
  setComment = event => {
    const {value} = event.currentTarget;

    this.props.setComment(value);
  };

  /**
   * Render jsx to html
   *
   * @returns {Node} Rendered react component
   */
  render(): Node {
    const {comment} = this.props.recordForm;

    return (
      <div className={s.wrap}>
        <label>
          <div className={s.label}>What's new?</div>
          <textarea
            className={s.textarea}
            value={comment}
            onChange={this.setComment}
          />
        </label>
      </div>
    );
  }
}

export const mapStateToProps = (store: ApplicationStoreType) => ({
  recordForm: store.recordForm,
});

export const mapDispatchToProps = {
  setComment,
};

export const RecordCommentConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecordComment);
