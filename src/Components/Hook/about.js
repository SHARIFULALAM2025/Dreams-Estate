import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchAboutPageData = async () => {
    const { data } = await axios.get('https://dreams-backend-sepia.vercel.app/api/components/about_page_data');
    return data;
};


export const useAboutPageData = () => {
    return useQuery({
        queryKey: ['aboutPageData'],
        queryFn: fetchAboutPageData,
        staleTime: 1000 * 60 * 10,
    });
};