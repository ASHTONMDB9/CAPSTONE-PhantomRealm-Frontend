<template>
  <hr>
<footer class="footer-section">
        <div class="container">
            <div class="footer-cta pt-5 pb-5">
                <div class="row">
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="cta-text">
                                <h4>Find us</h4>
                                <span>4427 Avenue, West City, Central</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="fas fa-phone"></i>
                            <div class="cta-text">
                                <h4>Call us</h4>
                                <span>065 863 2731</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="far fa-envelope-open"></i>
                            <div class="cta-text">
                                <h4>Mail us</h4>
                                <span>phantomslaye4427@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-content pt-5">
                <div class="row">
                    <div class="col-xl-4 col-lg-4">
                        <div class="footer-widget">
                            <div class="footer-logo">
                                <a href="index.html"></a>
                            </div>
                            <div class="footer-text">
                              <img src="../assets/Images/image1.png">
                              <img src="../assets/Images/image2.png">
                              <img src="../assets/Images/image5.png">
                              <br>
                              <img src="../assets/Images/image3.png">
                              <img src="../assets/Images/image4.png">
                              <img src="../assets/Images/image6.png">
                            </div>
                            <div class="footer-social-icon">
                                <span>Follow us:</span>
                                <a href="https://www.facebook.com/profile.php?id=100085302518838" target="_blank"><i class="fab fa-facebook-f facebook-bg"></i></a>
                                <a href="https://twitter.com/ASHTON_M_DB9" target="_blank"><i class="fab fa-twitter twitter-bg"></i></a>
                                <a href="https://www.instagram.com/ashton.m_db9/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                                <a href="https://github.com/ASHTONMDB9" target="_blank"><i class="fa-brands fa-github"></i></a>
                                <a href="https://www.linkedin.com/in/ashton-abrahams-0bb921237/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>Get in Touch</h3>
                            </div>
                            <div class="footer-text mb-25">
                                <p>To join our community provide your email and we'll get back to you </p>
                            </div>
                            <div class="subscribe-form">
                                <form action="https://formspree.io/f/mkneonwq" method="POST">
                                    <input type="email" name="Email" placeholder="Email Address">
                                    <button type="submit"><i class="fab fa-telegram-plane"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright-area">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div class="copyright-text">
                            <p>Phantomslaye_4427 Copyright &copy; 2022, All Right Reserved</p>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div class="footer-menu">
                            <ul>
                                <li><router-link class="nav-link" to="/">Home</router-link></li>
                                <li><router-link class="nav-link" to="/Store">Store</router-link></li>
                                <li><router-link class="nav-link" to="/Contact">Contact</router-link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    components: {

 }
}
</script>
<style scoped>
footer {
  margin-top: 20px;
}
ul {
    margin: 0px;
    padding: 0px;
}
.footer-section {
  background-image: url(../assets/Images/REDBLA_1.jpg);
  background-size: cover;
  background-attachment: fixed;
  position: relative;
}
.footer-cta {
  border-bottom: 1px solid black;
}
.single-cta i {
  color: black;
  font-size: 30px;
  float: left;
  margin-top: 8px;
  filter: drop-shadow(0px 0px 0.2rem red);
}
.cta-text {
  padding-left: 15px;
  display: inline-block;
}
.cta-text h4 {
  color: white;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 2px;
}
.cta-text span {
  color: white;
  font-size: 15px;
}
.footer-content {
  position: relative;
  z-index: 2;
}
.footer-pattern img {
  position: absolute;
  top: 0;
  left: 0;
  height: 330px;
  background-size: cover;
  background-position: 100% 100%;
}
.footer-logo {
  margin-bottom: 30px;
}
.footer-logo img {
    max-width: 200px;
}
.footer-text p {
  margin-bottom: 14px;
  font-size: 14px;
      color: white;
  line-height: 28px;
}
.footer-social-icon span {
  color: white;
  display: block;
  font-size: 20px;
  font-weight: 700;
  font-family: dead;
  margin-bottom: 20px;
}
.footer-social-icon a {
  color: white;
  font-size: 16px;
  margin-right: 15px;
}
.footer-social-icon i {
  height: 100px;
  width: 40px;
  font-size: 25px;
  text-align: center;
  line-height: 38px;
  border-radius: 50%;
}
.footer-social-icon i:hover {
  transform: scale(1.5);
  transition: all 1.5 linear;
}
.footer-widget-heading h3 {
  color: white;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 40px;
  position: relative;
}
.footer-widget-heading h3::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -15px;
  height: 2px;
  width: 50px;
  background: black;
}
.footer-widget ul li {
  display: inline-block;
  width: 50%;
  margin-bottom: 12px;
}
.footer-widget ul li a:hover{
  color: black;
}
.footer-widget ul li a {
  color: black;
  text-transform: capitalize;
}
.subscribe-form {
  position: relative;
  overflow: hidden;
  filter: drop-shadow(0px 0px 0.2rem white);
}
.subscribe-form input {
  width: 100%;
  padding: 14px 28px;
  background: black;
  border: 1px solid black;
  color: white;
}
.subscribe-form input:focus {
  width: 100%;
  padding: 14px 28px;
  background: white;
  border: 1px solid black;
  color: black;
}
.subscribe-form button {
    position: absolute;
    right: 0;
    background: black;
    padding: 13px 20px;
    border: 1px solid black;
    top: 0;
}
.subscribe-form button i {
  color: white;
  font-size: 22px;
  transform: rotate(-6deg);
}
.copyright-area{
  background: black;
  padding: 25px 0;
}
.copyright-text p {
  margin: 0;
  font-size: 14px;
  color: white;
}
.copyright-text p a{
  color: white;
}
.footer-menu li {
  display: inline-block;
  margin-left: 20px;
}
.footer-menu li:hover{
  color: red;
}
.footer-menu li {
  font-size: 14px;
  color: white;
}  
</style>