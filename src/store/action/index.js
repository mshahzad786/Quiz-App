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


const save_data = () => {
    return (dispatch) => {
        dispatch({
            type: "SETDATA",
            userInput: {
                return(){
                    <input type="text" placeholder="Try this" />
                }
            }
            
        })
        // console.log("save Data...")
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


                alert("user==> mil gaya", user)

              
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
    facebook_login,
    save_data,
}