import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import { UserContext } from '../../App';
const PrivateRoute = ({ children, ...rest }) => {
    const [loggedinUser, setLoggedinUser] = useContext(UserContext)
    return (
        <div>
            <Route
                {...rest}
      render={({ location }) =>
              loggedinUser.email ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
                }
            />
        </div>
    );
};

export default PrivateRoute;