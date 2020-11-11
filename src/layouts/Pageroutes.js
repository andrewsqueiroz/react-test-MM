import React from 'react'
import { Route } from 'react-router-dom'

import Page from './Page'

const PageRoutes = ({ component: Component, ...rest }) => {
    return (
        <Route  {...rest} render={props => (
            <Page>
                <Component {...props} />
            </Page>
        )} />
    )
}

export default PageRoutes