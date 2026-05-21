import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchFaqPageData = async () => {
    const { data } = await axios.get('https://dreams-backend-sepia.vercel.app/faq/components/Faq_page_data');
    return data;
};


export const useFaqPageData = () => {
    return useQuery({
        queryKey: ['FaqPageData'],
        queryFn: fetchFaqPageData,
        staleTime: 1000 * 60 * 10,
    });
};




