import React, { Component } from 'react';
import axios from 'axios';
import ReactLoading from 'react-loading';
//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
//import { Button } from 'reactstrap';

class Home extends Component {

constructor(props) {
   super(props);
   this.state = {
    error:null,
    isLoaded: false,
    listOKE:[]
  };
 }


 componentDidMount(){

 // axios.get('//http://localhost/api-hijabootd-v2/product')
 axios.get('https://hijabootd.ruangprogrammer.com/apiv2/product')
   
   .then(response => {    // console.log(response.data)
       this.setState({ 
        isLoaded: true,
        listOKE: response.data,
        listData: response.data
        });
      })
   .catch(function (error) {
      isLoaded: true,
      console.log(error);
   })
 }



  render() {

      const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading... <ReactLoading/></div>;
    } else {
    return (

<div id="sb-site"  style={{marginTop: "50px"}}>
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


    <div id="owl-carousel">
    </div>
    <div className="container">
        <hr className="featurette-divider" />
        <div className="row">

            <div className="col-lg-12">
                <h5 className="featurette-heading" style={{fontSize:"18px",textAlign:"center"}}>Koleksi Kami banyak yang Hijab yang Terbaru Lhooo Sist.. Yuuks di Lihat</h5>
                <h3 className="featurette-heading" style={{fontSize:"18px",textAlign:"center"}}>Style ( Outfit of The Day ) OOTD terbaru</h3>
            </div>

                <div className="col-xs-3 col-sm-3 col-md-3 col-inspiration">
                    <div className="thumb-inspiration">
                        <div className="thumbnail thumb-content">
                            <a href={"details-product-123.html"} onclick="#">
                                <img src={"assets/images/product/hijab-jogja-store-pasmina-54hijab-jogja-store--33hijab-jogja-store-hijab-nafa-reviana-6hijaber3.jpg"} border="0" className="img-responsive" style={{objectFit:"cover"}} />
                            </a>
                        </div>
                    </div>
                </div>
             
        </div>
        <div className="row">
            <div className="col-lg-12 text-center">
                <br/>
                <p><a href={"#"} className="small">Lihat Semua Inspirasi Terbaru &raquo;</a></p>
            </div>
        </div>
    </div>



    <div className="container">
        <div className="row text-center">
            <div className="col-lg-12">
                <h1 className="featurette-heading">Koleksi Hijab Terbaru</h1>
                <p>Setiap hari koleksi <strong>Baju Wanita Terbaru</strong> dari <strong>Hijab</strong>, <strong>Dress</strong>, <strong>Kardigan Rajut</strong>, <strong>Blazer</strong>, <strong>Atasan</strong>, sampai <strong>Aksesoris</strong>.</p>

            </div>
        </div>

        <div className="row text-center">
            <div className="col-lg-12">
                <p><em>Semua Ready Stok! Klik untuk Pesan.</em>

                </p>
            </div>
        </div>

        <div className="row">
          



   {this.state.listData.map(list => { console.log(list.product_images)
        
            return (


       
                <div className="col-xs-12 col-sm-12 col-md-4 col-list-sku">
                    <div className="container-badge">
                      
                            <div className="badge-tag green">
                                Baru!
                            </div>
                           
                            <div className="promo-box">
                                <span className="on_promo title_shop">SOLD OUT</span>
                            </div>
                          

                    </div>
                    <div className="thumbnail box-shadow" style={{minHeight:"350px",margin: "0 10px 10px 10px", padding:"10px"}}>
                        <Link to={"productdetail/"+list.product_id}>
                            <img width="100%" src={list.product_images} border="0" className="img-responsive" />
                        </Link>
                        <div className="caption">
                            <a href={"#"}>

                                <h4 className="product-name text-center small" title="Metthy Top">Hijab Rawis</h4>
                        
                                <h4 className="merchant-name text-center small" title="Giggle Note">Aisyah Brand</h4>
                       
                                    <h4 className="price text-center">Rp 25.000 <strike className="text-muted"><small>Rp 35.000</small></strike></h4> 
                               

                            </a>

                        </div>
                    </div>
                </div>

                )






 })}















               
    
        </div>
   
        <div className="row">
            <div className="col-lg-12">
                <div className="text-center">
                    <ul className="pagination">
                        
                        <ul className='paging'>
                          <ul className="pagination">
                             <li className="active">
                              <a href={"#"}>1</a>
                          </li>
                          <li>
                              <a href={"product-page-2.html"}>2</a>
                          </li> 
                          <li>
                              <a href={"product-page-2.html"}>›</a>
                          </li>                    
                      </ul>
                  </ul>
                 
              </ul>
          </div>
      </div>
  </div>

  

<hr className="featurette-divider" />

<div className="row">
    
    <div className="col-lg-12">
        <h3 className="featurette-heading" style={{fontSize:"18px",textAlign:"center"}}>Baru Saja Dipesan Member Lain</h3>
        <h4 className="text-center"><mark><small>Stok Tinggal Sedikit Lho!</small></mark></h4>
    </div>
    
    <div className="col-xs-4 col-sm-4 col-md-2 col-recently-purchased">
        <div className="thumbnail" style={{border: "none", minHeight: "268px", marginBottom:"0px", padding:"0px"}}>
            <a href={"details-product-123.html"}>
                <img width="275px" src={"assets/images/product/hijab-jogja-store-pasmina-54hijab-jogja-store--33hijab-jogja-store-hijab-nafa-reviana-6hijaber3.jpg"} border="0" className="img-responsive" />
            </a>
            <div className="caption">
                <a href={"details-product-123.html"}>
                    <h4 className="product-name text-center small" title="Leona Turban">Rawias Katun</h4>
                   
                        <h4 className="price text-center">Rp 25.000,-<br/><strike className="text-muted"><small>Rp 35.000</small></strike></h4> 
               
                </a>
            </div>
        </div>
    </div>



</div>

<div className="row">
    <div className="col-lg-12 text-center">
        <a href={"#"} className="small" onClick="#">Lihat Semua Baru Dipesan Member Lain &raquo;</a>
    </div>

</div>

<hr className="featurette-divider" />

<div className="row">
    <div className="col-lg-12">
        <h3 className="featurette-heading" style={{fontSize:"18px",textAlign:"center"}}>Baru Saja Restok!</h3>
        <h4 className="text-center"><mark><small>Jangan Kehabisan lagi.</small></mark></h4>
    </div>


  
    
    <div className="col-xs-4 col-sm-4 col-md-2 col-recently-purchased">
        <div className="thumbnail" style={{border: "none",minHeight: "268px", marginBottom:"0px", padding:"0px"}}>
            <a href={"details-product-123.html"}>
                <img width="275px" src={"assets/images/product/hijab-jogja-store-pasmina-54hijab-jogja-store--33hijab-jogja-store-hijab-nafa-reviana-6hijaber3.jpg"} border="0" className="img-responsive" />
            </a>


            <div className="caption">
                <a href={"details-product-12.html"} onClick="#">
                    <h4 className="product-name text-center small" title="Leona Turban">Nama product</h4>
                    <h4 className="price text-center">Rp 25.000,-<br/><strike className="text-muted"><small>Rp 35.000,-</small></strike></h4> 
                </a>
            </div>
        </div>
    </div>

   

</div>

<div className="row">
    <div className="col-lg-12 text-center">
        <a href={"#"} className="small" onClick="#">Lihat Semua yang Baru Restock &raquo;</a>
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
    );
}
  }
}

export default Home;
