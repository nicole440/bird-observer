import {getBaseFee} from './utils/baseFee.js'
import {getAdditionalPageFees} from './utils/additionalPageFee.js'
import {getERecordingFee} from './utils/eRecordingFee.js'
import {calculateTotalCharges} from './utils/totalCharges.js'

/** Unit tests for JavaScript functions */

beforeEach(() => {
    totalCharges = 0;
  });

test('getBaseFee returns correct base fee for each document type', () => {
    expect(getBaseFee("Deed")).toBe(DEED_BASE_FEE);
    expect(getBaseFee("Power of Attorney")).toBe(POA_BASE_FEE);
    expect(getBaseFee("Misc")).toBe(MISC_BASE_FEE);
  });


  test('getAdditionalPageFees returns correct additional page fees for valid page counts', () => {
    expect(getAdditionalPageFees(DEED_BASE_FEE, 3)).toBe(DEED_BASE_FEE);
    expect(getAdditionalPageFees(MISC_BASE_FEE, 4)).toBe(MISC_BASE_FEE);
    expect(getAdditionalPageFees(POA_BASE_FEE, 5)).toBe(20.50);
    expect(getAdditionalPageFees(MISC_BASE_FEE, 10)).toBe(84.50);
  });

  /* toThrow() method is used to check that the function throws an exception,
and that the function is called within an anonymous function to avoid
triggering the exception immediately.*/
  test('getAdditionalPageFees throws an exception for invalid page counts', () => {
    expect(() => getAdditionalPageFees(DEED_BASE_FEE, -1)).toThrow();
    expect(() => getAdditionalPageFees(DEED_BASE_FEE, "hi")).toThrow();
    expect(() => getAdditionalPageFees(DEED_BASE_FEE, null)).toThrow();
  });


  test('getERecordingFee returns correct fee when hasFee is true', () => {
    expect(getERecordingFee(true)).toEqual(SIMPLIFILE_FEE);
  });
  
  test('getERecordingFee returns 0 when hasFee is false', () => {
    expect(getERecordingFee(false)).toEqual(0);
  });

  
  test('calculateTotalCharges returns correct total charges', () => {
    expect(calculateTotalCharges(70.25, 0, 4.75)).toEqual(75);
    expect(calculateTotalCharges(18.5, 2, 0)).toEqual(22.5);
    expect(calculateTotalCharges(68.5, 6, 0)).toEqual(81.5);
  });