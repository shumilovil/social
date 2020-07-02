import React from 'react';
import { Field, reduxForm } from "redux-form";
import { Input } from '../Common/FormControls/FormControl';
import { required } from '../../utils/validators/validator';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import styles from '../Common/FormControls/FormsControl.module.css'

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"Email"}
          name={"email"}
          component={Input}
          validate={[required]} />
      </div>
      <div>
        <Field placeholder={"Password"}
          name={"password"}
          component={Input}
          validate={[required]}
          type={"password"} />
      </div>
      <div>
        <Field component={"input"}
          name={"rememberMe"}
          type={"checkbox"} />
        remember me
    </div>
      {props.captchaUrl && <img src={props.captchaUrl} alt='' />}
      {props.captchaUrl && <Field placeholder={"Symbols from image"} name={"captcha"} component={Input} validate={[required]} />}
      {props.error && <div className={styles.formSummaryError} >{props.error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
  };

  if (props.isAuth) {
    return <Redirect to={'/profile'} />
  };

  return (
    <div className={styles.entireForm} >
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);