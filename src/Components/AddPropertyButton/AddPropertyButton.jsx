import React from 'react';
import { Link } from 'react-router';

const AddPropertyButton = () => {
    return (
      <div>
        <Link
          to="addProperty"
          className="px-5 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-lg shadow-lg hover:shadow-emerald-500/40 transition-all active:scale-95 flex items-center gap-2"
        >
         Add Property
        </Link>
      </div>
    )
};

export default AddPropertyButton;