<template>
  <h1>login</h1>
  <div class="field">
      <div class="col-12 md:col-4">
          <div class="p-inputgroup">
              <span class="p-inputgroup-addon">
                  <i class="pi pi-user"></i>
              </span>
              <InputText class="p-inputtext-filled" placeholder="Username" />
          </div>
      </div>
      <div class="col-12 md:col-4">
          <div class="p-inputgroup">
              <span class="p-inputgroup-addon">
                  <i class="pi pi-key"></i>
              </span>
              <InputText  placeholder="Password" />
          </div>
      </div>
  <Button label="Login" class="p-button-lg" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
  name: "Login",
  props: {
    source: String,
  },
});
</script>
<style>
.col-12 {
  margin:auto;
}
</style>