import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchBenefitPageData = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_Backend_url}/benefit/data/benefit_page_data`);
    return data;
};


export const useBenefitPageData = () => {
    return useQuery({
        queryKey: ['BenefitPageData'],
        queryFn: fetchBenefitPageData,
        staleTime: 1000 * 60 * 10,
    });
};




