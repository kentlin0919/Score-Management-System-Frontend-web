<template >
    <div>
        <header>
            <div v-show="show">
                <Nav></Nav>
            </div>
            <div v-show="show_input">
                <Nav2></Nav2>
            </div>
        </header>
        <main>
            <div class="view">
                <div class="spinner-border" role="status" v-show="show_loading">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <div class="input-group mb-3" v-show="show_input">
                    <input type="text" class="form-control" placeholder="學號" aria-label="學號"
                        aria-describedby="button-addon2" v-model="teacher_input_student_id">
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2"
                        @click="serch_click">送出</button>
                </div>
                <div class="card" style="width: 18rem;" v-for="list in score_ALL" :key="list.id">
                    <div class="card-body">
                        <h5 class="card-title">{{ list.student_ID }} <b></b> {{ list.name.Name }}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">成績：{{ list.score }}</h6>
                        <h6 class="card-subtitle mb-2 text-body-secondary">科目：{{ list.subject }}</h6>
                        <h6 class="card-subtitle mb-2 text-body-secondary">備註：{{ list.reason }}</h6>
                        <h6 class="card-subtitle mb-2 text-body-secondary">修改時間：{{ list.blockTimestamp }}</h6>
                    </div>
                </div>
            </div>


        </main>

    </div>
</template>
<script>
import Nav from '../../components/nav_student.vue'
import Nav2 from '../../components/nav_teacher_student_serch.vue'
import { useRouter, createRouter } from 'vue-router';
import { ref, onMounted } from 'vue'
import VueCookies from "vue-cookies"
import { cookie_student } from '../../funtional/student/cookie_student'
import { getALL } from '../../funtional/student/get_ALL.js'
import { change } from '../../funtional/sub.js'
export default {
    components: {
        Nav,
        Nav2
    },
    setup() {
        const score_ALL = ref({});
        const identity = ref(VueCookies.get('User'));
        const router = useRouter();
        const show_input = ref(false)
        const teacher_input_student_id = ref('');
        const show = ref(true)
        const show_loading = ref(false)
        // const scroll = createRouter({
        //     history: createWebHistory(),
        //     scrollBehavior(to, from, savedPosition) {
        //         if (to.hash) {
        //             return {
        //                 el: to.hash,
        //                 behavior: 'smooth',
        //             };
        //         } else {
        //             return { left: 0, top: 0 };
        //         }
        //     },
        // });

        onMounted(async () => {
            //   scoreV.value = score(identity.value);
            console.log(VueCookies.get('User'))
            if (identity.value.Role == "Student") {
                show_loading.value = true;
                cookie_student(router, identity.value)
                score_ALL.value = await getALL();
                if (score_ALL.value.length == 0) {
                    const result = window.confirm("沒有歷史資料");
                    show1(result)
                }
                show_loading.value = false
            } else if (identity.value.Role == "Teacher") {
                show_input.value = "true"
                show.value = "false"
            }



        });
        const serch_click = async () => {
            score_ALL.value = await getALL(teacher_input_student_id);
            console.log(score_ALL.value.length)
            if (score_ALL.value.length == 0) {
                const result = window.confirm("沒有歷史資料");
                show1(result)
            }
            show_loading.value = false
        }
        const show1 = (result) => {
            if (result) {
                show_loading.value = false
                // window.location.reload()

            }
        }
        return {
            score_ALL,
            onMounted,
            identity,
            serch_click,
            show_input,
            teacher_input_student_id,
            show,
            show_loading,
            scroll
        }
    }
}
</script>
<style scoped >
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