import styles from "../styles/login.module.css"
import React from 'react'
import Forms from "@/components/Forms/Forms"
import Modal from "react-modal"
function Login() {
    return (
        <div className={styles.loginPages}>
            <Forms/>
        </div>
    )
}

export default Login
