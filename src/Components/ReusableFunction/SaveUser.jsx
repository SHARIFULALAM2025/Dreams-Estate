import axios from 'axios'
export const saveUser = async (userData) => {
  const { data } = await axios.post(
    `http://localhost:5000/all-user`,
    userData
  )
  return data
}
