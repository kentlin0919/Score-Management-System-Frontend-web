<script>
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';
import Nav from '../components/nav.vue'
import { login, } from '../funtional/login';
import VueCookies from "vue-cookies"
export default {
  components: {
    Nav
  },
  setup() {

    const ID = ref('');
    const password = ref('');
    const router = useRouter();
    const identity = ref('');
    const login_message = ref('')
    const message = ref("")
    const body = {
      "ID": "",
      "detail": "",
      "name": "",
      "password": "",
      "private_key": "",
      "role": "",
      "school": "",
      "subject": "",
      "wallet_address": ""
    };
    onMounted(() => {
      VueCookies.set('User', body);

    })
    const loginClick = async () => {

      login_message.value = await login(router, ID.value, password.value);
      console.log(login_message.value)


    };
    return {
      ID,
      password,
      loginClick,
      identity,
      login_message,
      message
    };

  }
}
</script>



<template>
  <div>

    <header class="sticky-top">
      <Nav></Nav>

    </header>

    <main>
      <div class="view">
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">帳號</span>
          <input type="text" class="form-control" placeholder="Account" aria-label="ID" aria-describedby="basic-addon1"
            v-model="ID">
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">密碼</span>
          <input type="password" class="form-control" placeholder="Password" aria-label="password"
            aria-describedby="basic-addon1" v-model="password" :type="password">
        </div>
        <div>
          <h3>{{ login_message }}</h3>
        </div>
        <!-- <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div> -->
        <button type="submit" class="btn btn-primary" @click="loginClick">登入</button>
      </div>

    </main>
  </div>
</template>



<style scoped>
header {
  line-height: 2;
  max-height: 100vh;
  width: 100%;
  position: fixed;
  width: 100%;
  top: 0%;
  right: 0%;
  left: 0%;
  background-color: bisque;
}

main {

  width: 100%;
  height: 100%;
}

.view {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  top: 40%;
  right: 60%;
  left: 40%;
  width: 300px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* .collapse {
  &:not(.show) {
    display: none;
  }
}

.collapsing {
  height: 0;
  overflow: hidden;
  @include transition($transition-collapse);

  &.collapse-horizontal {
    width: 0;
    height: auto;
    @include transition($transition-collapse-width);
  }
} */
</style>
