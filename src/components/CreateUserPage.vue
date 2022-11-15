<template>
  <div
    v-if="this.isFetching"
    class="w-full h-fit flex flex-col justify-center items-center pt-60"
  >
    <div
      class="h-20 w-20 border-8 border-slate-300 rounded-full border-t-[#003049] animate-spin"
    ></div>
  </div>
  <div
    v-else-if="!this.currentUserActive"
    class="w-full h-fit pt-20 gap-8 flex flex-col justify-center items-center"
  >
    <h2 class="text-4xl text-[#669bbc] font-bold tracking-wider">Создать</h2>
    <div class="w-60 h-60 border-2 border-[#669bbc] rounded-lg bg-white">
      <form
        @submit.prevent="this.createUser"
        class="flex flex-col justify-center items-center h-full"
      >
        <div
          class="w-full flex justify-center mb-4 items-center transition-all text-slate-400"
        >
          <input
            class="w-5/6 px-2 h-10 peer border rounded-md border-slate-300 transition-all focus:outline-[#669bbc] invalid:border-red-400 invalid:text-red-400 text-[#003049] duration-500"
            :class="{
              'border-2': this.fullnameInput,
              'border-main-100': this.fullnameInput,
            }"
            v-model="this.fullnameInput"
            name="fullname"
            id="fullname"
            type="text"
            pattern="[A-Za-zА-Яа-яЁё ]{3,}"
          />
          <label
            for="fullname"
            class="text-left absolute px-1 -translate-x-16 bg-white peer-focus:text-[#669bbc] cursor-text peer-focus:-translate-y-6 peer-focus:text-md transition-all duration-500"
            :class="{
              'text-[#669bbc]': this.fullnameInput,
              '-translate-y-6': this.fullnameInput,
              'peer-invalid:text-red-400': this.fullnameInput.length,
            }"
            >ФИО</label
          >
        </div>
        <div
          class="w-full flex justify-center mb-4 items-center transition-all text-slate-400"
        >
          <input
            class="w-5/6 px-2 h-10 peer border rounded-md border-slate-300 transition-all focus:outline-[#669bbc] text-[#003049] duration-500"
            :class="{
              'border-2': this.emailInput,
              'border-main-100': this.emailInput,
              'invalid:text-red-400': this.emailInput,
              'invalid:border-red-400': this.emailInput,
            }"
            v-model="this.emailInput"
            required
            name="email"
            id="email"
            type="email"
          />
          <label
            for="email"
            class="text-left absolute rounded-xl px-1 -translate-x-16 bg-white peer-focus:text-[#669bbc] cursor-text peer-focus:-translate-y-6 peer-focus:text-md transition-all duration-500"
            :class="{
              'text-[#669bbc]': this.emailInput,
              '-translate-y-6': this.emailInput,
              'peer-invalid:text-red-400': this.emailInput,
            }"
            >Email</label
          >
        </div>
        <!-- <div
          class="w-full flex justify-center mb-4 items-center transition-all text-slate-400"
        >
          <input
            class="w-5/6 px-2 h-10 peer border rounded-md border-slate-300 transition-all focus:outline-[#669bbc] text-[#003049] duration-500"
            :class="{
              'border-2': this.phoneInput,
              'border-main-100': this.phoneInput,
              'invalid:text-red-400': this.phoneInput,
              'invalid:border-red-400': this.phoneInput,
            }"
            v-model="this.phoneInput"
            required
            name="phone"
            id="phone"
            type="tel"
            maxlength="15"
            minlength="15"
            v-mask="'(###)-###-##-##'"
          />
          <label
            for="phone"
            class="text-left absolute rounded-xl px-1 -translate-x-6 bg-white peer-focus:text-[#669bbc] cursor-text peer-focus:-translate-y-6 peer-focus:text-md transition-all duration-500"
            :class="{
              'text-[#669bbc]': this.phoneInput,
              '-translate-y-6': this.phoneInput,
              'peer-invalid:text-red-400': this.phoneInput,
            }"
            >Phone (10 digits)</label
          >
        </div> -->
        <button
          class="w-5/6 h-8 border-2 border-[#669bbc] bg-white text-[#669bbc] hover:shadow-md hover:bg-[#669bbc] hover:text-white hover:shadow-black transition-all duration-300 rounded-md text-md"
        >
          Создать
        </button>
      </form>
    </div>
  </div>
  <div
    v-else
    class="w-full h-fit flex flex-col justify-center items-center pt-60"
  >
    <h2 class="text-2xl text-green-600 text-center font-bold">Вы успешно создали пользователя!</h2>
  </div>
</template>

<script>
import axios from "axios";

const url = "https://api.sitemap-generator.ru/test-api/user";
const headers = {
  "Content-Type": "application/json",
  "X-Application-Token": "wefiEFv_dwDEvf-12Veda_feadvkJbBgh831",
};

export default {
  name: "CreateUserPage",
  data() {
    return {
      emailInput: "",
      fullnameInput: "",
      isFetching: true,
      errMessage: "",
      currentUserActive: false,
      phoneInput: "",
    };
  },
  methods: {
    async createUser() {
      this.isFetching = true;
      const response = await axios.post(
        url,
        {
          name: this.fullnameInput,
          email: this.emailInput,
          phone: this.phoneInput,
        },
        {
          headers: headers,
        }
      );
      if (response.status === 201) {
        this.currentUserActive = true;
      }
      console.log(response.data);
      localStorage.setItem("auth_key", response.data.auth_key);
      this.isFetching = false;
    },
  },
  mounted() {
    if (localStorage.getItem("auth_key")) {
      this.currentUserActive = true;
    }
    this.isFetching = false;
  },
};
</script>
