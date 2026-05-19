import React from 'react';
import { useParams } from 'react-router';

const AgentDetails = () => {

    const { agentId } = useParams()

    return (
      <div>
        <h1 className="">{agentId}</h1>
      </div>
    )
};

export default AgentDetails;