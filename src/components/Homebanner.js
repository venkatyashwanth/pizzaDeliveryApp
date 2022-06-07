import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Homenewsletter from './Homenewsletter';
import { Link } from 'react-router-dom';

export default function Homebanner() {
  return (
    <>
      <div className='container bg-light d-flex justify-content-between align-items-center p-3'>
        <div>
          <Link to="/">
            <img src="./images/pizza.png" alt="logo" width="100" />
          </Link>
        </div>
        <div>
          <Link className='btn btn-outline-secondary me-2' to="/signup">Sign Up</Link>
          <Link className='btn btn-outline-secondary me-2' to="/login">Login</Link>
        </div>
      </div>
    </>
  )
}
