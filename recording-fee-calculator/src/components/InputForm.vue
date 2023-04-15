<template>
  <div class="inner-container">
    <div class="form">
      <h1 class="form-title">Recording Fee Calculator</h1>
      <form class="form-body">
        <div class="form-group">
          <label for="document-type" class="form-label">Document Type:</label>
          <select id="document-type" v-model="documentType" class="form-select">
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
        <div class="form-group">
          <label for="page-count" class="form-label">Page Count:</label>
          <input
            id="page-count"
            type="number"
            v-model.number="pageCount"
            min="1"
            class="form-input"
          />
        </div>
        <div class="form-group">
          <label v-if="this.document == 'Deed'">
            <input type="radio" v-model="hasTransferTax" v-bind:value="0">Exempt
            <input type="radio" v-model="hasTransferTax" v-bind:value="1">Not Exempt
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" v-model="hasFee" />
            Add Simplifile Fee ($4.75)
          </label>
        </div>
      </form>
      <p class="form-total" v-bind="calculateTotalCharges">Total Charges: ${{ calculateTotalCharges.toFixed(2) }}</p>
      <button type="button" class="form-button">Add Document</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "InputForm",

  data() {
    return {
      DEED_BASE_FEE: 70.25,
      POA_BASE_FEE: 18.5,
      MISC_BASE_FEE: 68.5,
      BASE_PAGE_THRESHOLD: 4,
      SIMPLIFILE_FEE: 4.75,
      OVER_FOUR_PAGE_FEE: 2.0,
      documentType: "",
      pageCount: 1,
      hasFee: false,
      hasTransferTax: false
    };
  },
  computed: {
    getBaseFee() {
      // Calculate base fee
      let baseFee = 0;
      if (this.documentType === "Deed") {
        baseFee = this.DEED_BASE_FEE;
      } else if (this.documentType === "Power of Attorney") {
        baseFee = this.POA_BASE_FEE;
      } else {
        baseFee = this.MISC_BASE_FEE;
      }
      return baseFee;
    },
    getAdditionalPageFee() {
      // Calculate additional pages fee
      let additionalPageFee = 0;
      if (isNaN(this.pageCount) || this.pageCount < 1) {
        throw new Error("Invalid page count");
      } else if (this.pageCount <= this.BASE_PAGE_THRESHOLD) {
        return 0;
      } else {
        additionalPageFee =
          (this.pageCount - this.BASE_PAGE_THRESHOLD) * this.OVER_FOUR_PAGE_FEE;
      }
      return additionalPageFee;
    },
    calculateTransferTax() {
      if (this.hasTransferTax == 0) {
        return false;
      } return true;
    },
    getERecordingFee() {
      if (this.hasFee) {
        return this.SIMPLIFILE_FEE;
      } else {
        return 0;
      }
    },
    calculateTotalCharges() {
      if (this.documentType == "") {
        return 0;
      }
      let total = 0;
      total =
        this.getBaseFee +
        this.getAdditionalPageFee +
        this.getERecordingFee;
      return total;
    },
  },

};
</script>
<style scoped>
/* Container */
.inner-container {
  max-width: 600px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* Form */
.form {
  width: 100%;
  max-width: 500px;
  background-color: #fff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 20px 24px 28px rgba(0, 0, 0, 0.5);
  text-align: center;
}

/* Title */
.form h1 {
  margin-bottom: 30px;
  font-size: 36px;
  font-family: "Raleway", sans-serif;
}

/* Labels */
.form label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
}

/* Select */
.form select {
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 400;
  border-radius: 4px;
  border: 1px solid #ddd;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 16px;
  color: #333;
}

/* Input */
.form input {
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 400;
  border-radius: 4px;
  border: 1px solid #ddd;
  color: #333;
}

/* Checkbox */
.form input[type="checkbox"] {
  display: inline-block;
  margin-right: 8px;
  margin-bottom: 0;
  font-size: 16px;
  font-weight: 400;
  color: #333;
}

/* Button */
.form button {
  display: block;
  width: 100%;
  padding: 12px;
  margin-top: 16px;
  background-color: #333;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  border: none;
  transition: background-color 0.2s ease;
}

.form button:hover {
  background-color: #555;
}

/* Result */
.form p {
  margin-top: 32px;
  font-size: 24px;
  font-weight: 500;
}

</style>