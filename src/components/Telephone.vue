<template>
  <label for="">{{label }}  <span v-if="required" style="color:red">*</span></label>
  <input
    :required="required"
    type="text"
    :placeholder="template"
    v-model="number"
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
  />
</template>

<script>
export default {
  props: {
    template: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: "",
    },
    modelValue:{
      type:String,
      default: ''
    }
  },
  data() {
    return {
      number: "",
      format: "",
      regx: "^",
    };
  },
  mounted() {
    let x = 1;
    this.format = this.template.replace(/X+/g, () => "$" + x++);
    this.template.match(/X+/g).forEach((char, index) => {
      this.regx += "(\\d{ " + char.length + "})?";
    });
  },
  watch: {
    number() {
      this.number = this.number
        .replace(/[^0-9]/g, "")
        .replace(/^(\d{3})?(\d{3})?(\d{4})?/g, this.format)
        .substr(0, this.template.length);
    },
  },
};
</script>

<style>
</style>