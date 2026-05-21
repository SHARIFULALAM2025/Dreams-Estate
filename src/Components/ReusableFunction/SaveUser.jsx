import axios from 'axios'
export const saveUser = async (userData) => {
  const { data } = await axios.post(
    `${import.meta.env.VITE_Backend_url}/all-user`,
    userData
  )
  return data
}
