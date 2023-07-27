import { mount } from '@vue/test-utils';
import InputForm from '@/components/InputForm.vue';

describe('InputForm computed properties', () => {
  // Test case for getBaseFee
  it('getBaseFee should calculate the correct base fee', () => {
    // Use mount function from @vue/test-utils to create a wrapper for the InputForm component
    const wrapper = mount(InputForm, {
    // Set the required data properties in the data() function to test scenarios
      data() {
        return {
          documentType: 'Deed',
          DEED_MTGE_BASE_FEE: 70.25,
        };
      },
    });

    expect(wrapper.vm.getBaseFee).toBe(70.25);
  });

  // Test case for getAdditionalPageFee
  it('getAdditionalPageFee should calculate the correct additional page fee', () => {
    const wrapper = mount(InputForm, {
      data() {
        return {
          pageCount: 5,
          BASE_PAGE_THRESHOLD: 4,
          OVER_FOUR_PAGE_FEE: 2.0,
        };
      },
    });

    expect(wrapper.vm.getAdditionalPageFee).toBe(2.0);
  });

  // Test cases for getERecordingFee
  it('getERecordingFee should return the correct e-recording fee when hasFee is true', () => {
    const wrapper = mount(InputForm, {
      data() {
        return {
          hasFee: true,
          SIMPLIFILE_FEE: 4.75,
        };
      },
    });

    expect(wrapper.vm.getERecordingFee).toBe(4.75);
  });

  it('getERecordingFee should return 0 when hasFee is false', () => {
    const wrapper = mount(InputForm, {
      data() {
        return {
          hasFee: false,
        };
      },
    });

    expect(wrapper.vm.getERecordingFee).toBe(0);
  });

  // Test cases for calculateTransferTax
  it('calculateTransferTax should calculate the correct transfer tax amount when hasTransferTax is true and consideration is greater than 1', () => {
    const wrapper = mount(InputForm, {
      data() {
        return {
          hasTransferTax: true,
          consideration: 1000,
          TWO_PERCENT_TRANSFER_TAX: 0.02,
        };
      },
    });

    expect(wrapper.vm.calculateTransferTax).toBe(20);
  });

  it('calculateTransferTax should return 0 when hasTransferTax is false', () => {
    const wrapper = mount(InputForm, {
      data() {
        return {
          hasTransferTax: false,
          consideration: 1000,
        };
      },
    });

    expect(wrapper.vm.calculateTransferTax).toBe(0);
  });

  it('calculateTransferTax should return 0 when consideration is not greater than 1', () => {
    const wrapper = mount(InputForm, {
      data() {
        return {
          hasTransferTax: true,
          consideration: 1,
        };
      },
    });

    expect(wrapper.vm.calculateTransferTax).toBe(0);
  });

  // Test case for calculateTotalCharges
  it('calculateTotalCharges should calculate the correct total charges', () => {
    const wrapper = mount(InputForm, {
      data() {
        return {
          documentType: 'Deed',
          pageCount: 5,
          hasTransferTax: true,
          consideration: 100000,
          hasFee: true,
        };
      },
    });

    // Replace the expected value with the correct calculation based on your data properties
    expect(wrapper.vm.calculateTotalCharges).toBe(2077.00);
  });
});
