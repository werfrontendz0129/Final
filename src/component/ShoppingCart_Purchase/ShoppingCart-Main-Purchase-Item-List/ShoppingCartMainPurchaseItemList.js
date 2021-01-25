import React from 'react';
import './ShoppingCartMainPurchaseItemList.scss'

function ShoppingCartMainPurchaseItemList({

}) {
    return (
      <>
      <tr className="d-flex justify-content-between">  
                              <th className="d-flex justify-content-between align-items-center" scope="row" width="150" height="140">
                                <div className="aside"><img src="http://localhost:3000/images/檸檬香蜂草禮盒.jpg" className="b-shoppingcart-purchase-img-sm" /></div>
                              </th>
                              <td width="200" height="140">
                                <div className="mt-3 d-flex flex-column"> 
                                  <a href="#" className="b-shoppingcart-purchase-font-size1 text-dark mb-1" data-abc="true">白葉到手香禮盒</a>
                                  <div className="small b-shoppingcart-purchase-font-size2">
                                    <p className="mb-0">白葉到手香緞帶小盆栽 x1</p>
                                    <p className="mb-0">小菜小卡 x1</p>
                                    <p className="mb-0">綠手指指南教學 x1</p>
                                    <p className="mb-0">小菜植物設計專用禮物提盒 x1</p>
                                  </div>
                                </div>
                              </td>
                              <td className="b-shoppingcart-rental-d-flexer" height="140" width="150">
                                <div className="b-shoppingcart-purchase-daily-price-wrap"> 
                                  <p className="b-shoppingcart-purchase-daily-price b-shoppingcart-purchase-font-size3">NT$500</p>
                                </div>
                              </td>
                              <td className="b-shoppingcart-rental-d-flexer" width="150" height="140"> 
                                <div>精緻禮盒</div>
                              </td>
                              <td height="140" width="100" className="b-shoppingcart-purchase-daily-price-wrap justify-content-center">
                               <select className="form-control">
                                    <option>1</option> 
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                              </td>
                              <td className="b-shoppingcart-rental-d-flexer" height="140" width="100">
                                <div >NT$500</div>
                              </td>
                              <td className="b-shoppingcart-rental-d-flexer" width="50">
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
  
  export default ShoppingCartMainPurchaseItemList