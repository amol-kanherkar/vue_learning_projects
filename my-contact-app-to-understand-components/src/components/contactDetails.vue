<template>
  <li>
    <h2>{{ name }} {{ isFavourite ? "*" : "" }}</h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <button @click="toggleFavourite">
      Mark
      {{ isFavourite ? "Unfavourite" : "Favourite" }}
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Mobile : </strong>{{ phoneNumber }}</li>
      <li><strong>Email : </strong>{{ emailAddress }}</li>
      <li><button @click.prevent="deleteContact">Delete Contact</button></li>
    </ul>
  </li>
</template>
<script>
export default {
  /* props:[
        'name',
        'phoneNumber',
        'emailAddress'
    ], */
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    localAddress: {
      type: String,
      required: false,
    },
    isFavourite: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  emits: ["favourite-action", "delete-contact"],
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavourite() {
      this.$emit("favourite-action", this.id);
    },
    deleteContact() {
      this.$emit("delete-contact", this.id);
    },
  },
};
</script>
