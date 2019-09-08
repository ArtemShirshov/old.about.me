// @flow
import React, {PureComponent, type Node, Fragment} from 'react';
import {connect} from 'react-redux';

import {fetchPostData} from 'reducers/post/post';
import {RecordFormConnected} from 'components/recordForm/recordForm';

import s from './home.scss';

type PropsType = {};

/**
 * Main container for home page
 *
 * @return {Node} - Element
 */
export class Home extends PureComponent<PropsType> {
  componentDidMount() {
    this.props.fetchPostData();
  }

  /**
   * Render jsx to html
   *
   * @returns {Node} Rendered react component
   */
  render(): Node {
    return (
      <div className={s.wrap}>
        <RecordFormConnected />
      </div>
    );
  }
}

export const mapStateToProps = (store: ApplicationStoreType) => ({});

export const mapDispatchToProps = {
  fetchPostData,
};

export const HomeConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
