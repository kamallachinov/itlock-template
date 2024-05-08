import React from 'react'
import { Helmet } from "react-helmet";
import { Formik } from 'formik';
import * as Yup from 'yup';
import styles from './Create.module.scss'
import axios from 'axios'
function Create() {
  return (
    <>
  <Helmet>
        <meta charSet="utf-8" />
        <title>Add new page</title>
        <link rel="icon" type="image/png" href='https://icon-library.com/images/google-plus-new-icon/google-plus-new-icon-24.jpg' sizes="16x16" />
      </Helmet>
    
      <Formik
       initialValues={{ imgUrl: '', title: '', subTitle: '' }}
       validationSchema={Yup.object({
        imgUrl: Yup.string()
           .min(10, 'Must be minimum 10 caracters or more')
           .required('Required'),
           title: Yup.string()
           .min(10, 'Must be 10 characters or more')
           .required('Required'),
         subTitle:Yup.string().required('Required').max(20, 'Must be 13 characters or less')
       })}
       onSubmit={(values, { setSubmitting ,resetForm}) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
         resetForm()
         const obj = {
          imgUrl:values.imgUrl,
          title:values.title,
          subTitle:values.subTitle
         }
         axios.post("http://localhost:5000/products",obj)
       }}
     >
       {(formik,values) => (
        <div className={styles.formContainer}>
          <h2 className={styles.subTitle}>Create new </h2>
           <form onSubmit={formik.handleSubmit} className={styles.form}>
           <label htmlFor="imgUrl">imgUrl</label>
           <input
             id="imgUrl"
             type="text" placeholder='Type imgUrl...'
             {...formik.getFieldProps('imgUrl')}
           />
           {formik.touched.imgUrl && formik.errors.imgUrl ? (
             <div>{formik.errors.imgUrl}</div>
           ) : null}
 
           <label htmlFor="title">title</label>
           <input
             id="title"
             type="text" placeholder='Type title...'
             {...formik.getFieldProps('title')}
           />
           {formik.touched.title && formik.errors.title ? (
             <div>{formik.errors.title}</div>
           ) : null}
 
           <label htmlFor="subTitle">subTitle</label>
           <input id="subTitle" type="text" placeholder='Type subTitle...' {...formik.getFieldProps('subTitle')} />
           {formik.touched.subTitle && formik.errors.subTitle ? (
             <div>{formik.errors.subTitle}</div>
           ) : null}
 
           <button type="submit" className={styles.btn}>Submit</button>
         </form>
        </div>
       )}
     </Formik>

    </>
  )
}

export default Create