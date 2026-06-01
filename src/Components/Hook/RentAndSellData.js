import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchRentAndSellPageData = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_Backend_url}/api/property`);
    return data;
};


export const useRentAndSellPageData = () => {
    return useQuery({
        queryKey: ['RentAndSellData'],
        queryFn: fetchRentAndSellPageData,
        staleTime: 1000 * 60 * 10,
    });
};


// ধরে নিন, ভবিষ্যতে আপনি এমন একটি রাউট বানালেন যা শুধু লগইন করা ইউজাররাই দেখতে পারবে(যেমন: useMyAddedProperties বা ইউজারের নিজস্ব ড্যাশবোর্ড ডাটা)। তখন TanStack Query - তে টোকেনটি যেভাবে পাঠাবেন:

// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';

// const fetchPrivateData = async () => {

//     const token = localStorage.getItem('token');

//     const { data } = await axios.get(`${import.meta.env.VITE_Backend_url}/api/property/my-properties`, {
//         headers: {

//             'Authorization': `Bearer ${token}`
//         }
//     });
//     return data;
// };

// export const useMyProperties = () => {
//     return useQuery({
//         queryKey: ['MyProperties'],
//         queryFn: fetchPrivateData,
//         staleTime: 1000 * 60 * 5,
//     });
// };