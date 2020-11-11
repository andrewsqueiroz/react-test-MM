import React from 'react'
import { Route } from 'react-router-dom'

import Default from './Default'

const DefaultRoutes = ({ component: Component, ...rest }) => {
    return (
        <Route  {...rest} render={props => (
            <Default>
                <Component {...props} />
            </Default>
        )} />
    )
}

export default DefaultRoutes