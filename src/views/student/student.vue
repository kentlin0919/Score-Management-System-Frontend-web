<template >
    <div>
        <header>
            <Nav></Nav>
        </header>
        <main>
            <div class="view_table">
                <table>
                    <tr>
                        <td>
                            學號
                        </td>
                        <td>

                        </td>
                        <td>
                            姓名
                        </td>
                        <td>

                        </td>
                    </tr>
                    <tr class="table_color">
                        <td>
                            科目
                        </td>
                        <td>
                            分數
                        </td>
                        <td>
                            級分
                        </td>
                        <td>
                            備註
                        </td>

                    </tr>
                    <tr>
                        <td>
                            國文
                        </td>
                        <td>

                        </td>
                        <td>

                        </td>
                        <td>

                        </td>
                    </tr>
                    <tr>
                        <td>
                            英文
                        </td>
                        <td>

                        </td>
                        <td>

                        </td>
                        <td>

                        </td>
                    </tr>
                    <tr>
                        <td>
                            數學
                        </td>
                        <td>

                        </td>
                        <td>

                        </td>
                        <td>

                        </td>
                    </tr>
                    <tr>
                        <td>
                            社會
                        </td>
                        <td>

                        </td>
                        <td>

                        </td>
                        <td>

                        </td>
                    </tr>
                    <tr>
                        <td>
                            自然
                        </td>
                        <td>

                        </td>
                        <td>

                        </td>
                        <td>

                        </td>
                    </tr>
                    <tr class="table_color">
                        <th colspan=4>
                            總成績
                        </th>
                    </tr>
                    <tr>
                        <td colspan=2>
                            總分
                        </td>
                        <td colspan=2>

                        </td>
                    </tr>
                    <tr>
                        <td colspan=2>
                            平均
                        </td>
                        <td colspan=2>

                        </td>
                    </tr>
                    <tr>
                        <td colspan=2>
                            平均
                        </td>
                        <td colspan=2>

                        </td>
                    </tr>
                </table>
            </div>

        </main>

    </div>
</template>
<script>
import Nav from '../../components/nav_student.vue'
export default {
    components: {
        Nav
    },
    setup() {

    }
}
</script>
<style scoped>
main {
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

table {

    width: 500px;
    width: 500px;
    display: table-cell;
    position: sticky;
    align-items: center;
    justify-content: center;
    top: 40%;
    left: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

}

.table_color {
    background-color: green;

}

tr,
td {
    border: 1px solid black;
    text-align: center;
    height: 50px;
    width: 500px;
}
.view_table{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>