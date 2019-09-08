// @flow
import React, {PureComponent, type Node} from 'react';
import {connect} from 'react-redux';

import {fetchPostData} from 'reducers/post/post';

import s from './profile.scss';

type PropsType = {};

/**
 * Main container for home page
 *
 * @return {Node} - Element
 */
export class Profile extends PureComponent<PropsType> {
  componentDidMount() {
    this.props.fetchPostData();
  }

  /**
   * Render jsx to html
   *
   * @returns {Node} Rendered react component
   */
  render(): Node {
    return <div className={s.wrap}>Profile</div>;
  }
}

export const mapStateToProps = (store: ApplicationStoreType) => ({});

export const mapDispatchToProps = {
  fetchPostData,
};

export const ProfileConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
