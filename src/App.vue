
<template>
<NavBar/>
<router-view></router-view>


 <!-- <RequestForm/> -->
 <!-- <LeaveForm/>
 <Form/> -->
</template>
<script>
// import RequestForm from './view/RequestForm.vue'
import Form from './components/Form.vue'
import NavBar from './components/NavBar.vue'
import LeaveForm from './components/LeaveForm.vue'
export default{
     components: {
   Form, NavBar,LeaveForm

  },
}
</script>

<style>
</style>
