import React from 'react'
import Nav from './Nav'
import { Title } from './Title'

export const MainPageLayout = ({children}) => {
   return (
      <div className="App">
          <Title title="BOX-OFFICE" subtitle="Are you looking for a movies or actor?"/>
      <Nav/>
      {children}
    </div>
   )
}
// export default MainPageLayout;
