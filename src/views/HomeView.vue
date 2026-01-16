<template>
  <section id="landing">
    <div class="hero-overlay"></div>

    <div class="hero-content">
      <h3 id="greeting" class="d-flex justify-content-center">Welcome to</h3>
      
      <h1 id="name" class="d-flex justify-content-center">The PhantomRealm</h1>
      
      
      <img src="../assets/Images/enter.png" loading="lazy" style="height: 80px; width: 80px; display: block; margin-left: auto; margin-right: auto; filter: invert(1);">
    <a href="#home"><i id="arrow" class="fa-solid fa-chevron-down d-flex justify-content-center" style="font-size: 40px; color: white;"></i></a>

    <h5 id="scrollmsg" class="d-flex justify-content-center">Enter if you dare</h5>
  </div>
  </section>
  
  <section id="home">

    <div class="container">
      <div class="row">
      <div class="col-md-4 service-tile">
        <div class="card text-bg-dark shadow-lg">
  <img src="../assets/Images/knight.jpg" class="card-img" alt="...">
  <div class="card-img-overlay">
    <h5 class="card-title d-flex justify-content-center">Bargin Prices</h5>
    <p class="card-text d-flex justify-content-center">When shopping with us you are guarenteed a good deal on all our products. We always save you money.</p>
    <img src="../assets/Images/save-money.png" class="service-icon" loading="lazy">
  </div>
</div>
      </div>

      <div class="col-md-4 service-tile">
        <div class="card text-bg-dark shadow-lg">
  <img src="../assets/Images/fantasy.jpg" class="card-img" alt="...">
  <div class="card-img-overlay">
    <h5 class="card-title d-flex justify-content-center">Free Delivery</h5>
    <p class="card-text">We offer all our customers free delivery on all products in our store.</p>
    <img src="../assets/Images/truck.png" class="service-icon" loading="lazy">
  </div>
</div>
      </div>

      <div class="col-md-4 service-tile">
        <div class="card text-bg-dark shadow-lg">
  <img src="../assets/Images/dragon.jpg" class="card-img">
  <div class="card-img-overlay">
    <h5 class="card-title d-flex justify-content-center">Exceptional Quality</h5>
    <p class="card-text">All our products are tested for quality before they are added. We give you only the best in gaming.</p>
    <img src="../assets/Images/clipboard.png" class="service-icon" loading="lazy">
  </div>
</div>
      </div>

    </div>
    </div>
  </section>

  <section id="about">
    <h1 class="about d-flex justify-content-center pb-5">About Us</h1>
    <div class="container-fluid pt-3">
      <div class="row">
        <div id="description" class="col-md-6 text-light">
          <h4>Torture and Torment await all that oppose!</h4>
          <p>Gaming software and hardware, clothing, accessories, as well as <br>delivery for all of your needs. Our offer is simple. We provide an<br> engaging and affordable gaming experience, combined with free<br> delivery on all our products to your door. So whether you're gaming,<br> need new gaming tees or accessories we've got you covered. Look <br>no further than the PhantomRealm for a great gaming experience.</p>
          <p>Join our community today and become part of the Phantom Forces. <br>Recieve 1,000,000 in-store credits for if you are a first time member,<br> which can be used to get discounts and deals on products.</p>
        </div>
        <div class="col-md-6">
          <img class="emblem" src="../assets/Images/shield.png" loading="lazy"><h4 class="emblemtext">We need your help. Work together to slay all in your way. Become an honoury memeber of the<br> Phantom Force and unlock legendary rewards and prizes. Sign up and join the Phantom Force <br>and play any of the selected games in our store to earn.</h4><br>
          <img class="emblem2" src="../assets/Images/dragon.png" loading="lazy"><h4 class="emblemtext">Defeat the boss and become a boss with our monthly raid of the giants. Be the first to beat the<br> boss at the end of the month and make a purchase for free. Limited time only.</h4>
          <img class="emblem2" src="../assets/Images/castle.png" loading="lazy"><h4 class="emblemtext">Kings and Warriors of Legend, none can stop me. They dare try, but I slay all in my way. For I am<br> The Phantomslaye. Torture and torment await all that oppose. Get your hands on the new and<br> exclusive PhantomRealm Legendary Warriors extension pack.</h4>
        </div>
      </div>
    </div>
  </section>
  <section id="showcase">
    <h1 class="about d-flex justify-content-center">Some of our products</h1>
    <div class="gallery">
     <span style="--i:1">
      <router-link to="/products/4">
      <img src="../assets/Games/bloodbornei.png" alt="" loading="lazy" />
      </router-link>
    </span>
  <span style="--i:2">
    <router-link to="/products/5">
    <img src="../assets/Games/darksiders.png" alt="" loading="lazy" />
    </router-link>
  </span>
  <span style="--i:3">
    <router-link to="/products/6">
    <img src="../assets/Games/darksouls.png" alt="" loading="lazy" />
    </router-link>
  </span>
  <span style="--i:4">
    <router-link to="/products/7">
    <img src="../assets/Games/godofwar.png" alt="" loading="lazy" />
    </router-link>
  </span>
  <span style="--i:5">
    <router-link to="/products/2">
    <img src="../assets/Games/nfsheat.png" alt="" loading="lazy" />
    </router-link>
  </span>
  <span style="--i:6">
    <router-link to="/products/3">
    <img src="../assets/Games/grandtheftautov.png" alt="" loading="lazy" />
    </router-link>
  </span>
  <span style="--i:7">
    <router-link to="/products/8">
    <img src="../assets/Games/skyrim.png" alt="" loading="lazy" />
    </router-link>
  </span>
  <span style="--i:8">
    <router-link to="/products/9">
    <img src="../assets/Games/uncharted.png" alt="" loading="lazy" />
    </router-link>
  </span>
</div>
  </section>
  <section id="banner">

    <div class="container-fluid">
      <div class="row">

<div class="col-md-3">
  <div class="sponser">
    <img src="../assets/Brands/activision.png" alt="" loading="lazy">
  </div>
</div>

<div class="col-md-3">
  <div class="sponser">
    <img src="../assets/Brands/bandai.png" alt="" loading="lazy">
  </div>
</div>

<div class="col-md-3">
  <div class="sponser">
    <img src="../assets/Brands/blizzard.png" alt="" loading="lazy">
  </div>
</div>

  <div class="col-md-3">
    <div class="sponser">
    <img src="../assets/Brands/ea.png" alt="" loading="lazy">
    </div>
  </div>

<div class="col-md-3">
  <div class="sponser">
  <img src="../assets/Brands/NaughtyDog.png" alt="" loading="lazy">
  </div>
</div>

  <div class="col-md-3">
    <div class="sponser">
  <img src="../assets/Brands/nintendo.png" alt="" loading="lazy">
  </div>
  </div>

  <div class="col-md-3">
  <div class="sponser">
    <img src="../assets/Brands/ps.png" alt="" loading="lazy">
  </div>
</div>

<div class="col-md-3">
  <div class="sponser">
    <img src="../assets/Brands/rockstar.png" alt="" loading="lazy">
  </div>
</div>

<div class="col-md-3">
  <div class="sponser">
    <img src="../assets/Brands/sony.png" alt="" loading="lazy">
  </div>
</div>

<div class="col-md-3">
  <div class="sponser">
    <img src="../assets/Brands/square.png" alt="" loading="lazy">
  </div>
</div>

<div class="col-md-3">
  <div class="sponser">
    <img src="../assets/Brands/ubisoft.png" alt="" loading="lazy">
  </div>
</div>

<div class="col-md-3">
  <div class="sponser">
    <img src="../assets/Brands/xbox.png" alt="" loading="lazy">
  </div>
</div>

      </div>
    </div>
  </section>

  <section id="testimonials">
    <h1 class="about d-flex justify-content-center">What people have to say</h1>
    <div id="tests" class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="card bg-black">
  <img src="../assets/Images/beanie-2562646_1920.jpg" loading="lazy" class="card-img-top" style="border-radius: 100%; object-fit: cover; width: 15rem; display: block; margin-left: auto; margin-right: auto;" alt="...">
  <div class="card-body">
    <p class="test-text text-light d-flex justify-content-center">Excellent service. Definitely one of the best online game stores I've visited. Exceptional</p>
    <div class="rating">
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-regular fa-star"></i>
    </div>
  </div>
</div>
        </div>
        <div class="col-md-4">
          <div class="card bg-black">
  <img src="../assets/Images/man-792821_1920.jpg" loading="lazy" class="card-img-top" style="border-radius: 100%; object-fit: cover; width: 15rem; display: block; margin-left: auto; margin-right: auto;" alt="...">
  <div class="card-body">
    <p class="test-text text-light d-flex justify-content-center">Very good service delivery and good quality products. A great store for your gaming needs.</p>
    <div class="rating">
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star-half-stroke"></i>
      <i class="fa-regular fa-star"></i>
    </div>
  </div>
</div>
        </div>
        <div class="col-md-4">
          <div class="card bg-black">
  <img src="../assets/Images/woman-1063100_1920.jpg" loading="lazy" class="card-img-top" style="border-radius: 100%; object-fit: cover; width: 15rem; display: block; margin-left: auto; margin-right: auto;" alt="...">
  <div class="card-body">
    <p class="test-text text-light d-flex justify-content-center">The PhantomRealm is the best place to get your gaming equipment and merch. I love this website.</p>
    <div class="rating">
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star-half-stroke"></i>
    </div>
  </div>
</div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  mounted(){
        window.scrollTo(0,0)
    },
}
</script>
<style scoped>

@font-face {
  font-family: phantom;
  src: url(../assets/Fonts/DEATHCROW/DEATHCROW.ttf);
}
@font-face {
  font-family: game;
  src: url(../assets/Fonts/FiddlersCove/FiddlersCoveItalic-Yppj.otf);
}
@font-face {
  font-family: detail;
  src: url(../assets/Fonts/SundayRomantic/Sundayromanticdemo-Wy7a9.otf);
}
section {
  overflow: hidden;
}
img {
  max-width: 100%;
  height: auto;
}
.card,
.card-img-overlay {
  overflow: hidden;
}

  #landing {
    background-image: url(../assets/Images/cutter-man-4660655_1920.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    position: relative;
    min-height: 100vh;
  }
  .hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    rgba(0,0,0,0.35),
    rgba(0,0,0,0.55)
  );
}
.hero-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
  #greeting {
    padding-top: 450px;
    font-size: 50px;
    color: black;
    text-shadow: 0 0 4px red, 0 0 4px red, 0 0 4px red, 9px 3px 7px rgb(36, 36, 36);
    font-family: phantom;
  }
  #name {
    font-size: clamp(3.5rem, 8vw, 6rem);
    color: black;
    text-shadow: 0 0 4px red, 0 0 4px red, 0 0 4px red, 10px 0px 10px rgb(36, 36, 36);
    font-family: phantom;
  }
  a, i {
    text-decoration: none;
  }
  #arrow {
    animation: scroll-anim 2s infinite;
}
@keyframes scroll-anim {
  0% {
    opacity: 0;
    height: 6px;
  }

  40% {
    opacity: 1;
    height: 10px;
  }

  80% {
    transform: translate(0, 20px);
    height: 10px;
    opacity: 0;
  }

  100% {
    height: 3px;
    opacity: 0;
  }
}
  #scrollmsg {
    padding-top: 50px;
    color: black;
    text-shadow: 0 0 1px red, 0 0 1px red, 0 0 1px red, 1px 0px 1px rgb(36, 36, 36);
    font-family: phantom;
  }
  h5 {
    font-size: 40px;
    padding-top: 50px;
    color: black;
    text-shadow: 0 0 1px red, 0 0 4px red, 0 0 4px red, 10px 0px 10px rgb(36, 36, 36);
    font-family: phantom;
  }
  #home {
    height: 35vh;
    background-color: black;
  }
  .service-tile {
  position: relative;
  height: 320px;
  border-radius: 18px;
  background: black;
  padding-top: 25px;
  animation: float-anim 5s infinite;
}

.service-tile img {
  object-fit: fill;
}

.service-tile::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,.8), transparent);
}

.service-tile .content {
  position: absolute;
  bottom: 0;
  padding: 1.5rem;
  z-index: 2;
  text-align: center;
}

.service-icon {
  height: 60px; 
  width: 60px; 
  display: block; 
  margin-left: auto; 
  margin-right: auto; 
  filter: invert(1);
}
.card-text {
  text-shadow: 0 0 4px black, 0 0 4px black, 0 0 4px white, 10px 0px 10px rgb(36, 36, 36);
}
    @keyframes float-anim {
  0% {
    opacity: 1;
    height: 10px;
  }

  50% {
    transform: translate(0, 25px);
    height: 10px;
    opacity: 1;
  }

  100% {
    height: 10px;
    opacity: 1;
  }
  }
  .icons {
    padding-top: 30px;
    font-size: xx-large;
    color: white;
  }
  .about {
  color: black;
  text-shadow: 0 0 4px red, 0 0 4px red, 0 0 4px red, 10px 0px 10px rgb(36, 36, 36);
  font-family: phantom;
  font-size: 100px;
}
#about {
  background-image: url(../assets/Images/REDBLA_1.jpg);
  background-attachment: fixed;
  background-size: cover;
  padding: 6rem 0;
  min-height: auto;
}
#description {
  font-size: 25px;
  padding-left: 80px
}
.emblem {
  height: 50px;
  width: 50px;
}
.emblem2 {
  height: 50px;
  width: 50px;
  margin-top: 15px;
}
.emblemtext {
  font-size: large;
  color: white;
}
#showcase{
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: black;
}
.gallery{
  position: relative;
  width: 300px;
  height: 500px;
  transform-style: preserve-3d;
  animation: rotate 45s linear infinite;
}
@keyframes rotate{
  from{
    transform: perspective(1200px) rotateY(0deg);
  }
  
  to{
    transform: perspective(1200px) rotateY(360deg);
  }
}
.gallery span{
  position: absolute;
  width: 100%;
  height: 100%;
  filter: drop-shadow(0px 0px 0.5rem red);
  transform-origin: center;
  transform-style: preserve-3d;
  transform: rotateY(calc(var(--i) * 45deg)) translateZ(380px);
}
.gallery span img{
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: all 0.5s ease;
}
.gallery:hover {
  animation-play-state: paused;
}
.gallery span:hover img {
  transform: scale(1.2);
  transition: all 0.5s ease;
}
#banner {
  margin-top: 85px;
  padding: 4rem 0;
  min-height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(../assets/Images/REDBLA_1.jpg);
  background-size: cover;
  background-attachment: fixed;
}
.sponser img {
  opacity: 0.85;
  margin-top: 15px;
  height: 150px;
  width: 150px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  filter: drop-shadow(0px 0px 0.2rem black);
}
.sponser img:hover {
  opacity: 1;
  transform: scale(1.1);
  transition: all 0.3s ease;
  filter: brightness(1.2);
  filter: drop-shadow(0px 0px 0.2rem black);
}
#testimonials {
  margin-top: 20px;
  height: 60vh;
}
#testimonials .card {
  border-radius: 20px;
  background: rgba(0,0,0,0.7);
  backdrop-filter: blur(8px);
}
.rating i {
  font-size: 18px;
  color: yellow;
}
#tests {
  padding-top: 50px;
}

/* mobile */
@media (max-width: 576px) {
#landing {
  background-position: center;
}
#greeting {
  padding-top: 320px;
  font-size: 26px;
}

#name {
  font-size: 2.8rem;
}

#home {
  height: auto;
  padding-bottom: 2rem;
}

.service-tile {
  height: auto;
  animation: none;
}

.service-tile img {
  max-height: 160px;
  object-fit: fill;
}

.service-tile .card-img-overlay img {
  display: none;
}

.card-text {
  display: none !important;
}

.service-icon {
  display: none !important;
}
#about {
  background-position: center;
}
#about h1 {
  padding-bottom: 0 !important;
}
.about {
  font-size: 2.8rem;
  text-align: center;
}
.emblemtext {
  font-size: 15px;
}
#description {
  padding: 0 20px;
  text-align: center;
  font-size: 15px;
}
#description br {
  display: none;
}
#about .col-md-6 {
  padding-top: 30px;
}
#about .col-md-6:last-child {
  font-size: 10px !important;
}

#showcase {
  height: auto;
  padding: 3rem 0;
}

.gallery {
  animation: none;
  transform: none;
  width: 100%;
  height: auto;
}

.gallery span {
  position: relative;
  transform: none !important;
  margin-bottom: 1.5rem;
  display: grid;
}

.gallery span img {
  max-height: 200px;
}
.row {
  justify-content: center;
}

#banner {
  padding: 2rem 0;
  margin-top: 0 !important;
  background-position: center;
}

#banner .col-md-3 {
  height: 100px;
  width: 100px;
}

.sponser img {
  height: 65px;
  width: 65px;
}

#testimonials {
  height: auto;
  padding-bottom: 3rem;
}
}

/* Tablet */
@media (min-width: 577px) and (max-width: 991px) {
  #landing {
  background-position: center;
}
#greeting {
  padding-top: 320px;
}

#scrollmsg {
  display: none;
}

#home {
  height: auto;
}

.service-tile {
  height: 280px;
  animation: none;
}

#description {
  padding-left: 30px;
}

#about br {
  display: none;
}

#showcase {
  height: auto;
}

.gallery {
  animation: none;
  transform: none;
  width: 100%;
  height: auto;
  display: grid;
  flex-wrap: wrap;
}

.gallery span {
  position: relative;
  transform: none !important;
  margin-bottom: 1.5rem;
}

.gallery span img {
  max-height: 300px;
}

.sponser img {
  height: 110px;
  width: 110px;
}

#testimonials {
  height: auto;
}
}

</style>