import React from 'react';
import { Input, Textarea } from '../../Common/FormControls/FormControl';
import { Field, reduxForm } from 'redux-form';
import styles from './ProfileInfo.module.css';
import styles_form from '../../Common/FormControls/FormsControl.module.css'


const ProfileDataForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} >
      {props.error && <div className={styles_form.formSummaryError} >{props.error}</div>}
      
      <div>
        <b>Full name</b>:
        <Field placeholder="Full name"
          name="fullName"
          component={Input} />
      </div>
      <div>
        <b>Looking for a job</b>:
        <Field name="lookingForAJob"
          component='input'
          type='checkbox' />
      </div>

      <div>
        <b>My professional skills</b>:
        <Field placeholder="My professional skills"
          name="lookingForAJobDescription"
          component={Textarea} />
      </div>

      <div>
        <b>About me</b>:
        <Field placeholder="About me"
          name="aboutMe"
          component={Textarea} />

      </div>
      <div>
        <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
          return (
            <div key={key} className={styles.contacts}>
              <b>{key}</b>:
              <Field placeholder={key}
                name={'contacts.' + key}
                component={Input} />
            </div>
          )
        })}
      </div>
      <br/>
      <div><button>save</button></div>
    </form>
  )
}

const ProfileDataFormReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm)

export default ProfileDataFormReduxForm