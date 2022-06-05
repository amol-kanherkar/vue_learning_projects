import { createApp } from "vue";
import App from "./App.vue";
import ContactDetails from "./components/contactDetails.vue";
import AddContact from "./components/AddContact.vue";
const app = createApp(App);
app.component("contact-details", ContactDetails);
app.component("add-contact", AddContact);

app.mount("#app");
