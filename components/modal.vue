<template>
  <div
    class="modal fade"
    id="imageModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="imageModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document" :class="{ small: small }">
      <button
        type="button"
        class="close"
        data-dismiss="modal"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
      <div class="modal-content h-100">
        <figure class="mb-0">
          <img
            v-if="image.src"
            :src="require('~/assets/images/' + image.src)"
            :alt="image.alt"
            class="img-fluid"
          />
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["image", "small"]
};
</script>

<style scoped>
.small {
  max-width: 700px !important;
}

.modal {
  text-align: center;
}

.modal-content {
  background: transparent;
  border: none;
}

button.close {
  height: 56px;
  width: 56px;
  background: #c5c5c5;
  border-radius: 100%;
  position: relative;
  top: -10px;
  opacity: 1;
  cursor: pointer !important;
}

button.close:hover {
  background: white;
  opacity: 1 !important;
}

@media (min-width: 576px) {
  .modal-dialog {
    max-width: 90vw;

    display: inline-block;
    margin: 1.75rem auto;
  }
}
</style>
