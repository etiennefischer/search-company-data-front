<template>
  <div class="max-w-lg m-10 mx-auto bg-white rounded-sm shadow-sm">
    <div class="p-5">
      <h1 class="text-xl font-bold text-purple-700">InFIRMation</h1>
      <h2 class="-mt-1 text-gray-600">💼 Get data on companies and firms from LinkedIn</h2>
      <Form @company-name="searchCompanyData" class="p-5" />
    </div>
    <ul v-if="companyData.length > 0">
      <li>{{ companyData[0].companyName }}</li>
      <li>{{ companyData[0].companyEmployeeNumber }}</li>
      <li>{{ companyData[0].companyLinkedInNumber }}</li>
      <img :src="companyData[0].companyLogo">
    </ul>
  </div>
</template>

<script>
import Form from '@/components/Form.vue'
import axios from './axios'

export default {
  components: {
    Form
  },
  data() {
    return {
      companyData: []
    }
  },
  methods: {
    async searchCompanyData(companyNameSearched) {
      this.companyData = []
      console.log(companyNameSearched)
      try {
        const response = await axios.get(`search?searchquery=${companyNameSearched}`, {mode:'cors'})
        console.log(axios.get(this.companyNameSearched))
        // JSON responses are automatically parsed.
        this.companyData.push(response.data)
        console.log(this.companyData)
      } catch (error) {
        console.log(error)
      }
    }
  },
}

</script>

<style>

</style>
