import React, { useState, useEffect, useRef } from 'react';
import { Link ,useHistory } from 'react-router-dom';

import { validate } from './validate';
import styles from '../../css/SignUp.module.css';
import axious from 'axios';

export const Login = () => {
  const userNam = useRef();
  const pass = useRef();

  const [data, setData] = useState({
    email: '',
    password: '',
    isRemembered: false,
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validate(data, 'login'));
  }, [data, touched]);

  const changeHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const onKeyPressHanlder = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
      const apiurl = `https://apitester.ir/api/Users/authenticate?userName=${userNam.current.value}&password=${pass.current.value}`;
      axious.get(apiurl).then((response) => {
        if (response.status == 200) {
          localStorage.setItem('user', JSON.stringify(response.data));
          localStorage.setItem('user',response.data.token);
          alert('نام کاربری یارمز عبورصحیح است')
        }else{alert('نام کاربری یارمز عبورصحیح نیست')}
      });
    } else {
      // notify("", "")
      setTouched({
        email: true,
        password: true,
        isRemembered: true,
      });
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler} className={styles.formContainer}>
        <h2 className={styles.header}>ورود</h2>
        <div className={styles.formField}>
          <label>ایمیل</label>
          <input
            className={
              errors.email && touched.email
                ? styles.uncompleted
                : styles.formInput
            }
            type="text"
            ref={userNam}
            name="email"
            value={data.email}
            onChange={changeHandler}
            onKeyPress={onKeyPressHanlder}
          />
          {errors.email && touched.email && <span>{errors.email}</span>}
        </div>
        <div className={styles.formField}>
          <label>رمز عبور</label>
          <input
            className={
              errors.password && touched.password
                ? styles.uncompleted
                : styles.formInput
            }
            type="password"
            name="password"
            value={data.password}
            ref={pass}
            onChange={changeHandler}
            onKeyPress={onKeyPressHanlder}
          />
          {errors.password && touched.password && (
            <span>{errors.password}</span>
          )}
        </div>
        <div className={styles.formField}>
          <div className={styles.checkBoxContainer}>
            <input
              type="checkbox"
              name="isRemembered"
              value={data.isAccepted}
              onChange={changeHandler}
              onKeyPress={onKeyPressHanlder}
            />
            <label>مرا به خاطر بسپار</label>
          </div>
          {errors.isAccepted && touched.isAccepted && (
            <span>{errors.isAccepted}</span>
          )}
        </div>
        <div className={styles.formButtons}>
          <Link to="/signup">ثبت نام</Link>
          <button type="submit">ورود</button>
        </div>
      </form>
    </div>
  );
};
