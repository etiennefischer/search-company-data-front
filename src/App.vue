<template>
  <div class="max-w-3xl pb-5 m-10 mx-auto bg-white rounded-sm shadow-sm">
    <div class="p-5">
      <h1 class="text-xl font-bold text-purple-700">InFIRMation</h1>
      <h2 class="mt-1 text-gray-600">💼 Get data on companies and firms from LinkedIn</h2>
      <Form @company-name="searchCompanyData" class="p-5" />
    </div>
    <div 
      v-if="isLoading"
      class="px-4 py-2 mt-4 text-center">
      Loading... please wait 🙄
    </div>
    <div 
      v-if="errorMsg"
      class="px-4 py-2 mt-4 text-center text-red-700">
      Unable to catch data on this company, try again 🤷
    </div>
    <div 
      v-if="companyData" 
      class="my-6 bg-purple-800 rounded shadow m-9">
      <table class="w-full text-left border-collapse table-fixed">
        <thead>
          <tr class="text-sm tracking-tight text-white bg-transparent border-b-4 border-purple-300">
            <th class="px-5 py-2">LOGO</th>
            <th class="px-5 py-2">NAME</th>
            <th class="px-5 py-2">EMPLOYEES NUMBER RANGE</th>
            <th class="px-5 py-2">LINKEDIN PROFILES NUMBER</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white">
            <td><img :src="companyData.companyLogo" class="object-contain h-12 m-4 rounded-full"></td>
            <td class="px-5 py-1">{{ companyData.companyName }}</td>
            <td class="px-5 py-1">{{ companyData.companyEmployeeNumber }}</td>
            <td class="px-5 py-1">{{ companyData.companyLinkedInNumber }}</td>
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
      companyData: null,
      isLoading: false,
      errorMsg: false
    }
  },
  methods: {
    async searchCompanyData(companyNameSearched) {
      this.companyData = null
      this.isLoading = true
      this.errorMsg = false
      
      try {
        const response = await axios.get(`search?searchquery=${companyNameSearched}`, {timeout: 40000})
        this.companyData = response.data
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        this.errorMsg = true
      }
    }
  },
}
</script>
