import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchAgentPageData = async () => {
    const { data } = await axios.get('https://dreams-backend-sepia.vercel.app/components/agent/agent_profile_page_data');
    return data;
};


export const useAgentPageData = () => {
    return useQuery({
        queryKey: ['agentPageData'],
        queryFn: fetchAgentPageData,
        staleTime: 1000 * 60 * 10,
    });
};



