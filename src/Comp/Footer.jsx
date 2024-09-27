import React from 'react'
function Footer() {
  return (
    <>
    <footer className='text-bg-dark text-white py-9 mm'>
      <div className='container'>
        <div className="row">
          <div className="col-lg-4">
          <img src="image/logo.png.webp" alt="" />
          <div className='py-5 fw-semibold text-secondary'>
          <h4 className='py-1'>contact@youremail.com</h4>
          <h4 className='py-1'>+43 5278 2883 884</h4>
          <h4 className='py-1'>www.yoursitename.com</h4>
          </div>
          </div>

        <div class="col-lg-2">
      <h4 className='fs-3 fw-bold'>Politics</h4>
      <ul class="list py-3 fw-semibold text-secondary">
<li className='py-1'><a className='icon-link icon-link-hover' href="#">Business</a></li>
<li className='py-1'><a href="#">Markets</a></li>
<li className='py-1'><a href="#">Tech</a></li>
<li className='py-1'><a href="#">Luxury</a></li>
</ul>
</div>
    
    <div className="col-lg-2">
      <h4 className='fs-3 fw-bold'>Featured</h4>
      <ul class="list py-3 fw-semibold text-secondary">
<li className='py-1'><a href="#">Football</a></li>
<li className='py-1'><a href="#">Golf</a></li>
<li className='py-1'><a href="#">Tennis</a></li>
<li className='py-1'><a href="#">Motorsport</a></li>
<li className='py-1'><a href="#">Horseracing</a></li>
<li className='py-1'><a href="#">Equestrian</a></li>
<li className='py-1'><a href="#">Sailing</a></li>
<li className='py-1'><a href="#">Skiing</a></li>
</ul>
    </div>

    <div className="col-lg-2">
      <h4 className='fs-3 fw-bold'>FAQ</h4>
      <ul class="list py-3 fw-semibold text-secondary">
<li className='py-1'><a href="#">Aviation</a></li>
<li className='py-1'><a href="#">Business</a></li>
<li className='py-1'><a href="#">Traveller</a></li>
<li className='py-1'><a href="#">Destinations</a></li>
<li className='py-1'><a href="#">Features</a></li>
<li className='py-1'><a href="#">Food/Drink</a></li>
<li className='py-1'><a href="#">Hotels</a></li>
<li className='py-1'><a href="#">Partner Hotels</a></li>
</ul>
    </div>

    <div className="col-lg-2">
      <h4 className='fs-3 fw-bold'>+More</h4>
      <ul class="list py-3 fw-semibold text-secondary">
<li className='py-1'><a href="#">Fashion</a></li>
<li className='py-1'><a href="#">Design</a></li>
<li className='py-1'><a href="#">Architecture</a></li>
<li className='py-1'><a href="#">Arts</a></li>
<li className='py-1'><a href="#">Autos</a></li>
<li className='py-1'><a href="#">Luxury</a></li>
</ul>
  </div>
      </div>
      <div className='text-white-50 justify-content-center py-3'>Copyright ©2024 All rights reserved | This Template is made with by Milan <span className='text-danger'>Kumar</span> Sah</div>
        </div>
    </footer>
    
    </>
  )
}

export default Footer
