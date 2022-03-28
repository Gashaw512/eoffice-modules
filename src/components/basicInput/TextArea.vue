<template>
  <label>{{ label }} <span v-if="required" style="color: red">*</span></label>
  <textarea
  :required="required"
    class="
      form-control
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700
      focus:bg-white
      focus:border-blue-600
      focus:outline-none
    "
    id="exampleFormControlTextarea13"
    rows="4"
    :placeholder="label"
    @input="$emit('update:modelValue', $event.target.value)"
  ></textarea>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
     modelValue: {
      type: [String, Number],
      default: "",
    },
  },
};
</script>

<style>
</style>