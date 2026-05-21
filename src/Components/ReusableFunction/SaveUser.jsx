import axios from 'axios'
export const saveUser = async (userData) => {
  const { data } = await axios.post(
    `https://dreams-backend-sepia.vercel.app/all-user`,
    userData
  )
  return data
}
