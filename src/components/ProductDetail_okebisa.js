import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
//import { Button } from 'reactstrap';

class ProductDetail extends Component {
  render() {
    return (

<div id="sb-site">
    <div className="overlay-background"></div>
    <div className="container marketing">
        <div className="row">
            <div className="col-xs-12 col-md-6 col-md-offset-3">
                <p className="lead"><strong>Deskirpsi product product product</strong></p>
                <h2 className="product-name">Hijab Rawis Katun</h2>
                <p className="text-muted">Kode: H8127</p>
                <p className="brand"><a href="category-brand-123.html">Aisyah Brand</a></p>
            </div>
        </div>
            <div className="row">
                <div className="col-md-offset-3 col-md-6">
                    <div className="thumbnail box-shadow">
                        <div className="container-badge">
                            <div className="badge-tag orange">
                                Baru!
                            </div>
                        </div>
                        <img className="featurette-image img-responsive" width="100%" src={"assets/images/product/hijab-jogja-store-hijab-intan-70hijab-jogja-store-pasmina-motif-101.jpg"} alt="Spring Floral Maxi"/>
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
                                        <a href={"https://api.whatsapp.com/send?phone=6281999758789&text=hai kak mau tanya"} target="_blank">
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
                   
                      <hr className="featurette-divider" />

                      <div className="row featurette">
                        
                        <div className="col-md-6">
                            <div className="thumbnail" style={{border:'none'}}>
                                <img className="featurette-image img-responsive" src={"assets/images/subimages/hijab-jogja-store-pasmina-54hijab-jogja-store--33hijab-jogja-store-hijab-nafa-reviana-6hijaber3.jpg"} alt="Spring Floral Maxi"/>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="thumbnail" style={{border:'none'}}>
                                <img className="featurette-image img-responsive" src={"assets/images/subimages/hijab-jogja-store-pasmina-54hijab-jogja-store--33hijab-jogja-store-hijab-nafa-reviana-6hijaber3.jpg"} alt="Spring Floral Maxi"/>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="thumbnail" style={{border:'none'}}>
                                <img className="featurette-image img-responsive" src={"assets/images/subimages/hijab-jogja-store-pasmina-54hijab-jogja-store--33hijab-jogja-store-hijab-nafa-reviana-6hijaber3.jpg"} alt="Spring Floral Maxi"/>
                            </div>
                        </div>
                        
                        <div className="col-md-6">
                            <div className="thumbnail" style={{border:'none'}}>
                                <img className="featurette-image img-responsive" src={"assets/images/subimages/hijab-jogja-store-pasmina-54hijab-jogja-store--33hijab-jogja-store-hijab-nafa-reviana-6hijaber3.jpg"} alt="Spring Floral Maxi"/>
                            </div>
                        </div>                
                    
                    </div>


                             <div className="row featurette">
                                <div className="col-md-12">
                                <h1 className="product-name text-center"><span>Hijab Rawis</span></h1>
                                      <p className="text-muted text-center small">Kode: H1123
                                    <br/>Aisyah Brand</p>
                                    <p className="brand text-center"><a href="#">Koleksi Aisyah Brand lainnya &raquo;</a></p>
                                    <p className="text-center lead"><b>Bisa juga pesan lewat:</b></p>
                                    <p className="small text-center">INSTAGRAM: <a href={"https:/instagram/hijabjogjastore"}>hijabjogjastore</a></p>
                                    <p className="small text-center">Senin - Jumat: 8 pagi - 8 malam
                                        <br/>Sabtu & Minggu: 8 pagi - 4 sore</p>
                                  
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


                            <hr className="featurette-divider" />


                             <div className="row">
                                <div className="col-lg-12">
                                    <h3 className="featurette-heading">Baru Saja Dipesan Member Lain</h3>
                                    <h4 className="text-center"><mark><small>Stok Tinggal Sedikit Lho!</small></mark></h4>
                                </div>


                                <div className="col-xs-4 col-sm-4 col-md-2 col-recently-purchased">
                                    <div className="thumbnail">
                                        <a href={"details-product-7666.html"} onClick="#">
                                            <img width="275px" src={"assets/images/product/hijab-jogja-store-hijab-intan-70hijab-jogja-store-pasmina-motif-101.jpg"} border="0" className="img-responsive" />
                                        </a>
                                    
                                    </div>
                                </div>

                                <div className="col-xs-4 col-sm-4 col-md-2 col-recently-purchased">
                                    <div className="thumbnail">
                                        <a href={"details-product-7666.html"} onClick="#">
                                            <img width="275px" src={"assets/images/product/hijab-jogja-store-hijab-intan-70hijab-jogja-store-pasmina-motif-101.jpg"} border="0" className="img-responsive" />
                                        </a>
                                    
                                    </div>
                                </div>

                                <div className="col-xs-4 col-sm-4 col-md-2 col-recently-purchased">
                                    <div className="thumbnail">
                                        <a href={"details-product-7666.html"} onClick="#">
                                            <img width="275px" src={"assets/images/product/hijab-jogja-store-hijab-intan-70hijab-jogja-store-pasmina-motif-101.jpg"} border="0" className="img-responsive" />
                                        </a>
                                    
                                    </div>
                                </div>

                                <div className="col-xs-4 col-sm-4 col-md-2 col-recently-purchased">
                                    <div className="thumbnail">
                                        <a href={"details-product-7666.html"} onClick="#">
                                            <img width="275px" src={"assets/images/product/hijab-jogja-store-hijab-intan-70hijab-jogja-store-pasmina-motif-101.jpg"} border="0" className="img-responsive" />
                                        </a>
                                    
                                    </div>
                                </div>


                            </div>




                           
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <a href="product.html">Lihat Semua Product &raquo;</a>
                                </div>
                            </div>


                        </div>


                        <div className="container pre-footer text-center">
                            <p className="lead text-center"><b>Sudah Pesan?</b></p>
                            <ul className="nav nav-pills nav-justified">
                                <li role="presentation"><a href="konfirmasi.html" role="menuitem">Konfirmasi
                                Pembayaran &raquo;</a></li>
                                <li role="presentation"><a href="status_pemesanan.html" role="menuitem">Lacak
                                Pesanan &raquo;</a></li>
                            </ul>
                        </div>

                    </div>




    );
  }
}

export default ProductDetail;