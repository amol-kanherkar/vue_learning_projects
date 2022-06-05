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
      <button @click.prevent="addNewFriend">Add Friend</button>
    </div>
  </form>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    addNewFriend() {
      this.$emit("add-new-friend", this.name, this.email, this.mobile);
      this.name = this.email = this.mobile = "";
    },
  },
};
</script>
