<template>
  <form @submit.prevent="submit">
    <input
      ref="nameInput"
      class="w-full p-2 border border-purple-100 rounded-sm hover:bg-purple-100 focus:bg-purple-100 focus:ring ring-offset-purple-700 focus:outline-none"
      type="text"
      placeholder="Type a company name..."
      v-model="CompanyName">
    <Button
      class="w-full mx-auto mt-4"
      type="submit">
      Search
    </Button>
    <div
      v-if="hasError"
      class="px-4 py-2 mt-4 text-red-700 bg-red-100 rounded">
      You have to type something 😏
    </div>
  </form>
</template>

<script>
import Button from './Button.vue'

export default {
  components: {
    Button
  },
  data() {
    return {
      CompanyName: '',
      hasError: false
    }
  },
  methods: {
    submit() {
      this.hasError = false
      if (this.CompanyName !== '') {
        this.$emit('company-name', this.CompanyName)
        this.CompanyName = ''
      }
      else {
        this.hasError = true
      }
    }
  },
  mounted() {
    this.$refs.nameInput.focus()
  }
}
</script>
