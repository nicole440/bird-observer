const SIMPLIFILE_FEE = 4.75;

export const getERecordingFee = (hasFee) => {
    if (hasFee) {
        return SIMPLIFILE_FEE;
    } else {
        return 0;
    }
};