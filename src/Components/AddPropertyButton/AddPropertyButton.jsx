import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';

const AddPropertyButton = () => {
  const { i18n } = useTranslation()
    const currentLang = i18n.language
    return (
      <div>
        <Link
          to="addProperty"
          className="px-5 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-lg shadow-lg hover:shadow-emerald-500/40 transition-all active:scale-95 flex items-center gap-2"
        >
          {currentLang === 'bn' ? 'সম্পত্তি যোগ করুন' : ' Add Property'}
        </Link>
      </div>
    )
};

export default AddPropertyButton;