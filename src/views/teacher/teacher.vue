<template lang="">
    <div>
        <header>
            <Nav></Nav>
        </header>
        <main>

        </main>
    </div>
</template>
<script>
import { RouterView,useRouter } from 'vue-router';
import Nav from '../../components/nav_teacher.vue'
import { cookie_teacher } from '../../funtional/teacher/cookie_teacher';
import { ref,onMounted } from 'vue';
import  VueCookies  from "vue-cookies"
export default {
    components: {
        Nav
    },
    setup() {
        const identity = ref(VueCookies.get('User'))
        const router = useRouter();
        onMounted(()=>{
            cookie_teacher(router,identity.value)
        });
        return{
            onMounted
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
main{
  display: table-cell;
  max-height: 100vh;
  width: 100%;
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
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>