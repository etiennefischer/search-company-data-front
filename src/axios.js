import axios from 'axios'
const baseURL = 'http://localhost:3000'

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export default axios.create({
    baseURL
  })