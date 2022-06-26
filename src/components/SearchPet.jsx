import React from 'react'
import HeaderImage from '../public/imgs/searchpet/searchpet.png'
import Delete from '../public/imgs/icons/delete.png'
import Add from '../public/imgs/icons/add.png'
import Edit from '../public/imgs/icons/edit.png'

export const SearchPet = () => {
  return (
    <>


<div className="container">

    <div className="py-5 text-center">
      <img className="d-block mx-auto mb-4" src={HeaderImage} alt="" width="290" height="250"/>
      <h2 className="lh-1 3">Your Pets</h2>
      <p className="lead">Search your Pets by the number ID we had provided you.</p>
    </div>
</div>

<header className="py-3 mb-3 border-bottom">
    <div className="container-fluid d-grid gap-3 align-items-center" sx={{ gridTemplateColumns: '1fr 2fr' }} >
     

      <div className="d-flex align-items-center">
        <form className="w-100 me-3" role="search">
          <input type="search" className="form-control" placeholder="Search..." aria-label="Search"/>
        </form>

        <div className="flex-shrink-0">
        <button type="button" className="homebtn btn btn-primary btn-sm px-4 gap-3">Search</button>
        </div>
      </div>
    </div>
  </header>

  <div className="container-fluid pb-3">
   
      
      <div className="container bg-light border rounded-3">
    <div className="row text-center justify-content-center">

{/* start of card */}

    <div className="col-xl-3 col-sm-6 m-5">
            <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://images.theconversation.com/files/466154/original/file-20220531-26-v4usft.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop" alt="" width="200" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                <h5 className="mb-0">Pet Name</h5><span className="small text-uppercase text-muted">Pet ID</span>
                <ul className="social mb-0 list-inline mt-3">
                    <li className="list-inline-item"><a href="#" className="social-link"><img src={Edit} alt="" width="50" height="50" className="img-fluid "/></a></li>
                    <li className="list-inline-item"><a href="#" className="social-link"><img src={Add} alt="" width="50" height="50" className="img-fluid "/></a></li>
                    <li className="list-inline-item"><a href="#" className="social-link"><img src={Delete} alt="" width="50" height="50" className="img-fluid "/></a></li>
                </ul>
            </div>
    </div>

{/* end of card */}

    <div className="col-xl-3 col-sm-6 m-5">
            <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://styles.redditmedia.com/t5_2r5i1/styles/communityIcon_x4lqmqzu1hi81.jpg" alt="" width="200" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                <h5 className="mb-0">Pet Name</h5><span className="small text-uppercase text-muted">Pet ID</span>
                <ul className="social mb-0 list-inline mt-3">
                    <li className="list-inline-item"><a href="#" className="social-link"><img src={Edit} alt="" width="50" height="50" className="img-fluid "/></a></li>
                    <li className="list-inline-item"><a href="#" className="social-link"><img src={Add} alt="" width="50" height="50" className="img-fluid "/></a></li>
                    <li className="list-inline-item"><a href="#" className="social-link"><img src={Delete} alt="" width="50" height="50" className="img-fluid "/></a></li>
                </ul>
            </div>
        </div>
       
        <div className="col-xl-3 col-sm-6 m-5">
            <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://static.toiimg.com/photo/89246774.cms" alt="" width="200" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                <h5 className="mb-0">Pet Name</h5><span className="small text-uppercase text-muted">Pet ID</span>
                <ul className="social mb-0 list-inline mt-3">
                    <li className="list-inline-item"><a href="#" className="social-link"><img src={Edit} alt="" width="50" height="50" className="img-fluid "/></a></li>
                    <li className="list-inline-item"><a href="#" className="social-link"><img src={Add} alt="" width="50" height="50" className="img-fluid "/></a></li>
                    <li className="list-inline-item"><a href="#" className="social-link"><img src={Delete} alt="" width="50" height="50" className="img-fluid "/></a></li>
                </ul>
            </div>
        </div>
       
        <div className="col-xl-3 col-sm-6 m-5">
            <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg" alt="" width="200" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                <h5 className="mb-0">Pet Name</h5><span className="small text-uppercase text-muted">Pet ID</span>
                <ul className="social mb-0 list-inline mt-3">
                    <li className="list-inline-item"><a href="#" className="social-link"><img src={Edit} alt="" width="50" height="50" className="img-fluid "/></a></li>
                    <li className="list-inline-item"><a href="#" className="social-link"><img src={Add} alt="" width="50" height="50" className="img-fluid "/></a></li>
                    <li className="list-inline-item"><a href="#" className="social-link"><img src={Delete} alt="" width="50" height="50" className="img-fluid "/></a></li>
                </ul>
            </div>
        </div>

        <div className="col-xl-3 col-sm-6 m-5">
            <div className="bg-white rounded shadow-sm py-5 px-4"><img src="data:image/jpeg;base64,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" alt="" width="200" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                <h5 className="mb-0">Pet Name</h5><span className="small text-uppercase text-muted">Pet ID</span>
                <ul className="social mb-0 list-inline mt-3">
                    <li className="list-inline-item"><a href="#" className="social-link"><img src={Edit} alt="" width="50" height="50" className="img-fluid "/></a></li>
                    <li className="list-inline-item"><a href="#" className="social-link"><img src={Add} alt="" width="50" height="50" className="img-fluid "/></a></li>
                    <li className="list-inline-item"><a href="#" className="social-link"><img src={Delete} alt="" width="50" height="50" className="img-fluid "/></a></li>
                </ul>
            </div>
        </div>

        <div className="col-xl-3 col-sm-6 m-5">
            <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://media.npr.org/assets/img/2021/04/27/prancer_wide-db59609b5bd96c9e56e4dfe32d198461197880c2.jpg?s=1400" alt="" width="200" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                <h5 className="mb-0">Pet Name</h5><span className="small text-uppercase text-muted">Pet ID</span>
                <ul className="social mb-0 list-inline mt-3">
                    <li className="list-inline-item"><a href="#" className="social-link"><img src={Edit} alt="" width="50" height="50" className="img-fluid "/></a></li>
                    <li className="list-inline-item"><a href="#" className="social-link"><img src={Add} alt="" width="50" height="50" className="img-fluid "/></a></li>
                    <li className="list-inline-item"><a href="#" className="social-link"><img src={Delete} alt="" width="50" height="50" className="img-fluid "/></a></li>
                </ul>
            </div>
        </div>

        </div>
        </div>
      </div>
      <div className="bg-light border rounded-3">
       
      </div>
    
 

    </>
  )
}
