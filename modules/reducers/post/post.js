import type {AxiosResponse} from 'axios';
import {createActions, type ActionType} from 'redux-actions';

export const {fetchPostData} = createActions({
  FETCH_POST_DATA: (): ActionType<AxiosResponse> => ({
    request: {
      method: 'GET',
      url: `${window.SITE_URL}api/`,
    },
  }),
});
