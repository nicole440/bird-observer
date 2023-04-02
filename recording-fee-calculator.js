const deedBaseFee = 70.25;
const poaBaseFee = 18.50;
const miscBaseFee = 68.50;
const simplifileFee = 4.75;
const basePageThreshold = 4;
const overFourFeePerPage = 2.00;

const getBaseFee = docType => {
    if (docType === "Deed") {
        return deedBaseFee;
    } else if (docType === "Power of Attorney") {
        return poaBaseFee;
    } else return miscBaseFee;
}

// Function which determines the total fee based on base fee and page count
const getAdditionalPageFees = pageCount => {
    if (isNaN(pageCount) || pageCount < 1) {
        // throw an exception for invalid page count
    } else if (pageCount <= basePageThreshold) {
        return 0;
    } else return (pageCount - basePageThreshold) * overFourFeePerPage;
}

// Function which asks whether "fee" is truthy; if so, 4.75 e-recording fee is returned
const getERecordingFee = hasFee => hasFee ? simplifileFee : 0;


calculateTotalCharges((docType, pageCount, hasFee) => {
    const baseFee = getBaseFee(docType);
    const additionalPageFees = getAdditionalPageFees(pageCount);
    const eRecordingFee = getERecordingFee(hasFee);
    return baseFee + additionalPageFees + eRecordingFee;
});