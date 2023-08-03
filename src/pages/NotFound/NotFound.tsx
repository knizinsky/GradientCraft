import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='container mt-5 pt-5 d-flex justify-content-center align-items-center w-100' style={{height: 'calc(100vh - 139px)'}}>
        <div className="text-center mb-5 pb-5">
                <h1 className="display-1 fw-bold">404</h1>
                <p className="fs-3"> <span className="text-danger">Opps!</span> Page not found.</p>
                <p className="lead">
                    The page you’re looking for doesn’t exist.
                  </p>
                <Link to="/" className="btn btn-dark">Go Home</Link>
            </div>
    </div>
  )
}

export default NotFound