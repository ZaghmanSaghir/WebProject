import { initializeApp } from 'firebase/app';



import {
    getAuth,
    signInWithRedirect,
    signInWithGooglePopup,
    GoogleAuthProvider,

    
    createUserDocumentFromAuth} 
    from '../../utils/firebase/firebase.utils'
import { async } from '@firebase/util';
 
import SignUpForm from '../../Components/sign-up-form/sign-up-form.components';
import SignInForm from '../../Components/sign-in-form/sign-in-form.components';

import './authentication.styles.scss'


const Authentication = () =>{
    
     
    return(
        <div className='authentication-container'>
        
        
        <SignInForm/>

        <SignUpForm/>
        

        </div>
    )
}



export default Authentication