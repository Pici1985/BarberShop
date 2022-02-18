class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
   

    <nav class="nav navbar-expand-lg navbar-light navbar justify-content-end ">
        
    <a class="navbar-brand" aria-current="page" href="../home/index.html"><img src="../assets/img/global/logo.svg" alt="" width="40" height="30" ></a>
    
        <ul class="navbar-nav nav ">
            <li class="nav-item "><a class="nav-link active" aria-current="page" href="../aboutUs/aboutus.html">About us</a></li>
            <li class="nav-item"><a class="nav-link active" aria-current="page" href="../gallery/gallery.html">Gallery</a></li>
            <li class="nav-item"><a class="nav-link active" aria-current="page" href="../pricelist/pricelist.html">Price list</a></li>
            <li class="nav-item"><a class="nav-link active" aria-current="page" href="../openingtime/openingtime.html">Opening times</a></li>
            <li class="nav-item"><a class="nav-link active"  aria-current="page" href="../bookings/bookings.html">Booking</a></li>
        </ul>
    
</nav>




    <picture>
        <img src="../assets/img/global/brandPicture.jpg" alt="BrandPicture" class="brandPicture">
    </picture>
    <p class="solgen">It's your<br>time to shine</p>
    <svg>
        <img src="../assets/img/global/logo.svg" alt="logo" class="logo animate__animated animate__flip animate__delay-1s" id="logo">
    </svg>
    `
  }
}
customElements.define('my-header', MyHeader);

class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div>
        <div class="createdBy">
          <h3>created by: </h3>
          <a href="">Brigi</a>
          <a href="">Rita</a>
          <a href="">Balazs</a>
        </div>  
      </div>

      <div class="copyright">
        <p>&copy 2021</p>
      </div>

      <div class="socials">
        <i class="fab fa-facebook-square"></i>
        <i class="fab fa-twitter-square"></i>
        <i class="fab fa-instagram-square"></i>
      </div>
    `
  }
}
customElements.define('my-footer', MyFooter);


