<template>
  <label for="">{{ label }} <span v-if="required" style="color:red">*</span></label>
  <input
    :placeholder="label"
    :type="types"
    :required="required"
    @input="$emit('update:modelValue', $event.target.value)"
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
    aria-describedby="emailHelp123"
  />
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    types: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
</style>