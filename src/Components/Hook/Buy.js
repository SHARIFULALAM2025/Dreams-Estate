import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchBuyPageData = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_Backend_url}/api/property/buy`);
    return data;
};


export const useBuyPageData = () => {
    return useQuery({
        queryKey: ['BuyData'],
        queryFn: fetchBuyPageData,
        staleTime: 1000 * 60 * 10,
    });
};




