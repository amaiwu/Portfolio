<template>
  <div
    class="modal fade"
    id="ViewPDF"
    tabindex="-1"
    role="dialog"
    aria-labelledby="viewImageModal"
    aria-hidden="true"
    style="padding-right: 0"
  >
    <div class="modal-dialog modal-dialog-centered" role="document" :class="{ fullWidth: fullWidth }">
      <div class="modal-content d-block" :class="{ fullWidth: fullWidth }">
        <img v-if="img" :src="link" alt="" class="img-fluid"/>
        <iframe
          v-else
          height="700px"
          width="100%"
          :src="'https://docs.google.com/gview?url=' + link + '&embedded=true'"
        >
          <p>Your browser does not support iframes.</p>
        </iframe>
        <a href="#" type="button" class="close" data-dismiss="modal">&times;</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["link", "fullWidth", "img"]
};
</script>

<style scoped>
.modal-content {
  background: transparent;
  border: none;
}
.close {
  background: white;
  border-radius: 100%;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  position: absolute;
  top: -10px;
  right: -80px;
}
.modal-dialog.fullWidth {
  max-width: unset !important;
  background: rgba(0, 0, 0, 0.7);
  margin: 0 auto !important;
  padding: 1.75rem;
  height: 100%;
}

.modal-content.fullWidth {
  width: 90%;
  margin: auto;
}

@media (min-width: 576px) {
  .modal-dialog {
    max-width: 70%;
    margin: 1.75rem auto;
  }
}
</style>
