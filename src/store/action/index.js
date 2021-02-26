import Firebase from '../../config/firebase'
import firebase from 'firebase'


const set_data = () => {
    return (dispatch) => {
        dispatch({
            type: "SETDATA",
            user: { name: "faraz", email: "faraz@gmail.com" }
        })
        console.log("Running...")
    }
}

const facebook_login = () => {
    console.log("Facebook login===>")
    return (dispatch) => {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
                var credential = result.credential;
                var user = result.user;

                console.log("user==> mil gaya")

                var accessToken = credential.accessToken;

               
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                
                console.log(errorMessage)

                
            });

    }

}

export {
    set_data,
    facebook_login
}