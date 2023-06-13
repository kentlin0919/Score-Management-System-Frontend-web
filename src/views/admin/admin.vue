<template>
    <div>
        <header>
            <Nav></Nav>
        </header>
        <main>
            <div>
    <button @click="showToast" id="liveToastBtn">Show Toast</button>
    <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <strong class="me-auto">Toast Title</strong>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body">
        Toast Message
      </div>
    </div>
  </div>
        </main>
    </div>
</template>
  
<script>
import { useRouter, RouterView } from 'vue-router';
import Nav from '../../components/nav_manager.vue'
import { cookie_admin } from '../../funtional/admin/cookie_admin';
import { ref, onMounted } from 'vue';
import VueCookies from 'vue-cookies'
export default {
    components: {
        Nav
    },
    setup() {
        const router = useRouter();
        const identity = ref(VueCookies.get('User'))
        const cookie_ID = ref('')
        const isDisabled = ref('')
        const showToast = () => {
      const toastLiveExample = document.getElementById('liveToast')
      const toastBootstrap = new bootstrap.Toast(toastLiveExample)
      toastBootstrap.show()
    }
        onMounted(() => {
            // cookie_admin(router,identity.value);
            const toastTrigger = document.getElementById('liveToastBtn')
      if (toastTrigger) {
        toastTrigger.addEventListener('click', showToast)
      }
        });

        return {
            cookie_admin,
            onMounted,
            showToast
        }
    }
}
</script>
  
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

.main {
    display: flex;
    max-height: 100vh;
    width: 600px;
    position: fixed;
    top: 48px;
    right: 0%;
    left: 0%;
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}

.view {
    display: flex;
    position: sticky;
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
</style>
  