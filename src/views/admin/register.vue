<template>
    <div>
      <header>
        <Nav></Nav>
      </header>
      <main>
        <div class="main view">

          <select v-model="role" class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
            <option selected>選擇身份</option>
            <option value="Teacher">教師</option>
            <option value="Student">學生</option>
          </select>
          <select v-model="subject" :disabled="isDisabled" class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
            <option selected>選擇科目</option>
            <option v-for="option in subjectOptions" :value="option" :key="option">{{ option }}</option>
          </select>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">姓名</span>
            <input type="text" class="form-control" placeholder="" aria-label="name"
              aria-describedby="basic-addon1" v-model="name">
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">帳號</span>
            <input type="text" class="form-control" :placeholder="accINPUT" :aria-label="accINPUT"
              aria-describedby="basic-addon1" v-model="ID">
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">密碼</span>
            <input type="password" class="form-control" placeholder="" aria-label="password"
              aria-describedby="basic-addon1" v-model="password">
          </div>
  
          
          <button type="button" class="btn btn-primary btn-lg" @click="registerclick">註冊</button>

          <div class="spinner-border" role="status" v-show="show">
                    <span class="visually-hidden">Loading...</span>
                </div>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  import Nav from '../../components/nav_manager.vue'
  import { regsiterF } from '../../funtional/admin/regsiter.js'
  import { ref, computed,onMounted } from 'vue';
  import { cookie_admin } from '../../funtional/admin/cookie_admin';
  import  VueCookies  from 'vue-cookies';
import { useRouter } from 'vue-router';

  export default {
    components: {
      Nav
    },
    setup() {
      const role = ref('選擇身份');
      const subject = ref('選擇科目');
      const name = ref('');
      const ID = ref('');
      const password = ref('');
      const school = ref('選擇學校');
      const isDisabled = ref(false);
      const accINPUT = ref('')
      const router =   useRouter()
      const show_message = ref('')
      const show = ref(false)
      onMounted(()=>{
        // cookie_admin(router,VueCookies.get('User'))
      })
      const subjectOptions = computed(() => {
        if (role.value === 'Teacher') {
            isDisabled.value = false
            accINPUT.value = "教職員編號"
          return [ '國文', '英文', '數學', '社會', '自然'];
        } else if (role.value === 'Student') {
            isDisabled.value = true;
            accINPUT.value = "學號"
            subject.value = 'null'
        } else {
            isDisabled.value = false
            accINPUT.value = ""
        }
      });
  
      const registerclick = async () => {
        show.value = true;
        if(subject.value == '國文'){
            subject.value = 'Chinese'
        }else if(subject.value == '英文'){
            subject.value = 'English'
        }else if(subject.value == '數學'){
            subject.value = 'Math'
        }else if(subject.value == '社會'){
            subject.value = 'Social_Studies'
        }else if(subject.value == '自然'){
            subject.value = 'Science'
        }
        show_message.value = await regsiterF(role.value, subject.value, name.value, ID.value, password.value, school.value);
        console.log(show_message.value)
        const result = window.confirm(show_message.value);
        show1(result)
      };
      const show1 = (result) =>{
            if (result) {
                show.value = false
                window.location.reload()
                
            }
        }
  
      return {
        role,
        subject,
        name,
        ID,
        password,
        school,
        registerclick,
        subjectOptions,
        isDisabled,
        accINPUT,
        show_message,
        show
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
  