import React from 'react'
import Brands from '../Brands/Brands'
import Header from '../Header/Header'
import IndustryOffers from '../IndustryOffers/IndustryOffers'
import LearnMoreSec from '../LearnMoreSec/LearnMoreSec'
import { Helmet } from "react-helmet";
import WorkTogetherPart from '../WorkTogetherPart/WorkTogetherPart'
function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home Page</title>
        <link rel="icon" type="image/png" href='https://t3.ftcdn.net/jpg/02/97/98/40/360_F_297984037_iuijYMhcLkt2nNW8niNbkvvUeOwtU8b3.jpg' sizes="16x16" />
      </Helmet>
      <Header />
      <IndustryOffers />
      <LearnMoreSec />
      <Brands />
      <WorkTogetherPart/>
    </>
  )
}

export default Home