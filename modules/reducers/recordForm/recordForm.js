// @flow
import {createActions, handleActions, type ActionType} from 'redux-actions';

export const defaultState = {
    faceId: null,
    deals: [],
    comment: '',
};

export const {setFace, setDeals, setComment} = createActions({
    SET_FACE: (face: number): number => face,
    SET_DEALS: (deals: number): number => deals,
    SET_COMMENT: (comment: number): number => comment,
});

/**
 * Page info reducer
 *
 * @returns {RouteType} state New state
 */
export const recordForm = handleActions(
    {
        [setFace]: (state: PageType, {payload}: ActionType<typeof setFace>): PageType => ({
            ...state,
            faceId: payload,
        }),
        [setDeals]: (state: PageType, {payload}: ActionType<typeof setFace>): PageType => ({
            ...state,
            deals: payload,
        }),
        [setComment]: (state: PageType, {payload}: ActionType<typeof setFace>): PageType => ({
            ...state,
            comment: payload,
        }),
    },
    defaultState,
);
