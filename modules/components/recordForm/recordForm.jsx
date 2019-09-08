// @flow
import React, {PureComponent, type Node} from 'react';
import {connect} from 'react-redux';

import {fetchPostData} from 'reducers/post/post';
import {Button} from 'components/_helpers/button/button';
import {FacePickerConnected} from 'components/facePicker/facePicker';
import {RecordCommentConnected} from 'components/recordComment/recordComment';
import {DealPickerConnected} from 'components/dealPicker/dealPicker';

import s from './recordForm.scss';

type PropsType = {};

/**
 * Main container for home page
 *
 * @return {Node} - Element
 */
export class RecordForm extends PureComponent<PropsType> {
  /**
   * Render jsx to html
   *
   * @returns {Node} Rendered react component
   */
  render(): Node {
    return (
      <div className={s.wrap}>
        <FacePickerConnected />
        <RecordCommentConnected />
        <DealPickerConnected />

        <Button>Send</Button>
      </div>
    );
  }
}

export const mapStateToProps = (store: ApplicationStoreType) => ({});

export const mapDispatchToProps = {
  fetchPostData,
};

export const RecordFormConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecordForm);
