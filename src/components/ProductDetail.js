import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import axios from 'axios';
import ReactLoading from 'react-loading';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
//import { Button } from 'reactstrap';

class ProductDetail extends Component {


constructor(props) {
      super(props);  
       this.state = {
        error:null,
        isLoaded: false,

        listData:[], 
        subImage:[],


  };
    
  }

  componentDidMount(){   

  const {id} = this.props.match.params


 // axios.get('http://localhost/api-hijabootd-v2/productdetail/'+id)
 axios.get('https://hijabootd.ruangprogrammer.com/apiv2/product/'+id)
   .then(response => {   
    console.log(response.data['data_prod'][0]['product_name']);
       this.setState({  isLoaded: true,

                      //  listData: response.data["data_image"],
                        listData: response.data["data_image"],
                        product_images : response.data['data_prod'][0]['product_images'], 
                        product_name : response.data['data_prod'][0]['product_name'], 
                        subImage: response.data['data_image'],


                     });
      })
   .catch(function (error) {
     isLoaded: true,
      error
     //console.log(error);
   })
 }





  render() {
         const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading.......</div>
    } else {
    return (

<div id="sb-site" style={{marginTop:"4%"}}>
    <div className="overlay-background"></div>
    <div className="container marketing">
        <div className="row">
            <div className="col-xs-12 col-md-6 col-md-offset-3">
                <p className="lead"><strong>Deskirpsi product product product</strong></p>
                <h2 className="product-name">Hijab Rawis Katun</h2>
                <p className="text-muted">Kode: H8127</p>
                <p className="brand"><a href={"category-brand-123.html"}>Aisyah Brand</a></p>
            </div>
        </div>
        <div className="row">
            <div className="col-md-offset-3 col-md-6">
                <div className="thumbnail box-shadow" style={{padding: "10px"}}>
                    <div className="container-badge">
                        <div className="badge-tag orange">
                            Baru!
                        </div>
                    </div>
                    <img className="featurette-image img-responsive" width="100%" src={this.state.product_images} alt="Spring Floral Maxi"/>
                    <p className="product-price lead featurette-divider">
                        Harga Khusus PO

                        <br/>Hanya Rp. 25.000
                        <br/><strike className="text-muted small">Rp. 35.000</strike>
                    </p>
                    <p className="lead"></p>
                    <ul className="list-unstyled">
                        <li><strong>Warna: merah marun </strong></li>
                        <li>
                            <strong>Bahan: Katun jepang </strong></li>
                        </ul>
                        <ul className="list-unstyled">
                        </ul>
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <span className="glyphicon glyphicon-ok"></span> Produk Harga Spesial, Siap Kirim 1-3 minggu
                                <br/>
                                <span className="glyphicon glyphicon-thumbs-up"></span> Tidak Pas? Bisa ditukar.
                            </div>
                        </div>
                        <label>Jumlah</label>
                        <select className="pecart-add-quantity form-control input-block-level">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                        </select>
                        <br/>
                        <a href="#" target="_blank">
                          <button type="submit" className="btn btn-warning btn-lg btn-block" value="Saya Ingin Pesan">Saya Ingin Pesan <span className="glyphicon glyphicon-chevron-right"></span></button> 
                      </a>


                      <div className="featurette-divider">
                        <label>Warna Lain:</label>
                        <ul className="list-unstyled list-inline">

                            <li>
                                <a href="#">
                                  <img className="thumbnail" src={"assets/images/subimages/hijab-jogja-store-pasmina-54hijab-jogja-store--33hijab-jogja-store-hijab-nafa-reviana-6hijaber3.jpg"} width="84" border="0"/> 
                              </a>
                          </li>

                          <li>
                            <a href="#">
                              <img className="thumbnail" src={"assets/images/subimages/hijab-jogja-store-pasmina-54hijab-jogja-store--33hijab-jogja-store-hijab-nafa-reviana-6hijaber3.jpg"} width="84" border="0"/> 
                          </a>
                      </li>

                      <li>
                        <a href="#">
                          <img className="thumbnail" src={"assets/images/subimages/hijab-jogja-store-pasmina-54hijab-jogja-store--33hijab-jogja-store-hijab-nafa-reviana-6hijaber3.jpg"} width="84" border="0"/> 
                      </a>
                  </li>

                  <li>
                    <a href="#">
                      <img className="thumbnail" src={"assets/images/subimages/hijab-jogja-store-pasmina-54hijab-jogja-store--33hijab-jogja-store-hijab-nafa-reviana-6hijaber3.jpg"} width="84" border="0"/> 
                  </a>
              </li>
          </ul>
            </div>
        </div>
        </div>
</div>
<hr className="featurette-divider"/>
<div className="row featurette">

 {this.state.subImage.map(list => {
                  return (
    <div className="col-md-6">
        <div className="thumbnail" style={{border:"none"}}>
        <img className="featurette-image img-responsive" src={list.gambar} alt="Spring Floral Maxi"/>
        </div>
    </div>
    )
})}





</div>


<div className="row featurette">
            <div className="col-md-12">
                <h1 className="product-name text-center"><span style={{fontSize:"0.6em",fontStyle:"italic"}}>Hijab Rawis</span></h1>
                <p className="text-muted text-center small">Kode: H1123
                    <br/>Aisyah Brand</p>
                    <p className="brand text-center"><a href="#">Koleksi Aisyah Brand lainnya »</a></p>
                    <p className="text-center lead"><b>Bisa juga pesan lewat:</b></p>
                    <p className="small text-center">INSTAGRAM: <a href={"https:/instagram/hijabjogjastore"}>hijabjogjastore</a></p>
                    <p className="small text-center">Senin - Jumat: 8 pagi - 8 malam
                        <br/>Sabtu &amp; Minggu: 8 pagi - 4 sore</p>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12 marketing">

                <p className="lead text-center"><b>Busana Muslim &amp; Hijab</b></p>
                <ul className="nav nav-pills nav-justified">

                    <li role="presentation"><a role="menuitem" tabindex="-1" href="">Nama Kategori</a></li>
                    <li role="presentation"><a role="menuitem" tabindex="-1" href="">Nama Kategori</a></li>
                    <li role="presentation"><a role="menuitem" tabindex="-1" href="">Nama Kategori</a></li>

                </ul>
            </div>
        </div>


        <hr className="featurette-divider"/>
        <div className="row">
            <div className="col-lg-12">
                <h3 className="featurette-heading" style={{fontSize:"18px",textAlign:"center"}}>Baru Saja Dipesan Member Lain</h3>
                <h4 className="text-center"><mark><small>Stok Tinggal Sedikit Lho!</small></mark></h4>
            </div>
            <div className="col-xs-4 col-sm-4 col-md-2 col-recently-purchased">
                <div className="thumbnail" style={{border: "none",minHeight: "268px",marginBottom:"0px",padding:"0px"}}>
                    <a href={"details-product-7666.html"} onclick="#">
                        <img width="275px" src={"assets/images/product/hijab-jogja-store-hijab-intan-70hijab-jogja-store-pasmina-motif-101.jpg"} border="0" className="img-responsive"/>
                    </a>
                    <div className="caption">
                        <a href="#" onclick="#">
                            <h4 className="product-name text-center small" title="Leona Turban">Hijab Rawis</h4>

                            <h4 className="price text-center">Rp 25.000<br/><strike className="text-muted"><small>Rp 35.000</small></strike></h4> 

                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-lg-12 text-center">
                <a href={"product.html"}>Lihat Semua Product »</a>
            </div>
        </div>
    </div>

    <div className="container pre-footer text-center">
        <p className="lead text-center"><b>Sudah Pesan?</b></p>
        <ul className="nav nav-pills nav-justified">
            <li role="presentation"><a href={"konfirmasi.html"} role="menuitem">Konfirmasi
            Pembayaran »</a></li>
            <li role="presentation"><a href={"status_pemesanan.html"} role="menuitem">Lacak
            Pesanan »</a></li>
        </ul>
    </div>
</div>



    );
  }
}
}

export default ProductDetail;