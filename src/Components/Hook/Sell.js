import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchSellPageData = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_Backend_url}/api/property/sell`);
    return data;
};


export const useSellPageData = () => {
    return useQuery({
        queryKey: ['SellData'],
        queryFn: fetchSellPageData,
        staleTime: 1000 * 60 * 10,
    });
};




