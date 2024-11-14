import {GithubAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import {GoogleAuthProvider } from "firebase/auth";

import auth from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
    const [user, setUser]= useState(null);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider= new GithubAuthProvider();

const handleGoogleSignin=()=>{
    signInWithPopup(auth, googleProvider)
    .then((result) => {
    console.log(result.user);
    setUser(result.user)
  })
  .catch(error=>{
    console.log(error);
  })
}

const handleLogout=()=>{
    signOut(auth).then(() => {
        alert('Signout');
        setUser(null)
      }).catch((error) => {
        console.log(error);
      });
}

const handleGithubSignin=()=>{
signInWithPopup(auth, githubProvider)
.then(result=>{
    console.log(result);
    setUser(result.user)
})
.catch(error=>{
    console.log(error);
}
)
}

    return (
        <div>
          {user ?  <button onClick={handleLogout}><h2>Log Out</h2></button>:<div>
          <button onClick={handleGoogleSignin}><h2>Login With Google</h2></button>
          <button onClick={handleGithubSignin}><h2>Login With GitHub</h2></button>
            </div>}
            {
                user && <div>
                    <h2>User: {user.displayName}</h2>
                    <img src={user.photoURL} alt= {user.photoURL} />
                </div>
            }
        </div>
    );
};

export default Login;