<template>
  <div>
    <div class="modal" ref="modal">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">Edit This Todo:</div>
          <div class="modal-body input-group my-2 mx-auto">
            <input
              type="text"
              class="form-control"
              aria-describedby="bbtn-save-edit"
              v-model="temp.content"
            />
          </div>
          <div class="modal-footer">
            <button
              class="btn btn-outline-secondary"
              data-bs-dismiss="modal"
              type="button"
              id="btn-save-edit"
              @click="cancelEditItem"
            >
              cancel
            </button>
            <button
              class="btn btn-outline-secondary"
              data-bs-dismiss="modal"
              type="button"
              id="btn-save-edit"
              @click="saveEditItem"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "bootstrap/js/dist/modal";
export default {
  name: "EditOldItemModal",
  props: {
    editTemp: Object,
  },
  data() {
    return {
      modal: {},
      temp: this.editTemp,
    };
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
  watch: {
    editTemp() {
      this.temp = this.editTemp;
    },
  },
  methods: {
    showModal() {
      this.modal.show();
    },
    hideModal() {
      this.modal.hide();
    },
    cancelEditItem() {
      this.temo = {};
      this.hideModal();
    },
    saveEditItem() {
      this.$emit("saveEditItem", this.temp);
      this.hideModal();
    },
  },
};
</script>
