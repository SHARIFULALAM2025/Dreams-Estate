import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchAgencyPageData = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_Backend_url}/allAgency/data/agency_page_data`);
    return data;
};


export const useAgencyPageData = () => {
    return useQuery({
        queryKey: ['agencyPageData'],
        queryFn: fetchAgencyPageData,
        staleTime: 1000 * 60 * 10,
    });
};