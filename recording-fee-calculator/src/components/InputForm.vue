<template>
  <div class="form">
    <h1>Hello, World</h1>
    <form>
      <div>
        <label for="document-type">Document Type:</label>
        <select id="document-type" v-model="documentType">
          <option value="Deed">Deed</option>
          <option value="Mortgage">Mortgage</option>
          <option value="Power of Attorney">Power of Attorney</option>
          <option value="Assignment of Rents/Leases">
            Assignment of Rents/Leases
          </option>
          <option value="Satisfaction Piece">Satisfaction Piece</option>
          <option value="Miscellaneous">Miscellaneous</option>
        </select>
      </div>
      <div>
        <label for="page-count">Page Count:</label>
        <input
          id="page-count"
          type="number"
          v-model.number="pageCount"
          min="1"
        />
      </div>
      <div>
        <label>
          <input type="checkbox" v-model="simplifileFee" />
          Add Simplifile Fee ($4.75)
        </label>
      </div>
      <button type="button" @click="calculateFee">Calculate Fee</button>
    </form>
    <p>Total Charges: ${{ calculateTotalCharges.toFixed(2) }}</p>
  </div>
</template>

<script>
export default {
  name: "InputForm",
  data() {
    return {
      totalfee: 0
    };
  },
  computed: {
    getBaseFee(documentType) {
      // Calculate base fee
      const DEED_BASE_FEE = 70.25;
      const POA_BASE_FEE = 18.5;
      const MISC_BASE_FEE = 68.5;
      let baseFee = 0;
      if (documentType === "Deed") {
        baseFee = DEED_BASE_FEE;
      } else if (documentType === "Power of Attorney") {
        baseFee = POA_BASE_FEE;
      } else {
        baseFee = MISC_BASE_FEE;
      }
      return baseFee;
    },
    getAdditionalPageFee(pageCount) {
      // Calculate additional pages fee
      const BASE_PAGE_THRESHOLD = 4;
      const OVER_FOUR_PAGE_FEE = 2.0;
      let additionalPageFee = 0;
      if (isNaN(pageCount) || pageCount < 1) {
        throw new Error("Invalid page count");
      } else if (pageCount <= BASE_PAGE_THRESHOLD) {
        return 0;
      } else {
        additionalPageFee =
          (pageCount - BASE_PAGE_THRESHOLD) * OVER_FOUR_PAGE_FEE;
      }
      return additionalPageFee;
    },

    getERecordingFee(hasFee) {
      const SIMPLIFILE_FEE = 4.75;
      if (hasFee) {
        return SIMPLIFILE_FEE;
      } else return 0;
    },

    calculateTotalCharges() {
      let total = 0;
      total =
        this.getBaseFee(this.documentType) +
        this.getAdditionalPageFee(this.pageCount) +
        this.getERecordingFee(this.hasFee);
      return total;
    },
  },
};
</script>
  
<style scoped>
#input-form {
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(150px, auto);
}
</style>