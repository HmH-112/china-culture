<template>
  <div class="m-header">
    <top-bar />
    <m-nav />
  </div>
</template>

<script>
import topBar from "./topBar";
import MNav from "./nav";
export default {
  components: {
    topBar,
    MNav
  }
};
</script>
