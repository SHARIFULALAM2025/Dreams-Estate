import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchAboutPageData = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_Backend_url}/api/components/site_components`);
    return data;
};


export const useAboutPageData = () => {
    return useQuery({
        queryKey: ['aboutPageData'],
        queryFn: fetchAboutPageData,
        staleTime: 1000 * 60 * 10,
    });
};