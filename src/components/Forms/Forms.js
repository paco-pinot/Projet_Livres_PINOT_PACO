import styles from "./forms.module.css"
import { useState } from "react"
export default function Forms() {
  const [log, setlog] = useState( false);
  const [sign, setsign] = useState( false);
    return (
      <>
      {  log ||sign===false?
        <div className={styles.form}>
          <div onClick={()=>{setlog(!log)}} className={styles.login}> <button className={styles.btn}>Login</button> </div>
          <div  onClick={()=>{setsign(!sign)}} className={styles.signUp}><button className={styles.btn}>Sign Up</button></div>
        </div>

        :
        log===true?

        <div className={styles.loginContainerr}>
          log
        </div>
        :
        sign===true?
        <div className={styles.signContainer}>
        <div class="signup-box">
      <h1>Sign Up</h1>
      <h4>It's free and only takes a minute</h4>
      <form>
        <label>First Name</label>
        <input type="text" placeholder="First name" />
        <label>Last Name</label>
        <input type="text" placeholder="Last name" />
        <label>Email</label>
        <input type="email" placeholder="Email" />
        <label>Password</label>
        <input type="password" placeholder="Password" />
        <label>Confirm Password</label>
        <input type="password" placeholder="Password" />
        <input type="button" value="Submit" />
      </form>
      <p>
        By clicking the Sign Up button,you agree to our <br />
        <a href="#">Terms and Condition</a> and <a href="#">Policy Privacy</a>
      </p>
    </div>
    <p class="para-2">
      Already have an account? <span>Login here</span>
    </p>
        </div>
        :""
      }
      
      </>
    
    )
  }