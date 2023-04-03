export const calculateTotalCharges = (baseFee, additionalPageFee, eRecordingFee) => {
    return baseFee + additionalPageFee + eRecordingFee;
}