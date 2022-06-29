import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup';
import Warning from '../public/imgs/icons/warning.png'

const SignUpForm = () => {
    const formik = useFormik({
        initialValues: {
            field: "",
            report: ""
        },
        validationSchema: yup.object({
            field: yup.string().max(15, "Must be 30 characters or less").required("Please specify the field of the medical report."), 
            report: yup.string().max(20, "Must be 500 characters or less").required("Please provide details of the results.")
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2))
        }
    })
  return (


      <main className='container-fluid  pb-3'>
     
          <div className="container bg-light pb-5 border rounded-3">
          <div className="row justify-content-center mt-5">

         
      <form  className='col-10 col-sm-8 col-md-6 lg-4' onSubmit={formik.handleSubmit}>
          
          <label className='form-label lh-1 fw-bold' htmlFor="field">Field </label>
          <input className=' form-control' id='field' type="field" name='field' {...formik.getFieldProps("field")}/>  
           {formik.touched.field && formik.errors.field && 
            <div className="alert alert-danger d-flex align-items-center m-2" role="alert">
            <img className='img-fluid ' src={Warning} width='30' height='30' alt="Warning"/>
            <div className='ms-2'>
            {formik.errors.field}
            </div>
            </div>}

          <label className='lh-1 fw-bold mt-4 form-label' htmlFor="report">Report </label>
          <textarea className='form-control' id='report' type="report" name='report' rows="3" {...formik.getFieldProps("report")} />
          {formik.touched.report && formik.errors.report &&
           <div className="alert alert-danger d-flex align-items-center m-2" role="alert">
           <img className='img-fluid ' src={Warning} width='30' height='30' alt="Warning"/>
           <div className='ms-2'>
           {formik.errors.report}
           </div>
           </div>}
        
        <div class="mb-3">
        <label for="formFileSm" className="mt-4 form-label">You may include an Image of the Report</label>
        <input className="form-control form-control-sm" id="formFileSm" type="file"/>
        </div>
       
        
        
        <input className='formbtn color-9 form-btn rounded- btn btn-primary' type='submit' />
      
      </form>
    
    </div>
    </div>
    </main>
  )
}

export default SignUpForm