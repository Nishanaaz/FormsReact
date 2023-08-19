import React, { useState } from 'react'
import styles from "./LoginForm.module.css"
import EmailIcon from "@mui/icons-material/Email"
import LockIcon from "@mui/icons-material/Lock"
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { Password } from '@mui/icons-material'

const LoginForm = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword]=useState("")
    const [showPassword,setshowPassword]=useState(true)
    const []

    const handleSubmit=(e)=>{
        e.preventDefault();
        if (password.length<6){
            alert("Password is too short");
            return;
        }
        console.log(email);
        console.log(password);
        setEmail("")
        setPassword("")
    };

  return (
    <>
    

    <form className={styles.form}   onSubmit={handleSubmit}>
        <h1>🔏Login🔏</h1>

        <div className={styles.inputContainer}>
            <EmailIcon className={styles.emailIcon}/>
            <input type="email" 
            placeholder='Enter email...' 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
            />
        </div>

        <div className={styles.inputContainer}>
            <LockIcon className={styles.lockIcon}/>
            <input type={showPassword?"password":"text"}
            placeholder="Enter password..." 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className={styles.passwordInput}
            required
            />

            {

                showPassword? (
                    <VisibilityOffIcon className={styles.VisibilityIcon} onClick={()=>setshowPassword(!showPassword)}/>
                    ):(
                    <VisibilityIcon className={styles.VisibilityIcon}  onClick={()=>setshowPassword(!showPassword)}/> 
                    )
            }
            
        
        </div>
        
        <button type='submit'>Login</button>
    </form>
    
    </>
  )
}

export default LoginForm