import classes from './Auth.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/authSlice';
import { useState } from 'react';

const Auth = () => {
  const [ params, setParams ] = useState({
    email: "",
    password: ""
  })
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth)

  const loginHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.login())
  }

  const emailHandler = (event) => {
    setParams({
      ...params,
      email: event.target.value
    })
  }
  const passwordHandler = (event) => {
    setParams({
      ...params,
      password: event.target.value
    })
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' value={params.email} onChange={emailHandler} />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' value={params.password} onChange={passwordHandler} />
          </div>
          <button disabled={ !params.email.includes("@") || params.password.length <= 5 }>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
