<script>
import  Nav  from '../components/nav.vue'
import { login } from '../funtional/login';
export default {
  components: {
    Nav
  },
  setup() {

    
  }
}
</script>



<template>
  <div>
    
    <header class="sticky-top">
      <Nav></Nav>
      <ul class="nav justify-content-center">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://ithelp.ithome.com.tw/articles/10010081">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled">Disabled</a>
      </li>
    </ul>
    </header>

    <main>
      <div class="view">
        <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    
    <div id="emailHelp" class="form-text"></div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
      
      </div>
      
    </main>
  </div>
</template>



<style>
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
  top: 0%;
  right: 0%;
  left: 0%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.view {
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
</style>
