import React from 'react'
import HeaderImage from '../public/imgs/mr/mr.png'
import Delete from '../public/imgs/icons/delete.png'
import Download from '../public/imgs/icons/download.png'
import Edit from '../public/imgs/icons/edit.png'
import AddMr from './AddMr'
export const SearchMr = () => {
  return (
<>
<div className="container">

    <div className="py-5 text-center">
      <img className="d-block mx-auto mb-4" src={HeaderImage} alt="" width="290" height="330"/>
      <h2 className="lh-1">MEDICAL RECORDS</h2>
      <p className="lead">Here you can Add and Search for the Records of your Pet.</p>
    <button class="btn-hover color-9">Add Record</button>
    <button class="btn-hover color-9">Search Record</button>
    </div>

</div>

<AddMr/>

  <div className="container-fluid pb-3">
   
       <header className="py-3 mb-3 border-bottom">
    <div className="container-fluid d-grid gap-3 align-items-center" sx={{ gridTemplateColumns: '1fr 2fr' }} >
     
      <div className="d-flex align-items-center">
        <form className="w-100 me-3" role="search">
          <input type="search" className="form-control" placeholder="Medical Record ID..." aria-label="Search"/>
        </form>

        <div className="flex-shrink-0">
        <button type="button" className="formbtn color-9 btn btn-primary btn-sm px-4 rounded- gap-3">Search</button>
        </div>
      </div>
    </div>
  </header>

      <div className="container mt-5 bg-light border rounded-3">
    <div className="row text-center justify-content-center">
<h4 className='m-4 fw-bold lh-1'>Medical Records Search results:</h4>
{/* start of card */}
    <div className="col-xl-3 col-sm-6 m-5">
            <div className="bg-primary cards bg-opacity-10 rounded  py-5 px-4">
                <h5 className=" text-primary fw-bold">Laboratory</h5><span className="text-uppercase text-muted">record id</span><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur optio nihil, iure expedita dolorum debitis, voluptatem sed quia consequuntur voluptates labore possimus vitae commodi omnis nostrum fuga, odit accusantium neque?</p>
                <ul className="social mb-0 list-inline mt-3">
                    <li className="list-inline-item"><a href="#" className="social-link"><img src={Edit} alt="" width="50" height="50" className="img-fluid "/></a></li>
                    <li className="list-inline-item"><a href="#" className="social-link"><img src={Download} alt="" width="50" height="50" className="img-fluid "/></a></li>
                    <li className="list-inline-item"><a href="#" className="social-link"><img src={Delete} alt="" width="50" height="50" className="img-fluid "/></a></li>
                </ul>
            </div>
    </div>
{/* end of card */}

<div className="col-xl-3 col-sm-6 m-5">
            <div className="bg-primary cards bg-opacity-10 rounded  py-5 px-4">
                <h5 className=" text-primary fw-bold">Laboratory</h5><span className="text-uppercase text-muted">record id</span><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur optio nihil, iure expedita dolorum debitis, voluptatem sed quia consequuntur voluptates labore possimus vitae commodi omnis nostrum fuga, odit accusantium neque?</p>
                <ul className="social mb-0 list-inline mt-3">
                    <li className="list-inline-item"><a href="#" className="social-link"><img src={Edit} alt="" width="50" height="50" className="img-fluid "/></a></li>
                    <li className="list-inline-item"><a href="#" className="social-link"><img src={Download} alt="" width="50" height="50" className="img-fluid "/></a></li>
                    <li className="list-inline-item"><a href="#" className="social-link"><img src={Delete} alt="" width="50" height="50" className="img-fluid "/></a></li>
                </ul>
            </div>
    </div>
       
    <div className="col-xl-3 col-sm-6 m-5">
            <div className="bg-primary cards bg-opacity-10 rounded  py-5 px-4">
                <h5 className=" text-primary fw-bold">Laboratory</h5><span className="text-uppercase text-muted">record id</span><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur optio nihil, iure expedita dolorum debitis, voluptatem sed quia consequuntur voluptates labore possimus vitae commodi omnis nostrum fuga, odit accusantium neque?</p>
                <ul className="social mb-0 list-inline mt-3">
                    <li className="list-inline-item"><a href="#" className="social-link"><img src={Edit} alt="" width="50" height="50" className="img-fluid "/></a></li>
                    <li className="list-inline-item"><a href="#" className="social-link"><img src={Download} alt="" width="50" height="50" className="img-fluid "/></a></li>
                    <li className="list-inline-item"><a href="#" className="social-link"><img src={Delete} alt="" width="50" height="50" className="img-fluid "/></a></li>
                </ul>
            </div>
    </div>
       
    <div className="col-xl-3 col-sm-6 m-5">
            <div className="bg-primary cards bg-opacity-10 rounded  py-5 px-4">
                <h5 className=" text-primary fw-bold">Laboratory</h5><span className="text-uppercase text-muted">record id</span><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur optio nihil, iure expedita dolorum debitis, voluptatem sed quia consequuntur voluptates labore possimus vitae commodi omnis nostrum fuga, odit accusantium neque?</p>
                <ul className="social mb-0 list-inline mt-3">
                    <li className="list-inline-item"><a href="#" className="social-link"><img src={Edit} alt="" width="50" height="50" className="img-fluid "/></a></li>
                    <li className="list-inline-item"><a href="#" className="social-link"><img src={Download} alt="" width="50" height="50" className="img-fluid "/></a></li>
                    <li className="list-inline-item"><a href="#" className="social-link"><img src={Delete} alt="" width="50" height="50" className="img-fluid "/></a></li>
                </ul>
            </div>
    </div>

    <div className="col-xl-3 col-sm-6 m-5">
            <div className="bg-primary cards bg-opacity-10 rounded  py-5 px-4">
                <h5 className=" text-primary fw-bold">Laboratory</h5><span className="text-uppercase text-muted">record id</span><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur optio nihil, iure expedita dolorum debitis, voluptatem sed quia consequuntur voluptates labore possimus vitae commodi omnis nostrum fuga, odit accusantium neque?</p>
                <ul className="social mb-0 list-inline mt-3">
                    <li className="list-inline-item"><a href="#" className="social-link"><img src={Edit} alt="" width="50" height="50" className="img-fluid "/></a></li>
                    <li className="list-inline-item"><a href="#" className="social-link"><img src={Download} alt="" width="50" height="50" className="img-fluid "/></a></li>
                    <li className="list-inline-item"><a href="#" className="social-link"><img src={Delete} alt="" width="50" height="50" className="img-fluid "/></a></li>
                </ul>
            </div>
    </div>

    <div className="col-xl-3 col-sm-6 m-5">
            <div className="bg-primary cards bg-opacity-10 rounded  py-5 px-4">
                <h5 className=" text-primary fw-bold">Laboratory</h5><span className="text-uppercase text-muted">record id</span><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur optio nihil, iure expedita dolorum debitis, voluptatem sed quia consequuntur voluptates labore possimus vitae commodi omnis nostrum fuga, odit accusantium neque?</p>
                <ul className="social mb-0 list-inline mt-3">
                    <li className="list-inline-item"><a href="#" className="social-link"><img src={Edit} alt="" width="50" height="50" className="img-fluid "/></a></li>
                    <li className="list-inline-item"><a href="#" className="social-link"><img src={Download} alt="" width="50" height="50" className="img-fluid "/></a></li>
                    <li className="list-inline-item"><a href="#" className="social-link"><img src={Delete} alt="" width="50" height="50" className="img-fluid "/></a></li>
                </ul>
            </div>
    </div>

        </div>
        </div>
      </div>
</>
  )
}
