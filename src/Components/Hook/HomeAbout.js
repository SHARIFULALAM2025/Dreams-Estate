import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchAboutHomePageData = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_Backend_url}/aboutHome/homeAbout_page_data`);
    return data;
};


export const useHomeAboutPageData = () => {
    return useQuery({
        queryKey: ['homeAboutData'],
        queryFn: fetchAboutHomePageData,
        staleTime: 1000 * 60 * 10,
    });
};




