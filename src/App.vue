<template>
  <div class="max-w-3xl pb-5 m-10 mx-auto bg-white rounded-sm shadow-sm">
    <div class="p-5">
      <h1 class="text-xl font-bold text-purple-700">InFIRMation</h1>
      <h2 class="-mt-1 text-gray-600">💼 Get data on companies and firms from LinkedIn</h2>
      <Form @company-name="searchCompanyData" class="p-5" />
    </div>
    <div v-if="isLoading">
      <p class="pb-5 text-center">Loading... please wait 🙄</p>
    </div>
    <div 
      v-if="errorMsg"
      class="px-4 py-2 mt-4 text-red-700 bg-red-100 rounded">
      Unable to catch data on this company, try again 🤷
    </div>
    <div 
      v-if="companyData.length > 0" 
      class="my-6 bg-purple-800 rounded shadow m-9">
      <table class="w-full text-left border-collapse table-fixed">
        <thead>
          <tr class="text-sm tracking-tight text-white bg-transparent border-b-4 border-purple-300">
            <th class="px-5 py-2">LOGO</th>
            <th class="px-5 py-2">NAME</th>
            <th class="px-5 py-2">EMPLOYEE NUMBER RANGE</th>
            <th class="px-5 py-2">LINKEDIN PROFILE NUMBER</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white">
            <td><img :src="companyData[0].companyLogo" class="object-contain h-12 m-4 rounded-full"></td>
            <td class="px-5 py-1">{{ companyData[0].companyName }}</td>
            <td class="px-5 py-1">{{ companyData[0].companyEmployeeNumber }}</td>
            <td class="px-5 py-1">{{ companyData[0].companyLinkedInNumber }}</td>
          </tr>
        </tbody>
      </table>
    </div>
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
      companyData: [],
      isLoading: false,
      errorMsg: false
    }
  },
  methods: {
    async searchCompanyData(companyNameSearched) {
      this.companyData = []
      this.isLoading = true
      this.errorMsg = false
      
      try {
        const response = await axios.get(`search?searchquery=${companyNameSearched}`, {timeout: 20000})
        this.companyData.push(response.data)
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        this.errorMsg = true
        console.log(error)
      }
    }
  },
}
</script>
