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
            <option value="Assignment of Rents/Leases">Assignment of Rents/Leases</option>
            <option value="Satisfaction Piece">Satisfaction Piece</option>
            <option value="Miscellaneous">Miscellaneous</option>
          </select>
        </div>
        <div class="form-group">
          <label for="page-count" class="form-label">Page Count:</label>
          <input id="page-count" type="number" v-model.number="pageCount" min="1" class="form-input" />
        </div>

        <!-- TODO fix radio buttons and make sure transfer tax is calculated and added to total, if needed -->
        <div class="form-group" id="consideration" v-if="documentType == 'Deed'">
          <label for="consideration">Consideration: </label>
          <input type="number" v-model="consideration" />

          <div class="transfer-tax">
            <label for="transfer-tax">Transfer Tax: </label>
            <div class="transfer-tax-option">
              <label for="noTax">Exempt</label>
              <input type="radio" id="noTax" v-model="hasTransferTax" :value="false" />
            </div>
            <div class="transfer-tax-option">
              <label for="tax">Not Exempt</label>
              <input type="radio" id="tax" v-model="hasTransferTax" :value="true" />
            </div>
          </div>
        </div>

        <div>
          <div class="efile">
            <label>Add Simplifile Fee ($4.75)</label>
            <input type="checkbox" v-model="hasFee" />
          </div>
        </div>
      </form>
      <p class="form-total" v-bind="calculateTotalCharges">
        Total Charges: ${{ calculateTotalCharges.toFixed(2) }}
      </p>
      <button type="reset" class="form-button" id="clear" v-on:click.prevent="clearForm">Clear Form</button>
      <!-- TODO Work on making this button add a document to the data store and display it elsewhere on the page -->
      <button type="submit" class="form-button" id="add" v-on:click.prevent="addDocument">Add Document</button>
    </div>
    <div class="popup">
      <span class="hello">hello!</span>
      <p class="message">
        The fees listed herein are specific to the recording fees set by the
        Lancaster County Recorder of Deeds Office and the Simplifile e-recording
        software. Additionally, transfer tax is calculated at 2% of the sale price.
        Please confirm base fees remain accurate before submitting
        documents for recording.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputForm",
  data() {
    return {

      DEED_MTGE_BASE_FEE: 70.25,
      POA_BASE_FEE: 18.50,
      MISC_BASE_FEE: 58.75,
      BASE_PAGE_THRESHOLD: 4,
      SIMPLIFILE_FEE: 4.75,
      OVER_FOUR_PAGE_FEE: 2.0,
      TWO_PERCENT_TRANSFER_TAX: 0.02,

      documentType: "",
      pageCount: 1,
      hasFee: false,
      hasTransferTax: false,
      consideration: 0,
      transferTaxAmount: 0,

    };
  },
  computed: {
    getBaseFee() {
      // Calculate base fee
      let baseFee = 0;
      if (this.documentType === "Deed" || this.documentType === "Mortgage") {
        baseFee = this.DEED_MTGE_BASE_FEE;
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
    getERecordingFee() {
      // Add Simplifile fee if box is checked
      if (this.hasFee) {
        return this.SIMPLIFILE_FEE;
      } else {
        return 0;
      }
    },
    calculateTransferTax() {
      // If not exempt from transfer tax, calculate 2% of consideration
      let transferTaxAmount = 0;
      if (this.hasTransferTax == true && this.consideration > 1) {
        transferTaxAmount += this.consideration * this.TWO_PERCENT_TRANSFER_TAX;
      } return transferTaxAmount;
    },
    calculateTotalCharges() {
      // Add together all charges
      if (this.documentType == "") {
        return 0;
      }
      let total = 0;
      total =
        this.getBaseFee +
        this.getAdditionalPageFee +
        this.calculateTransferTax +
        this.getERecordingFee;
      return total;
    },
  },
  methods: {
    addDocument() {
      this.$store.commit("ADD_NEW_DOCUMENT", this.document)
    },
    clearForm() {
      this.documentType = '',
        this.pageCount = 1,
        this.consideration = 0,
        this.hasFee = false
    }
  }
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
  font-size: 2em;
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
.transfer-tax-option {
  display: inline-block;
  width:150px;
}

.transfer-tax {
  display: inline;
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

.form-button#add {
  background-color: gray;
}
.form-button#add:hover {
  background-color: gray;
  cursor:not-allowed;
}

/* Total */
.form p {
  margin-top: 32px;
  font-size: 24px;
  font-weight: 500;
}

.popup {
  position: fixed;
  bottom: 0;
  right: 30px;
  background: linear-gradient(to bottom, rgb(99, 172, 240), rgba(122, 218, 235, 0.7));
  color: #000;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  width: 100px;
  height: 35px;
  transition: all 0.2s ease-in-out;
}

.popup p {
  margin-bottom: 10px;
}

.popup:hover {
  width: 300px;
  height: 200px;
  padding: 10px;
}

.hello {
  font-size: 1.5em;
  font-weight: bold;
}
</style>