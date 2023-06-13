<template >
    <div>
        <header>
            <div v-show="show_Student">
                <Nav></Nav>
            </div>
            <div v-show="show_Admin">
                <Nav2></Nav2>
            </div>
        </header>
        <main>
            <div class="view_table">
                <p></p>
                <p></p>
                <p></p>
 
                <div class="input-group mb-3 input" v-show="show_input" >
                    <input type="text" class="form-control" placeholder="學號"
                        aria-label="學號" aria-describedby="button-addon2" v-model="admin_input_student_id">
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="serch_click">送出</button>
                </div>
                <table>
                    <tr v-show="show_Student">
                        <td>
                            學號
                        </td>
                        <td>
                            {{ identity.ID }}
                        </td>
                        <td>
                            姓名
                        </td>
                        <td>
                            {{ identity.Name }}
                        </td>
                    </tr>
                    <tr v-show="show_Admin">
                        <td>
                            學號
                        </td>
                        <td>
                            {{ scoreV.User_ID }}
                        </td>
                        <td>
                            姓名
                        </td>
                        <td>
                            {{ scoreV.Name }}
                        </td>
                    </tr>
                    <tr class="table_color">
                        <td>
                            科目
                        </td>
                        <td colspan=3>
                            分數
                        </td>

                    </tr>
                    
                    <tr>
                        <td>
                            國文
                        </td>
                        <td colspan=3>
                            {{ scoreV.Chinese }}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            英文
                        </td>
                        <td colspan=3>
                            {{ scoreV.English }}
                        </td>

                    </tr>
                    <tr>
                        <td>
                            數學
                        </td>
                        <td colspan=3>
                            {{ scoreV.Math }}
                        </td>

                    </tr>
                    <tr>
                        <td>
                            社會
                        </td>
                        <td colspan=3>
                            {{ scoreV.Social_Studies }}
                        </td>

                    </tr>
                    <tr>
                        <td>
                            自然
                        </td>
                        <td colspan=3>
                            {{ scoreV.Science }}
                        </td>

                    </tr>
                    <tr class="table_color">
                        <th colspan=4>
                            成績統計
                        </th>
                    </tr>
                    <tr>
                        <td>
                            總分
                        </td>
                        <td colspan=3>
                            {{ scoreV.total }}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            平均
                        </td>
                        <td colspan=3>
                            {{ scoreV.average }}
                        </td>
                    </tr>

                </table>
            </div>

        </main>

    </div>
</template>
<script>
import Nav from '../../components/nav_student.vue'
import Nav2 from '../../components/nav_manager.vue'
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue'
import { score } from '../../funtional/student/score.js'
import VueCookies from "vue-cookies"
import { cookie_student } from '../../funtional/student/cookie_student'
export default {
    components: {
        Nav,
        Nav2
    },
    setup() {
        const scoreV = ref({});
        const identity = ref(VueCookies.get('User'));
        const router = useRouter();
        const show_Student = ref(false);
        const show_Admin = ref(false);
        const show_input = ref(false)
        const admin_input_student_id = ref('')
        onMounted(async () => {
            
            console.log(scoreV.value)
            cookie_student(router, identity.value)
            if (VueCookies.get('User').Role == "Student") {
                show_Student.value = true
                show_Admin.value = false
            }
            else {
                show_Student.value = false
                show_Admin.value = true
                show_input.value = true
            }
            scoreV.value = await score(identity.value,admin_input_student_id.value);

        });

        const serch_click = async()=>{
            scoreV.value = await score(identity.value,admin_input_student_id.value);
        }
        return {
            scoreV,
            onMounted,
            identity,
            show_Student,
            show_Admin,
            show_input,
            admin_input_student_id,
            serch_click
        }
    }
}
</script>
<style scoped>
table {

    width: 500px;
    width: 500px;
}

.table_color {
    background-color: rgb(184, 235, 186);

}

tr,
td {
    border: 1px solid black;
    text-align: center;
    height: 50px;
    width: 500px;
}

.view_table {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.input{
    width: 500px;
}
</style>