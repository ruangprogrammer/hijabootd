
<div id="sb-site">
    <div className="overlay-background"></div>


    <div className="row parent-dropdown-filter" style={{position:"relative"}}>
        <div className="col-xs-6" style={{paddingRight:"0"}}>
            <button className="btn btn-default btn-block" data-dropdown-filter="#filter" style={{color:"#5a5a5a",borderRadius:"0",textAlign:"left"}}>Filter <span className="caret pull-right" style={{marginTop:"6px"}}></span></button>
        </div>
        <div className="col-xs-6" style={{paddingLeft:"0"}}>
            <button className="btn btn-default btn-block" data-show-content="#sourceSorting" data-title="Urutkan" style={{color:"#5a5a5a",borderRadius:"0",textAlign:"left"}}>Urutkan <span className="caret pull-right" style={{marginTop:"6px"}}></span></button>
            <div id="sourceSorting" className="hide">
                <ul className="nav nav-pills nav-stacked">
                    <li className="active"><a href={"#"} className="sorting" data-value="">Terbaru</a></li>
                    <li><a href={"#"} className="sorting" data-value="hprice">Harga Mahal ke Murah</a></li>
                    <li><a href={"#"} className="sorting" data-value="lprice">Harga Murah ke Mahal</a></li>
                    <li><a href={"#"} className="sorting" data-value="popular">Paling Popular</a></li>
                </ul>
            </div>
        </div>
        <div id="filter" className="col-xs-12 dropdown-filter">
            <form action="" method="get" id="form-filter">
                <div className="form-group">
                    <select className="form-control filter-source" data-label="Pilih Brand">
                        <option value="" className="filter-label">Pilih Brand</option>
                        <option value="8">Band New</option>
                    </select>
                    <input type="hidden" name="f_brand" className="filter-value" value=""/>
                </div>
                <div className="form-group">
                    <select className="form-control filter-source" data-label="Pilih Warna">
                        <option value="" className="filter-label">Pilih Warna</option>
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
                    <input type="hidden" name="f_color" className="filter-value" value=""/>
                </div>
                <div className="checkbox">
                    <label>
                        <input type="checkbox" name="f_diskon" value="1"/> Lihat Barang Diskon Saja ?
                    </label>
                </div>
                <div className="form-group" style={{marginTop:"10px"}}>
                    <p>Harga</p>
                    <div style={{paddingLeft:"10px"}}>
                        <input id="range-price" type="text" name="f_price_range" value="" data-slider-min="0" data-slider-max="500000" data-slider-step="10000" data-slider-value="[0,500000]" />
                    </div>
                </div>
                <div>
                   
                    <button type="submit" className="btn btn-warning btn-lg btn-block" style={{marginBottom:"10px"}}>
                        Lihat <span className="glyphicon glyphicon-chevron-right"></span>
                    </button>
                    <a href={"#"} id="btnResetFilter">Reset</a>
                </div>
            </form>
        </div>
    </div>



<hr className="featurette-divider" />
<div className="row">
    <div className="col-lg-12">

        <p className="lead text-center"><b>Busana Muslim &amp; Hijab</b></p>

        <ul className="nav nav-pills nav-justified">
                <li role="presentation"><a role="menuitem" tabindex="-1" href={""}>Aisyah Brand</a></li>
                <li role="presentation"><a role="menuitem" tabindex="-1" href={""}>Aisyah Brand</a></li>
                <li role="presentation"><a role="menuitem" tabindex="-1" href={""}>Aisyah Brand</a></li>
        </ul>


    </div>
</div>

<div className="row featurette">
    <div className="col-md-12">
        <p className="text-center lead"><b>Bisa juga pesan lewat:</b></p>
        <p className="small text-center" style={{color:"rgb(0, 199, 33)"}}>instagram: <a href={"#"} style={{color:"rgb(0, 199, 33)">@hijabjogjastore &raquo;</a></p>
        <p className="small text-center">Senin - Jumat: 8 pagi - 8 malam
            <br/>Sabtu & Minggu: 8 pagi - 4 sore</p>
        </div>
    </div>

</div>

<div className="container pre-footer text-center">
    <p className="lead text-center"><b>Sudah Pesan?</b></p>
    <ul className="nav nav-pills nav-justified">
        <li role="presentation"><a href={"konfirmasi.html"} role="menuitem">Konfirmasi
        Pembayaran &raquo;</a></li>
        <li role="presentation"><a href={"status_pemesanan.html"} role="menuitem">Lacak
        Pesanan &raquo;</a></li>
    </ul>
</div>

</div>