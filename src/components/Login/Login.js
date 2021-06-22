import firebase from "firebase/app";
import "firebase/auth";
import { useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";
import firebaseConfig from './Firebase.config';


const Login = () => {
    const [loggedinUser, setLoggedinUser] = useContext(UserContext)
    const history = useHistory();
    const location = useLocation();
    const {from}= location.state || { from: { pathname: "/" } }
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                var credential = result.credential;
                var token = credential.accessToken;
                var {displayName, email} = result.user;
                const singedinUser = {name: displayName, email}
                setLoggedinUser(singedinUser)
                history.replace(from)

                // ...
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
    }
    return (
        <div style={{marginLeft:'20%', marginTop:'20%'}} className="row m-auto text-center">
            <button onClick={handleGoogleSignIn}>Sign in with google</button>
        </div>
    );
};

export default Login;