import React from 'react'
import { useBuyPageData } from '../Hook/Buy'
import { useTranslation } from 'react-i18next'

const BuyGrid = () => {
  const { i18n } = useTranslation()

  const currentLang = i18n.language

  const { data: buyProperties = [], isLoading, isError } = useBuyPageData()
  const allData = buyProperties?.data || []
  console.log(allData)
  return <div>hello</div>
}

export default BuyGrid
