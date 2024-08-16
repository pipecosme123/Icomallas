import axios from "axios";

export default axios.create({
  baseURL: import.meta.env.VITE_URL_API,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
})