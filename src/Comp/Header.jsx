import React from 'react'

function Header() {
  return (
    <>
      <section className='bg-red-600 text-white py-3'>
        <div className="container flex justify-between items-center">
            <img src="image/logo.png.webp" alt="" />
            <div className='flex gap-4 text-sm fw-semibold items-center text-uppercase'>
                <a href="index.html">Login</a>
                <a href="index.html">Register</a>
            <input className='mm justify-start' type="search" name="search" class="form-control" placeholder="Search..."></input></div>
        </div>
      </section>
      
      <section className='container sticky top-0 shadow py-2 border-bottom border-secondary-oppacity-65%"'>
        <nav class="navbar text-secondary">
          <ul class=" gap-10 me-auto mt-2 mt-lg-0 d-flex justify-content-center fw-semibold">
              <li class="nav-item">
                <a class="nav-link active text-black" href="#" aria-current="page">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Pages</a>
              </li>
              <li className="nav-item">
                <a href="nav-link">Mega Menu</a>
              </li>
              <li className="nav-item">
                <a href="nav-link">Politics</a>
              </li>
              <li className="nav-item">
                <a href="nav-link">Breaking News</a>
              </li>
              <li className="nav-item">
                <a href="nav-link">Business</a>
              </li>
              <li className="nav-item">
                <a href="nav-link">Technology</a>
              </li>
              <li className="nav-item">
                <a href="nav-link">Health</a>
              </li>
              <li className="nav-item">
                <a href="nav-link">Travel</a>
              </li>
              <li className="nav-item">
                <a href="nav-link">Sports</a>
              </li>
              <li className="nav-item">
                <a href="nav-link">Contact</a>
              </li>
            </ul>
        </nav>
      </section>

    </>
  )
}
export default Header
