// @flow

export const arrayRemove = (array, value) => {
    const idx = array.indexOf(value);

    if (idx !== -1) {
        array.splice(idx, 1);
    }

    return array;
};
