const BASE_PAGE_THRESHOLD = 4;
const OVER_FOUR_PAGE_FEE = 2.00;

export const getAdditionalPageFee = (pageCount) => {
    if (isNaN(pageCount) || pageCount < 1) {
        throw new Error('Invalid page count');
    } else if (pageCount <= BASE_PAGE_THRESHOLD) {
        return 0;
    } else {
        return (pageCount - BASE_PAGE_THRESHOLD) * OVER_FOUR_PAGE_FEE;
    }
}