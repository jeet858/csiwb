import React from 'react'
import AboutUs from '~/components/elements/AboutUs'
import EPoster from '~/components/elements/EPoster'
import OrganizingCommittee from '~/components/elements/OrganizingCommittee'
import SocialLinks from '~/components/elements/SocialLinks'
import MainPageTemplate from '~/components/templates/MainPageTemplate'

const index:React.FunctionComponent = () => {
  return (
    <div>
      <MainPageTemplate>
        <AboutUs/>
        <OrganizingCommittee/>
        <EPoster/>
        <SocialLinks/>
      </MainPageTemplate>
    </div>
  )
}

export default index
