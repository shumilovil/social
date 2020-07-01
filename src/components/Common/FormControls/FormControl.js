import React from 'react';
import styles from './FormsControl.module.css';

/* const FormControl = ({ meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={styles.formControl + ' ' + (hasError ? styles.error : '')} >
      <div>
        {props.children}
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  )
}

export const Textarea = ({ input, ...props }) => {
  return <FormControl {...props}><textarea {...input} {...props} /></FormControl>
}

export const Input = ({ input, ...props }) => {
  return <FormControl {...props}><input {...input} {...props} /></FormControl>
} */

export const Textarea = ({ meta, input, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={styles.formControl + ' ' + (hasError ? styles.error : '')} >
      <div>
        <textarea {...input} {...props} />
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  )
}

export const Input = ({ meta, input, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={styles.formControl + ' ' + (hasError ? styles.error : '')} >
      <div>
        <input {...input} {...props} />
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  )
}