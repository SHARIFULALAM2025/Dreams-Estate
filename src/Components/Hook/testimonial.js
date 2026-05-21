import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchTestimonialPageData = async () => {
    const { data } = await axios.get('https://dreams-backend-sepia.vercel.app/testimonial/components/testimonial_page_data');
    return data;
};


export const useTestimonialPageData = () => {
    return useQuery({
        queryKey: ['TestimonialPageData'],
        queryFn: fetchTestimonialPageData,
        staleTime: 1000 * 60 * 10,
    });
};




