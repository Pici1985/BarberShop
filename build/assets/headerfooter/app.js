class MyHeader extends HTMLElement {
  connectedCallback(){
    this.innerHTML =`
    <div class="navbar">
      <ul>
          <li><a href="../index.html">Home</a></li>
          <li><a href="../aboutUs/aboutus.html">About us</a></li>
          <li><a href="../gallery/gallery.html">Gallery</a></li>
          <li><a href="../pricelist/pricelist.html">Price list</a></li>
          <li><a href="../openingtime/openingtime.html">Opening times</a></li>
          <li><a href="../bookings/bookings.html">Booking</a></li>
      </ul>
    </div>
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
  connectedCallback(){
    this.innerHTML =`
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


