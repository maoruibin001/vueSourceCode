<template>
    <div>
        <div>我是第一个页面</div>
        <button @click="replace()">replace</button>
    </div>

</template>
<script>
  import $ from 'jquery';
  export default {
    name: 'first',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      replace() {
        debugger;
        this.$router.push({ name: '/second', params: { userId: 222 }})
//        $.ajax({
//          url: 'http://localhost:8098/userData',
//          type: 'get',
//          dataType: 'json',
//          data: {
//            name: 'mao'
//          },
//          success: function(data) {
//            console.log(data);
//          },
//          error: function(err) {
//            console.log(err);
//          }
//        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>