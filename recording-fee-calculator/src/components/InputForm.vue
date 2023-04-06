<template>
    <div class="input">
        <form>
            <label for="doctype" id="doctype-label">Document Type: </label>
                <select id="doctype" name="doctype">
                    <option value="">--Please choose an option--</option>
                    <option value="deed">Deed</option>
                    <option value="poa">Power of Attorney</option>
                    <option value="mortgage">Mortgage</option>
                    <option value="assignment">Assignment of Rents/Leases</option>
                    <option value="satpiece">Satisfaction Piece</option>
                </select>
                <input type="number" id="pagecount" placeholder="Total Pages" />
                <input type="checkbox" v-bind:checked="document.efile"/>
                <input type="button" id="add-another" value="Add Another" v-on:click.prevent="addDocument" v-if="showForm === true"/>
                <input type="button" id="clear" value="Clear" v-on:submit.prevent="resetForm" />
                <input type="button" id="calculate" value="Calculate" v-on:submit.prevent="getTotalCharges" />
        </form>
    </div>
    
</template>

<script>
export default {
    name: "add-document",
    data() {
        return {
            showForm: true,
        }
    },
    methods: {
        resetForm() {
            this.showForm = true;
        },
    }
}
</script>

<style scoped>
form {
    background-color: rgba(255, 255, 255, 0.664);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
        "doctype-label"
        "doctype"
        "pagecount";
    margin: 0 auto;
    width: 50%;
    padding: 2em;
    justify-items: center;
}
#doctype-label {
    grid-area: doctype-label;
}

#doctype {
    grid-area: doctype;
}

#pagecount {
    grid-area: pagecount;
}

input[type=button] {
    display: inline;
    margin: 5px;
    background-color: rgba(255, 255, 255, 0.664);
    width: 150px;
    height: 35px;
    font-size: 16px;
}
input[type=button]:hover {
    border: rgb(169, 169, 169);
    background-color: rgba(47, 79, 79, 0.75);
}

</style>