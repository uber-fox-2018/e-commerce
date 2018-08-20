Vue.component("top-carousel-component", {
	template: `
    <section class="section-content padding-bottom">
    <div class="container">
      <h4 class="title-text">Flash Sale</h4>

      <div class="row">
        <aside class="col-md-6">

          <!-- ================== 1-carousel bootstrap  ==================  -->
          <div id="carousel1_indicator" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carousel1_indicator" data-slide-to="0" class="active"></li>
              <li data-target="#carousel1_indicator" data-slide-to="1"></li>
              <li data-target="#carousel1_indicator" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" src="images/banners/slide1.jpg" alt="First slide">
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="images/banners/slide2.jpg" alt="Second slide">
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="images/banners/slide3.jpg" alt="Third slide">
              </div>
            </div>
            <a class="carousel-control-prev" href="#carousel1_indicator" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carousel1_indicator" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
          <!-- ==================  1-carousel bootstrap ==================  .// -->
        </aside>
        <!-- col.// -->
        <aside class="col-md-6">
          <!-- 2-carousel bootstrap -->
          <div id="carousel2_indicator" class="carousel slide carousel-fade" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" src="images/banners/slide1.jpg" alt="First slide">
                <article class="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                </article>
                <!-- carousel-caption .// -->
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="images/banners/slide2.jpg" alt="Second slide">
                <article class="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                </article>
                <!-- carousel-caption .// -->
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="images/banners/slide3.jpg" alt="Third slide">
                <article class="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
                </article>
                <!-- carousel-caption .// -->
              </div>
            </div>
            <a class="carousel-control-prev" href="#carousel2_indicator" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carousel2_indicator" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
          <!-- ==================  2-carousel bootstrap.// ==================  -->
        </aside>
      </div>
      <!-- row.// -->
    </div>
    <!-- container .//  -->
  </section>
    `,
	data() {
		return {};
	},
	methods: {}
});
