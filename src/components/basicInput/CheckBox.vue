<template>
  <div class="m-auto">
    <h1>{{}}</h1>
    <input
      type="checkbox"
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
      id="exampleCheck25"
      @change="updateInput"
      :checked="isChecked"
      :value="label"
    />
    <label
      class="form-check-label inline-block text-gray-800"
      for="exampleCheck25"
      >{{ label }}</label
    >
    <!-- <input
      type="checkbox"
      :checked="isChecked"
      :value="value"
      @change="updateInput"
    /> -->
  </div>
</template>

<script>
export default {
   model: {
    prop: 'modelValue',
    event: 'change'
  },

  props: {
  label: {
    type: String,
    default: "",
  },
  modelValue: {
    type: Array,
    default: [],
  },
  trueValue: { default: true },
  falseValue: { default: false }
  },





  // model: {
  //   prop: 'modelValue',
  //   event: 'change'
  // },
  // props: {
  //   label: 
  //   { type: String },
  //   modelValue: { default: "" },
  //   label: { type: String, required: true },
  //   trueValue: { default: true },
  //   falseValue: { default: false },
  // },
  computed: {
    isChecked() {
      if (this.modelValue instanceof Array) {
        console.log(this.modelValue)
         console.log(this.value)
        return this.modelValue.includes(this.value)
      }
      // Note that `true-value` and `false-value` are camelCase in the JS
      return this.modelValue === this.trueValue
    }
  },


 methods: {
    updateInput(event) {
      console.log("Hiiiiiiiiiiiiiiii")
      let isChecked = event.target.checked
      if (this.modelValue instanceof Array) {
        let newValue = [...this.modelValue]
        if (isChecked) {
          newValue.push(this.value)
        } else {
          newValue.splice(newValue.indexOf(this.value), 1)
        }
        this.$emit('change', newValue)
      } else {
        this.$emit('change', isChecked ? this.trueValue : this.falseValue)
      }
    }
  }

  

  // },
};
</script>

<style>
</style>