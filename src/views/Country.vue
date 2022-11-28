<template></template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions("country", ["setAllCountries"]),
  },
  computed: {
    ...mapGetters("country", ["getAllCountries"]),
  },

  mounted() {
    this.setAllCountries();
  },
};
</script>

<style></style>
