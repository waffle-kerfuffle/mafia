import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { validate } from './validate';
import styles from "../../css/SignUp.module.css";

export const SignUp = () => {

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        isAccepted: false
    });
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    useEffect(() => {
        setErrors(validate(data, "signup"))
    }, [data, touched])

    const changeHandler = event => {
        if (event.target.name === "isAccepted") {
            setData({ ...data, [event.target.name]: event.target.checked })
        } else {
            setData({ ...data, [event.target.name]: event.target.value })
        }
    }

    const onKeyPressHanlder = event => {
        setTouched({ ...touched, [event.target.name]: true })
    }

    const submitHandler = event => {
        event.preventDefault();
        if (!Object.keys(errors).length) {
          //  notify("", "")
        } else {
         //   notify("", "")
            setTouched({
                name: true,
                email: true,
                password: true,
                confirmPassword: true,
                isAccepted: true
            })
        }
    }

    return (
        <div className={styles.SignUpcontainer}>
            <form onSubmit={submitHandler} className={styles.formContainer}>
                <h2 className={styles.header}>ثبت نام</h2>
                <div className={styles.formField}>
                    <label>نام و نام خانوادگی</label>
                    <input
                        className={(errors.name && touched.name) ? styles.uncompleted : styles.formInput}
                        type="text"
                        name="name"
                        value={data.name}
                        onChange={changeHandler}
                        onKeyPress={onKeyPressHanlder}
                    />
                    {errors.name && touched.name && <span>{errors.name}</span>}
                </div>
                <div className={styles.formField}>
                    <label>ایمیل</label>
                    <input
                        className={(errors.email && touched.email) ? styles.uncompleted : styles.formInput}
                        type="text"
                        name="email"
                        value={data.email}
                        onChange={changeHandler}
                        onKeyPress={onKeyPressHanlder} />
                    {errors.email && touched.email && <span>{errors.email}</span>}
                </div>
                <div className={styles.formField}>
                    <label>رمز عبور</label>
                    <input
                        className={(errors.password && touched.password) ? styles.uncompleted : styles.formInput}
                        type="password" name="password"
                        value={data.password}
                        onChange={changeHandler}
                        onKeyPress={onKeyPressHanlder} />
                    {errors.password && touched.password && <span>{errors.password}</span>}
                </div>
                <div className={styles.formField}>
                    <label>تکرار رمز عبور</label>
                    <input
                        className={(errors.confirmPassword && touched.confirmPassword) ? styles.uncompleted : styles.formInput}
                        type="password"
                        name="confirmPassword"
                        value={data.confirmPassword}
                        onChange={changeHandler}
                        onKeyPress={onKeyPressHanlder} />
                    {errors.confirmPassword && touched.confirmPassword && <span>{errors.confirmPassword}</span>}
                </div>
                <div className={styles.formField}>
                    <div className={styles.checkBoxContainer}>
                        <input
                            type="checkbox"
                            name="isAccepted"
                            value={data.isAccepted}
                            onChange={changeHandler}
                            onKeyPress={onKeyPressHanlder} />
                            <label>قوانین را می پذیرم</label>
                    </div>
                    {errors.isAccepted && touched.isAccepted && <span>{errors.isAccepted}</span>}
                </div>
                <div className={styles.formButtons}>
                    <Link to="/login">ورود</Link>
                    <button type="submit">ثبت نام</button>
                </div>
            </form>
           
        </div>
    );
};

