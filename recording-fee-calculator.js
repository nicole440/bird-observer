const DEED_BASE_FEE = 70.25;
const POA_BASE_FEE = 18.50;
const MISC_BASE_FEE = 68.50;
const SIMPLIFILE_FEE = 4.75;
const BASE_PAGE_THRESHOLD = 4;
const OVER_FOUR_PAGE_FEE = 2.00;

const getBaseFee = docType => {
    if (docType === "Deed") {
        return DEED_BASE_FEE;
    } else if (docType === "Power of Attorney") {
        return POA_BASE_FEE;
    } else return MISC_BASE_FEE;
}

// Function which determines the total fee based on base fee and page count
const getAdditionalPageFees = pageCount => {
    if (isNaN(pageCount) || pageCount < 1) {
        // throw an exception for invalid page count
    } else if (pageCount <= BASE_PAGE_THRESHOLD) {
        return 0;
    } else return (pageCount - BASE_PAGE_THRESHOLD) * OVER_FOUR_PAGE_FEE;
}

// Function which asks whether "fee" is truthy; if so, 4.75 e-recording fee is returned
const getERecordingFee = hasFee => hasFee ? SIMPLIFILE_FEE : 0;


calculateTotalCharges ((docType, pageCount, hasFee) => {
  const baseFee = getBaseFee(docType);
  const additionalPageFees = getAdditionalPageFees(pageCount);
  const eRecordingFee = getERecordingFee(hasFee);
  return baseFee + additionalPageFees + eRecordingFee;
})