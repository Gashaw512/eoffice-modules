<template>
  <div class="block p-6 rounded-lg shadow-lg bg-white max-w-md m-auto z-0" style="padding-top: 65px">
    <div class="text-center py-2 my-2">
      <h1 class="text-3xl">Leave Request Form</h1>
      <h5 class="text-xl">Please let us know when you're leaving us!</h5>
     
     <div>Icon made from <a href="http://www.onlinewebfonts.com/icon">Icon Fonts</a> is licensed by CC BY 3.0</div>


     

    </div>
    <hr />
    <form class="py-4 my-4">
      <div class="grid grid-cols-2 gap-4">
        <div class="form-group mb-6">
          <BaseInput
            v-bind="$attrs"
            label="First Name"
            v-model="information.firstName"
            types="text"
             :required="information.required"
          />
        </div>
        <div class="form-group mb-6">
          <BaseInput
            v-bind="$attrs"
            label="Last Name"
            v-model="information.lastName"
            types="text"
             :required="information.required"
          />
        </div>
      </div>
      <div class="form-group mb-6">
        <label for="">Phone Number</label>
        <Telephone template="(XXX) XXX-XXXX" v-model="information.phone"  :required="information.required"/>
      </div>
      <div class="form-group mb-6">
        <BaseInput
          v-bind="$attrs"
          label="Employee IhhhhhhhhD"
          v-model="information.employeeID"
          types="text"
           :required="information.required"
        />
      </div>
      <div class="form-group mb-6">
        <BaseInput
          v-bind="$attrs"
          label="E-mail"
          v-model="information.email"
          types="email"
           :required="information.required"
        />
      </div>
      <div class="form-group mb-6">
        <div>Department: {{ information.department }}</div>

        <select
          v-model="information.department"
          class="
            my-3
            focus:ring-2 focus:ring-blue-500 focus:outline-none
            appearance-none
            w-full
            text-sm
            leading-6
            text-slate-900
            placeholder-slate-400
            rounded-md
            py-2
            pl-10
            ring-1 ring-slate-200
            shadow-sm
          "
        >
          <option disabled value="">Select Department</option>
          <option>Marketing</option>
          <option>IT</option>
          <option>Financial</option>
j          <option>PR</option>
        </select>
      </div>

      <div class="grid grid-cols-2 gap-4">
        <div class="form-group mb-6">
          <BaseInput
            v-bind="$attrs"
            label="Start Date"
            v-model="information.startDate"
            types="date"
             :required="information.required"
          />
        </div>
        <div class="form-group mb-6">
          <BaseInput
            v-bind="$attrs"
            label="End Date"
            v-model="information.endDate"
            types="date"
             :required="information.required"
          />
        </div>
      </div>

      <div class="form-group mb-6">
        <TextArea
          label="Reason for Leave"
          :required="information.required"
          v-model="information.reasonForLeave"
        />
      </div>
      <button
        type="submit"
        class="
          w-full
          px-6
          py-2.5
          bg-blue-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-blue-700 hover:shadow-lg
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg
          transition
          duration-150
          ease-in-out
        "
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import BaseInput from "./basicInput/TextField.vue";
import Telephone from "./Telephone.vue";
import TextArea from './basicInput/TextArea.vue'
// import leaveIcon from '../assets/leavIcon.svg'
export default {
  components: { BaseInput, Telephone,TextArea},
  data() {
    return {
      information: {
        firstName: "",
        lastName: "",
        employeeID: "",
        phone: "",
        email: "",
        reasonForLeave: "",
        department: "",
        startDate: "",
        endDate: "",
        required:true,
      },
    };
  },
};
</script>

<style>
</style>