    <div id="sb-site">
      <div class="overlay-background"></div>
      <div class="row parent-dropdown-filter" style="position:relative">
        <div class="col-xs-6" style="padding-right:0">
          <button class="btn btn-default btn-block" data-dropdown-filter="#filter" style="color:#5a5a5a;border-radius:0;text-align:left">Filter <span class="caret pull-right" style="margin-top:6px;"></span></button>
        </div>
        <div class="col-xs-6" style="padding-left:0">
          <button class="btn btn-default btn-block" data-show-content="#sourceSorting" data-title="Urutkan" style="color:#5a5a5a;border-radius:0;text-align:left">Urutkan <span class="caret pull-right" style="margin-top:6px;"></span></button>
          <div id="sourceSorting" class="hide">
            <ul class="nav nav-pills nav-stacked">
              <li class="active"><a href="#" class="sorting" data-value="">Terbaru</a></li>
              <li><a href="#" class="sorting" data-value="hprice">Harga Mahal ke Murah</a></li>
              <li><a href="#" class="sorting" data-value="lprice">Harga Murah ke Mahal</a></li>
              <li><a href="#" class="sorting" data-value="popular">Paling Popular</a></li>
            </ul>
          </div>
        </div>
        <div id="filter" class="col-xs-12 dropdown-filter">
          <form action="" method="get" id="form-filter">
            <div class="form-group">
              <select class="form-control filter-source" data-label="Pilih Brand">
                <option value="" class="filter-label">Pilih Brand</option>

                <option value="2">Aisyah Brand</option>

              </select>
              <input type="hidden" name="f_brand" class="filter-value" value="">
            </div>
            <div class="form-group">
              <select class="form-control filter-source" data-label="Pilih Warna">
                <option value="" class="filter-label">Pilih Warna</option>
                <option value="1">Grey</option>
                <option value="2">Blue</option>
                <option value="3">Green</option>
                <option value="4">Pink</option>
                <option value="5">Cream</option>
                <option value="6">Black</option>
                <option value="7">White</option>
                <option value="8">Brown</option>
                <option value="9">Purple</option>
                <option value="10">Red</option>
                <option value="11">Orange</option>
                <option value="12">Yellow</option>
              </select>
              <input type="hidden" name="f_color" class="filter-value" value="">
            </div>
            <div class="checkbox">
              <label>
                <input type="checkbox" name="f_diskon" value="1"> Lihat Barang Diskon Saja ?
              </label>
            </div>
            <div class="form-group" style="margin-top:10px;">
              <p>Harga</p>
              <div style="padding-left:10px">
                <input id="range-price" type="text" name="f_price_range" value="" data-slider-min="0" data-slider-max="500000" data-slider-step="10000" data-slider-value="[0,500000]" />
              </div>
            </div>
            <div>
              <input id="f_sort" type="hidden" name="f_sort" value="">
              <button type="submit" class="btn btn-warning btn-lg btn-block" style="margin-bottom:10px;">
                Lihat <span class="glyphicon glyphicon-chevron-right"></span>
              </button>
              <a href="#" id="btnResetFilter">Reset</a>
            </div>
          </form>
        </div>
      </div>

      <div id="owl-carousel">
      </div>

      <div class="container">
        <div class="row text-center">
          <div class="col-lg-12">
            <h1 class="featurette-heading">Semua Product</h1>
            <p>Setiap hari koleksi <strong>Baju Wanita Terbaru</strong> dari <strong>Hijab</strong>, <strong>Dress</strong>, <strong>Kardigan Rajut</strong>, <strong>Blazer</strong>, <strong>Atasan</strong>, sampai <strong>Aksesoris</strong>.</p>

          </div>
        </div>

        <div class="row text-center">
          <div class="col-lg-12">
            <p><em>Semua Ready Stok! Klik untuk Pesan.</em>

            </p>
          </div>
        </div>

        <div class="row">
          <!-- row1 start -->
          
          <!--             //for($i=0;$i<12;$i++){    //product -->

          <div class="col-xs-12 col-sm-12 col-md-4 col-list-sku">
            <div class="container-badge">

              <div class="badge-tag cyan">
                Promo
              </div>


              <div class="promo-box">
                <span class="on_promo title_shop">SOLD OUT</span>
              </div>


            </div>
            <div class="thumbnail box-shadow" style="min-height: 350px; margin: 0 10px 10px 10px; padding: 10px;">
              <a href="details-product-123.html";?>">
                <img width="100%" src="assets/images/product/hijab-jogja-store-hijab-intan-70hijab-jogja-store-pasmina-motif-101.jpg" border="0" class="img-responsive" />
              </a>
              <div class="caption">
                <a href="#">

                  <h4 class="product-name text-center small" title="Metthy Top">Nama Hijab</h4>
                  <h4 class="merchant-name text-center small" title="Giggle Note">Nama Brand</h4>

                  <h4 class="price text-center">Rp 35.000 <strike class="text-muted"><small>Rp 20.000</small></strike></h4> 

                </a>

              </div>
            </div>
          </div>

          <!--         } -->

        </div>
        <!-- row end -->

        <div class="row">
          <div class="col-lg-12">
            <div class="text-center">
              <ul class="pagination">


                <!-- start paging -->
                <ul class='paging'>
                  <ul class="pagination">
                   <li class="active">
                      <a href="#">1</a>
                    </li>
                    <li>
                      <a href="product-page-2.html">2</a>
                    </li> 
                    <li>
                      <a href="product-page-2.html">›</a>
                    </li>                    
                  </ul>
                 </ul>
                 <!--  start paging end -->
                 
               </ul>
             </div>
           </div>
         </div>

         <script type="text/javascript">
          ga('send', 'pageview');
        </script>

        <hr class="featurette-divider" />

        <div class="row">
          <div class="col-lg-12">
            <h3 class="featurette-heading" style="font-size:18px;text-align:center;">Baru Saja Dipesan Member Lain</h3>
            <h4 class="text-center"><mark><small>Stok Tinggal Sedikit Lho!</small></mark></h4>
          </div>

          <!--    //for($i=0;$i<12;$i++){ -->

          <div class="col-xs-4 col-sm-4 col-md-2 col-recently-purchased">
            <div class="thumbnail" style="border: none; min-height: 268px; margin-bottom:0px; padding:0px;">
              <a href="#" onClick="#">
                <img width="275px" src="assets/images/product/hijab-jogja-store-hijab-intan-70hijab-jogja-store-pasmina-motif-101.jpg" border="0" class="img-responsive" />
              </a>
              <div class="caption">
                <a href="#">

                  <h4 class="product-name text-center small" title="Metthy Top">Hijab Oke</h4>

                  <h4 class="merchant-name text-center small" title="Giggle Note">aisyah brand</h4>

                  <h4 class="price text-center">Rp 20.000,-<strike class="text-muted"><small>Rp 35.00,-</small></strike></h4> 

                </a>

              </div>
            </div>
          </div>

          <!--           } -->

        </div>

        <div class="row">
          <div class="col-lg-12 text-center">
            <a href="#" class="small" onClick="#">Lihat Semua Baru Dipesan Member Lain &raquo;</a>
          </div>

        </div>

        <hr class="featurette-divider" />

        <div class="row">
          <div class="col-lg-12">
            <h3 class="featurette-heading" style="font-size:18px;text-align:center;">Baru Saja Restok!</h3>
            <h4 class="text-center"><mark><small>Jangan Kehabisan lagi.</small></mark></h4>
          </div>


          <!--//for($i=0;$i<12;$i++){ -->

          <div class="col-xs-4 col-sm-4 col-md-2 col-recently-purchased">
            <div class="thumbnail" style="border: none; min-height: 268px; margin-bottom:0px; padding:0px;">
              <a href="#" onClick="#">
                <img width="275px" src="assets/images/product/hijab-jogja-store-hijab-intan-70hijab-jogja-store-pasmina-motif-101.jpg" border="0" class="img-responsive" />
              </a>

              <div class="caption">
                <a href="#">

                  <h4 class="product-name text-center small" title="Metthy Top">Nama Product Rawis</h4>

                  <h4 class="merchant-name text-center small" title="Giggle Note">Brand Aisyah</h4>

                  <h4 class="price text-center">Rp 25.000,-<strike class="text-muted"><small>Rp 35.000,-</small></strike></h4> 

                </a>

              </div>
            </div>
          </div>

          <!--    }    -->


        </div>

        <div class="row">
          <div class="col-lg-12 text-center">
            <a href="#" class="small" onClick="#">Lihat Semua yang Baru Restock &raquo;</a>
          </div>
        </div>
        <hr class="featurette-divider" />
        <div class="row">
          <div class="col-lg-12">

            <p class="lead text-center"><b>Busana Muslim &amp; Hijab</b></p>
            <ul class="nav nav-pills nav-justified">
              <ul class="nav nav-pills nav-justified">
                <!-- perulangan start {-->
                <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Aisyah Brand</a></li>
                <!-- perulangan end } -->
              </ul>


            </div>
          </div>

          <div class="row featurette">
            <div class="col-md-12">
              <p class="text-center lead"><b>Bisa juga pesan lewat:</b></p>
              <p class="small text-center" style="color:rgb(0, 199, 33);">instagram: <a href="#" style="color:rgb(0, 199, 33);">@hijabjogjastore &raquo;</a></p>
              <p class="small text-center">Senin - Jumat: 8 pagi - 8 malam
                <br>Sabtu & Minggu: 8 pagi - 4 sore</p>
              </div>
            </div>

          </div>

          <div class="container pre-footer text-center">
            <p class="lead text-center"><b>Sudah Pesan?</b></p>
            <ul class="nav nav-pills nav-justified">
              <li role="presentation"><a href="konfirmasi.html" role="menuitem">Konfirmasi
              Pembayaran &raquo;</a></li>
              <li role="presentation"><a href="status_pemesanan.html" role="menuitem">Lacak
              Pesanan &raquo;</a></li>
            </ul>
          </div>
        </div>
