<template>
    <div>
        <header>
            <Nav></Nav>
        </header>
        <main>
            <div class="view">
                <select v-model="id" class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                    <option selected disabled>選擇學生</option>
                    <option v-for="option in student_id.students" :value="option.ID" :key="option.ID">{{ option.ID }}
                    </option>
                </select>

                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">{{ subject }}</span>
                    <input v-model="score" type="text" class="form-control" placeholder="成績" aria-label="ID"
                        aria-describedby="basic-addon1">
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">備註</span>
                    <input v-model="reason" type="text" class="form-control" placeholder="" aria-label="ID"
                        aria-describedby="basic-addon1">
                </div>
                <button @click="submitForm">提交</button>
                <div class="spinner-border" role="status" v-show="show">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <!-- <div v-show="true">
                    <h3>{{ message }}</h3>
                </div> -->
            </div>
        </main>
    </div>
</template>
  
<script>
import Nav from '../../components/nav_teacher.vue';
import { get_id } from '../../funtional/teacher/get_student_ID';
import { ref, onMounted } from 'vue';
import VueCookies from 'vue-cookies';
import { input_score } from '../../funtional/teacher/input.js'

export default {
    components: {
        Nav
    },
    setup() {
        const student_id = ref([]);
        const id = ref('選擇學生');
        const score = ref('');
        const message = ref('');
        const reason = ref('');
        const show = ref(false)
        const subject = ref(VueCookies.get('User').Subject)
        onMounted(async () => {
            get_id()
                .then((students) => {
                    student_id.value = students
                    console.log(student_id.value)
                    // 处理成功时的逻辑，students为解析后的学生数据
                })
                .catch((error) => {
                    // 处理错误逻辑，error为错误信息
                });
            if (subject.value == 'Chinese') {
                subject.value = '國文'
            } else if (subject.value == 'English') {
                subject.value = '英文'
            } else if (subject.value == 'Math') {
                subject.value = '數學'
            } else if (subject.value == 'Social_Studies') {
                subject.value = '社會'
            } else if (subject.value == 'Science') {
                subject.value = '自然'
            }
        });

        const submitForm = async () => {
            show.value = true;
            message.value = await input_score(id.value, score.value, VueCookies.get('User'), reason.value)
            
            // window.alert(message.value);

            const result = window.confirm(message.value);
            show1(result)
            
        };

        const show1 = (result) =>{
            if (result) {
                show.value = false
                window.location.reload()
                
            }
        }

        return {
            student_id,
            id,
            score,
            submitForm,
            message,
            reason,
            subject,
            show
        };
    }
}
</script>
  
<style scoped>
header {
    line-height: 2;
    max-height: 100vh;
    width: 100%;
    position: fixed;
    top: 0%;
    right: 0%;
    left: 0%;
    background-color: bisque;
}


.view {
    display: table-column;
    max-height: 100vh;
    width: 300px;
    position: fixed;
    top: 100px;
    right: 65%;
    left: 35%;
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}
</style>
  