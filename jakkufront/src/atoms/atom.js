import { atom } from 'recoil';

export const countState = atom({
    key: 'countState',
    default: 0,
});

export const priceState = atom({
    key: 'priceState',
    default: 0,
});

export const pageState = atom({
    key: 'pageState',
    default: 0,
});

export const modalState = atom({
    key: 'modalState',
    default: false,
});

export const usermoneyState = atom({
    key: 'usermoneyState',
    default: 0,
});

export const buyMoneyState = atom({
    key: 'buyMoneyState',
    default: new Map(),
});

export const nicknameState = atom({
    key: 'nicknameState',
    default: 'NickName',
});

export const currentState = atom({
    key: 'currentPage',
    default: 1,
})

export const latestState = atom({
    key: 'latestState',
    default: 'desc',
})

export const priceOrderState = atom({
    key: 'priceOrderState',
    default: 'asc',
})

export const statusState = atom({
    key: 'statusState',
    default: 'asc',
})

export const searchNameState = atom({
    key: 'searchNameState',
    default: null,
})

const localStorageEffect = key => ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
        setSelf(JSON.parse(savedValue));
    }

    onSet(newValue => {
        localStorage.setItem(key, JSON.stringify(newValue));
    });
};

export const tryCounter = atom({
    key: 'tryCount',
    default: 0,
    effects_UNSTABLE: [
        localStorageEffect('tryCount')
    ],
});