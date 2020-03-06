<template>
    <div
      class="modal fade"
      id="imageModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="imageModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document" :class="{'small': small}">
        <div class="modal-content h-100">
          <div class="modal-header">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <figure>
              <img v-if="image.src" :src="require('~/assets/images/' + image.src)" :alt="image.alt" class="img-fluid">
          </figure>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    props: ["image", "small"]
}
</script>

<style scoped>
.small {
    max-width: 700px !important;
}


@media (min-width: 576px){
.modal-dialog {
    max-width: 90vw;
    margin: 1.75rem auto;}
}
</style>
