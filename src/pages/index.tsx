import React from 'react'
import AboutUs from '~/components/elements/AboutUs'
import EPoster from '~/components/elements/EPoster'
import MainPageTemplate from '~/components/templates/MainPageTemplate'

const index:React.FunctionComponent = () => {
  return (
    <div>
      <MainPageTemplate>
        <AboutUs/>
        <EPoster/>
      </MainPageTemplate>
    </div>
  )
}

export default index
