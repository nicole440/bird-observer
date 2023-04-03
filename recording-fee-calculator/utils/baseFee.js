// baseFee.js
const DEED_BASE_FEE = 70.25;
const POA_BASE_FEE = 18.50;
const MISC_BASE_FEE = 68.50;

export const getBaseFee = docType => {
    if (docType === "Deed") {
        return DEED_BASE_FEE;
    } else if (docType === "Power of Attorney") {
        return POA_BASE_FEE;
    } else {
        return MISC_BASE_FEE;
    }
}