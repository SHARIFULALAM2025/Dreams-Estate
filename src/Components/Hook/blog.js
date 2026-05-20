import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchBlogPageData = async () => {
    const { data } = await axios.get('http://localhost:5000/al-blog/blog_page_data');
    return data;
};


export const useBlogPageData = () => {
    return useQuery({
        queryKey: ['blogPageData'],
        queryFn: fetchBlogPageData,
        staleTime: 1000 * 60 * 10,
    });
};



