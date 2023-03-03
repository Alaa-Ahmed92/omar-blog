import { React, useState } from 'react'
import axios from 'axios';
import { Form } from 'react-bootstrap'
import { useRouter } from 'next/router'
import { BsEnvelope, BsShieldLock } from 'react-icons/bs'

import styles from './../../styles/pages/Login.module.css'

const LoginPage = () => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(null);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`http://localhost:3000/api/login`, {
                email,
                password
            });
            router.push('/admin')
        } catch (error) {
            setError(error.message);
            console.log(error.response && error.response.data);
        }
    }

    return (
        <div className={styles.loginPanel}>
            <div className={`${styles.loginPanelContainer} container`}>
                <div className={styles.formWrapper}>
                    <h4>OMAR</h4>
                    <Form onSubmit={handleSubmit} className={styles.formBlock}>
                        <Form.Group className={`${styles.inputGroup} mb-4`} controlId="formBasicEmail">
                            <BsEnvelope />
                            <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="E-Mail Address" />
                        </Form.Group>

                        <Form.Group className={`${styles.inputGroup} mb-4`} controlId="formBasicPassword">
                            <BsShieldLock />
                            <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                        </Form.Group>
                        {error && <span>{error}</span>}
                        <Form.Group className={`${styles.inputGroup}`} controlId="formBasicPassword">
                            <button type='submit' className={styles.loginButton}>Login</button>
                        </Form.Group>
                    </Form>
                </div>
                <div className={styles.formIcon}><BsShieldLock /></div>
            </div>
        </div>
    )
}

export default LoginPage