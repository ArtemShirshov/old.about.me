// @flow
import React, {PureComponent, type Node} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';

import {FACES} from 'constants/faces/faces';
import {setFace} from 'reducers/recordForm';

import s from './facePicker.scss';

type PropsType = {};

/**
 * Main container for home page
 *
 * @return {Node} - Element
 */
export class FacePicker extends PureComponent<PropsType> {
  setFace = event => {
    const {id} = event.currentTarget.dataset;

    this.props.setFace(Number(id));
  };

  /**
   * Render jsx to html
   *
   * @returns {Node} Rendered react component
   */
  render(): Node {
    const {faceId} = this.props.recordForm;

    return (
      <div className={s.wrap}>
        <div className={s.label}>How is your mood?</div>

        <div className={s.faceWrap}>
          {FACES.map(face => (
            <div
              className={classNames(s.face, {[s.active]: face.id === faceId})}
              key={face.title}
              onClick={this.setFace}
              data-id={face.id}
            >
              {face.title}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export const mapStateToProps = (store: ApplicationStoreType) => ({
  recordForm: store.recordForm,
});

export const mapDispatchToProps = {
  setFace,
};

export const FacePickerConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FacePicker);
