import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchAboutHomePageData = async () => {
    const { data } = await axios.get('http://localhost:5000/aboutHome/homeAbout_page_data');
    return data;
};


export const useHomeAboutPageData = () => {
    return useQuery({
        queryKey: ['homeAboutData'],
        queryFn: fetchAboutHomePageData,
        staleTime: 1000 * 60 * 10,
    });
};




