<template>
  <form>
    <div>
      <input type="text" id="name" v-model="name" placeholder="Firend Name" />
    </div>
    <div>
      <input type="email" id="email" v-model="email" placeholder="Email Id" />
    </div>
    <div>
      <input
        type="text"
        id="mobile"
        v-model="mobile"
        placeholder="Mobile Number"
      />
    </div>
    <div>
      <button @click.prevent="addNewcontact">Add contact</button>
    </div>
  </form>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    addNewcontact() {
      this.$emit("add-new-contact", this.name, this.email, this.mobile);
      this.name = this.email = this.mobile = "";
    },
  },
};
</script>
