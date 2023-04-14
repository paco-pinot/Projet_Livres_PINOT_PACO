import styles from "./forms.module.css"
import { useState } from "react"
export default function Forms() {
  const [log, setlog] = useState( false);
  const [sign, setsign] = useState( false);
    return (
      <>
      {  log && sign===false?
        <div className={styles.form}>
          <div className={styles.login}> <button onClick={()=>{setlog(true)}}  className={styles.btn}>Login</button> </div>
          <div  className={styles.signUp}><button  onClick={()=>{setsign(true)}} className={styles.btn}>Sign Up</button></div>
        </div>

        :
        log===true?

        <div className={styles.loginContainerr}>
          logggggggggggggggggggggggggggg
        </div>
        :
        sign===true?
        <div className={styles.signContainer}>
        <div class="signup-box">
      <h1>Sign Up</h1>
      <h4>It's free and only takes a minute</h4>
      <div className={styles.formContainer}>
      <form>
      <div className={styles.formItems}>
        <label>First Name</label>
        <input type="text" placeholder="First name" />
      </div>
        <div className={styles.formItems}>
          <label>Last Name</label>
          <input type="text" placeholder="Last name" />
        </div>
        <div className={styles.formItems}>
          <label>Email</label>
          <input type="email" placeholder="Email" />
        </div>
        <div className={styles.formItems}>
          <label>Password</label>
          <input type="password" placeholder="Password" />
        </div>
        <div className={styles.formItems}>
          <label>Confirm Password</label>
          <input type="password" placeholder="Password" />
        </div>
          <div className={styles.formItems}>
          <input type="button" value="Submit" />
        </div>
      </form>
      </div>
      <p>
        By clicking the Sign Up button,you agree to our <br />
        <a href="#">Terms and Condition</a> and <a href="#">Policy Privacy</a>
      </p>
    </div>
    <p class="para-2">
      Already have an account? <span  onClick={()=>{}}>Login here</span>
    </p>
        </div>
        : <div>erreur</div>
      }
      
      </>
    
    )
  }