import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchTestimonialPageData = async () => {
    const { data } = await axios.get('http://localhost:5000/testimonial/components/testimonial_page_data');
    return data;
};


export const useTestimonialPageData = () => {
    return useQuery({
        queryKey: ['FaqPageData'],
        queryFn: fetchTestimonialPageData,
        staleTime: 1000 * 60 * 10,
    });
};




