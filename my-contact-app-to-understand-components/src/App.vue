<template>
  <section>
    <header>
      <h1>My Friends</h1>
    </header>
    <add-friend @add-new-friend="addNewFriend"></add-friend>
    <ul>
      <friend-contact
        v-for="friend in friends"
        :key="friend.id"
        :id="friend.id"
        :name="friend.name"
        :phone-number="friend.mobile"
        :email-address="friend.email"
        :is-favourite="friend.isfavourite"
        @favourite-action="favouriteAction"
        @delete-contact="deleteContact"
      ></friend-contact>
    </ul>
  </section>
</template>
<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "1",
          name: "Bodkhe Digambar Ambadas",
          address: "Chincholi Ramjan",
          mobile: "9730352928",
          email: "kirandip04@gmail.com",
          isfavourite: true,
        },
        {
          id: "2",
          name: "Gangarde Prakash Chhabulal",
          address: "Kombhali",
          mobile: "9970754949",
          email: "pakabhau@gmail.com",
          isfavourite: false,
        },
      ],
    };
  },
  methods: {
    favouriteAction(id) {
      const friend = this.friends.find((fnd) => fnd.id == id);
      friend.isfavourite = !friend.isfavourite;
    },
    addNewFriend(name, email, mobile) {
      let id = this.friends.length + 1;
      console.log(this.friends.length);
      const newFriend = {
        id: id,
        name: name,
        email: email,
        mobile: mobile,
        isfavourite: false,
      };
      this.friends.push(newFriend);
      console.log(this.friends);
    },
    deleteContact(id) {
      this.friends = this.friends.filter((friend) => friend.id !== id);
    },
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");
* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li,
#app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
</style>
