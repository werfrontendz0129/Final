import React from 'react';
import './ShoppingCartMainRentalItemList.scss'

function ShoppingCartMainItemList(props) {
  const {cartItems} = props;
    return (
      <>
      <tr className="d-flex justify-content-between">  
                              <th className="d-flex justify-content-between align-items-center" scope="row" width="145" height="140">
                                <div className="aside"><img src="http://localhost:3000/images/小天使大型植栽1.jpg" className="b-shoppingcart-reantal-itemlist-img-sm" /></div>
                              </th>
                              <td width="205" height="140">
                                <div className="mt-3 b-shoppingcart-reantal-itemlist-d-flexer flex-column"> 
                                  <a href="#" className="b-shoppingcart-reantal-itemlist-font-size1 text-dark" data-abc="true">琴葉榕大型植栽</a>
                                  <p className="text-muted small b-shoppingcart-reantal-itemlist-font-size2">9 cm x 9 cm x 總高約 27-33 cm <br /> 霧面白盆栽</p>
                                </div>
                              </td>
                              <td className="b-shoppingcart-reantal-itemlist-d-flexer" height="140" width="100">
                                <div className="b-shoppingcart-rental-itemlist-daily-price-wrap"> 
                                  <p className="b-shoppingcart-rental-itemlist-daily-price b-shoppingcart-reantal-itemlist-font-size3">NT$500</p>
                                  <p className="b-shoppingcart-rental-itemlist-daily-price b-shoppingcart-reantal-itemlist-font-size3"> /日 </p> 
                                </div>
                              </td>
                              <td className="b-shoppingcart-reantal-itemlist-d-flexer flex-column" width="200" height="140"> 
                                <p style={{fontSize: 12, margin: 0}}>開始租賃日期<input className="form-control p-0" type="date" value="2020-10-20" style={{width: 150, height: 35, textAlign: "center"}} /></p>
                                <p style={{fontSize: 12, margin: 0}}>結束租賃日期<input className="form-control p-0" type="date" value="" style={{width: 150, height: 35, textAlign: "center"}} /></p>
                              </td>
                              <td height="140" width="100" className="b-shoppingcart-rental-itemlist-daily-price-wrap justify-content-center">
                               <select className="form-control">
                                    <option>1</option> 
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                              </td>
                              <td className="b-shoppingcart-reantal-itemlist-d-flexer" height="140" width="100">
                                <div >NT$1700</div>
                              </td>
                              <td className="b-shoppingcart-reantal-itemlist-d-flexer" width="50">
                                {/* <a data-original-title="Save to Wishlist" title="" href="" className="btn btn-light" data-toggle="tooltip" data-abc="true" /> */}
                                <button type="button" className="close" aria-label="Close">
                                <span>&times;</span>
                                </button>
                              </td>
                          </tr>
                          <tr>
                            <td className="p-0"><div style={{ width:'100%', height: 1, borderTop: '1px solid #D1CFCF', padding:'0%'}} ></div></td>
                          </tr>
      </>
    );
  }
  
  export default ShoppingCartMainItemList