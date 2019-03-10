// @flow
import React, {Component, type Node} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';

import {arrayRemove} from 'libs/utils/utils';
import {setDeals} from 'reducers/recordForm';
import {ACTIVITY} from 'constants/deal/deal';

import s from './dealPicker.scss';

type PropsType = {};

/**
 * Main container for home page
 *
 * @return {Node} - Element
 */
export class DealPicker extends Component<PropsType> {
    state = {
        deals: [],
    };

    setDeal = event => {
        const {deals} = this.state;
        const id = Number(event.currentTarget.dataset.id);

        if (deals.includes(id)) {
            const newDeals = arrayRemove(deals, id);
            this.props.setDeals(newDeals);
        } else {
            deals.push(id);
            this.props.setDeals(deals);
        }
    };

    /**
     * Render jsx to html
     *
     * @returns {Node} Rendered react component
     */
    render(): Node {
        const {deals} = this.props.recordForm;

        return (
            <div className={s.wrap}>
                <div className={s.label}>What did you do today?</div>

                <div className={s.dealWrap}>
                    {ACTIVITY.map(deal => (
                        <div
                            className={classNames(s.deal, {[s.active]: deals.includes(deal.id)})}
                            key={deal.title}
                            onClick={this.setDeal}
                            data-id={deal.id}
                        >
                            {deal.title}
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
    setDeals,
};

export const DealPickerConnected = connect(
    mapStateToProps,
    mapDispatchToProps,
)(DealPicker);
