import react, { useState } from "react";
import styles from "./LoginForm.module.css"

//In the LoginForm component you must create form, label, and input elements for the username and the password fields, below which a submit button must be placed
const LoginForm =()=>{

const  [username, setUsername] = useState('');
const  [password, setPassword] = useState('');

return (
    <form className={styles.form}>
        <label className={styles.label}>Username 
            <input 
            className={styles.input}
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange= {(e)=> setUsername(e.target.value)}
            />
            </label>
        <label className={styles.label}>Password
            <input 
            className={styles.input}
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange= {(e)=> setPassword(e.target.value)}
            />
        </label>
        <button className={styles.submit} type="submit">Submit</button>
        {/* <input  type="submit" value="Submit" /> */}
    </form>
);
}

export default LoginForm;