<template>
  <div class="block p-6 rounded-lg shadow-lg bg-white max-w-md m-auto z-0  "  style="padding-top: 65px" >
    <div class="text-center py-2 my-2">
      <h1 class="text-3xl">Travel Request Form</h1>
      <h5 class="text-xl">Please let us know when you're leaving us!</h5>
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
        <Telephone
          template="(XXX) XXX-XXXX"
          label="Phone Number"
          :required="information.required"
          v-model="information.phone"
        />
      </div>
      <div class="form-group mb-6">
        <BaseInput
          v-bind="$attrs"
          label="Employee ID"
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
          required
          v-model="information.department"
          class="
            my-3
            focus:ring-2 focus:ring-blue-500 focus:outline-none
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
          <option>PR</option>
        </select>
      </div>

      <div class="grid grid-cols-2 gap-4">
        <div class="form-group mb-6">
          <BaseInput
            v-bind="$attrs"
            label="Depature Date"
            v-model="information.startDate"
            types="date"
            :required="information.required"
          />
        </div>
        <div class="form-group mb-6">
          <BaseInput
            v-bind="$attrs"
            label="Return Date"
            v-model="information.endDate"
            types="date"
            :required="information.required"
          />
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4">
        <div class="form-group mb-6">
          <BaseInput
            v-bind="$attrs"
            label="Depature City"
            v-model="information.depatureDate"
            types="text"
            :required="information.required"
          />
        </div>
        <div class="form-group mb-6">
          <BaseInput
            v-bind="$attrs"
            label="Arival City"
            v-model="information.returndDate"
            types="text"
            :required="information.required"
          />
        </div>
      </div>
      <div class="form-group mb-6">
        <TextArea
          label="Reason for Travel"
          :required="information.required"
          v-model="information.reasonForTravel"
        />
      </div>
      <div class="form-group mb-6 px-30" style="margin: auto; width: 100%">
        <h1 class="text-xl">Travel arrangements needed</h1>
        <!-- <CheckBox
          label="Flight"
          :required="information.required"
          v-model="information.travelNeeded"
        />
        <CheckBox
          label="Hotel"
          :required="information.required"
          v-model="information.travelNeeded"
        />
        <CheckBox
          label="Rental Car"
          :required="information.required"
          v-model="information.travelNeeded"
        />
        <CheckBox
          label="Other"
          :required="information.required"
          v-model="information.travelNeeded"
        /> -->
        <div>
          <input
            type="checkbox"
            id="flight"
            value="Flight"
            class="
              form-check-input
              h-4
              w-4
              border border-gray-300
              rounded-sm
              focus:outline-none
              transition
              duration-200
              mt-1
              align-top
              bg-no-repeat bg-center bg-contain
              mr-2
              cursor-pointer
            "
            v-model="information.travelNeeded"
          />
          <label for="flight">Flight </label>
        </div>
        <div>
          <input
            type="checkbox"
            id="hotel"
            value="Hotel"
            class="
              form-check-input
              h-4
              w-4
              border border-gray-300
              rounded-sm
              focus:outline-none
              transition
              duration-200
              mt-1
              align-top
              bg-no-repeat bg-center bg-contain
              mr-2
              cursor-pointer
            "
            v-model="information.travelNeeded"
          />
          <label for="hotel">Hotel </label>
        </div>
        <div>
          <input
            type="checkbox"
            id="rent"
            value="Rental Car"
            class="
              form-check-input
              h-4
              w-4
              border border-gray-300
              rounded-sm
              focus:outline-none
              transition
              duration-200
              mt-1
              align-top
              bg-no-repeat bg-center bg-contain
              mr-2
              cursor-pointer
            "
            v-model="information.travelNeeded"
          />
          <label for="rent">Rental Car</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="other"
            value="Other"
            class="
              form-check-input
              h-4
              w-4
              border border-gray-300
              rounded-sm
              focus:outline-none
              transition
              duration-200
              mt-1
              align-top
              bg-no-repeat bg-center bg-contain
              mr-2
              cursor-pointer
            "
            v-model="information.travelNeeded"
          />
          <label for="other">Other </label>
        </div>
      </div>
       <div class="form-group mb-6" v-if="other()">
          <BaseInput
            v-bind="$attrs"
            label="If Other ....."
            v-model="information.other"
            types="text"
            :required="information.required"
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
import TextArea from "./basicInput/TextArea.vue";
import CheckBox from "./basicInput/CheckBox.vue";
export default {
  components: { BaseInput, Telephone, TextArea, CheckBox },
  data() {
    return {
      information: {
        firstName: "",
        lastName: "",
        employeeID: "",
        phone: "",
        email: "",
        reasonForTravel: "",
        department: "",
        depaturDate: "",
        returnDate: "",
        depatureCity: "",
        arivalCity: "",
        travelNeeded: [],
        other:'',
        required: true,
      },
    
      // baeInput=[{
      //   name,
      //   type,

      // }]
    };
  },
  methods:{
    other(){
      console.log(this.information.travelNeeded.includes('Other'))
      return this.information.travelNeeded.includes('Other')
    }
  }
};
</script>

<style>
</style>