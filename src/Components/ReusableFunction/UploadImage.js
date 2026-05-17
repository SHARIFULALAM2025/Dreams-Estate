import axios from 'axios'
export const uploadImage = async (imageFile) => {
    const formData = new FormData()
    formData.append('image', imageFile)
    const { data } = await axios.post(
        `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_uploadImage}`,
        formData
    )
    return data?.data?.url
}