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




