
class MyHeader extends HTMLElement {
  connectedCallback(){
    this.innerHTML =`
    <div class="navbar">
    <ul>
        <li><a href="../home/index.html">Home</a></li>
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
      <img src="../assets/img/global/logo.svg" alt="logo" class="logo">
  </svg>

    `
  }
}
customElements.define('my-header', MyHeader);

class MyFooter extends HTMLElement {
  connectedCallback(){
    this.innerHTML =`
   
    <p>this content comes from footer.html</p>
    <p>&copy 2021</p>
    <p>created by whoever</p>
    `
  }
}
customElements.define('my-footer', MyFooter);


