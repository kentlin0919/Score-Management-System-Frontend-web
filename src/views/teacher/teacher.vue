<template lang="">
    <div>
        <header>
            <Nav></Nav>
        </header>
        <main>
            <div class="view" >
                <table>
                    <tr>
                        <td>

                        </td>
                    </tr>

                </table>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">學生ID</span>
                    <input type="text" class="form-control" placeholder="ID" aria-label="ID" aria-describedby="basic-addon1">
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">國文</span>
                    <input type="text" class="form-control" placeholder="score" aria-label="ID" aria-describedby="basic-addon1">
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">英文</span>
                    <input type="text" class="form-control" placeholder="score" aria-label="ID" aria-describedby="basic-addon1">
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">數學</span>
                    <input type="text" class="form-control" placeholder="score" aria-label="ID" aria-describedby="basic-addon1">
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">社會</span>
                    <input type="text" class="form-control" placeholder="score" aria-label="ID" aria-describedby="basic-addon1">
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">自然</span>
                    <input type="text" class="form-control" placeholder="score" aria-label="ID" aria-describedby="basic-addon1">
                </div>
            </div>
        </main>
    </div>
</template>
<script>
import Nav from '../../components/nav_teacher.vue'
export default {
    components: {
        Nav
    },
    setup() {

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