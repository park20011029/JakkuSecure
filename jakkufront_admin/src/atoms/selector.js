import { selector } from 'recoil';
import { countState, priceState } from './atom';

export const totalPriceState = selector({
    key: 'totalPriceState',
    get: ({ get }) => {
        const count = get(countState);
        const price = get(priceState);
        return count * price;
    },
});