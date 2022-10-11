import React, { useState, useEffect } from 'react';

import './App.css';

import AdvancedFilter from './AdvancedFilter';
import POLine from './POLine';

import {polist} from './data';

import actions from './images/actions.png';
import expand from './images/expand.png';
import Logo from './images/Logo.png';
import paw from './images/paw.png';
import rxfree from './images/rxfree.png';
import sidebar from './images/sidebar.png';
import snow from './images/snow.png';

//ADD
// Estimatedarrival date, upc, pack forms, pack sizes??? with different upcs? 
//qty override for total qty
// if override qty < requested qty, all marked yellow in packaging table
// problem with green light/red light system is what about onhands? that needs to be recorded?
// fast mover status = doesnt wait for stock unless STC

function App() {
    const [show, setShow] = useState(false);
    return (
      <div className="App">
        <div className="tooltip invisible" id="tooltip">TOOLTIP</div>
  
         <div className="topbar"><img src={Logo} className="img-logo" /></div>
      <div className="undertop">
          <div className="sidebar"> <img src={sidebar} className="img-sidebar"/></div>
          <div className="main-section">
              <div className="titlebar">Purchase Order Table</div>
              <div className="working-area">
                  <div className="buttons-and-total">
                      <div className="action-buttons">
                          <span className="btn action-confirm">Receive</span>
                          <span className="btn action-delete date-red">Reverse</span>
                      </div>
                      <div className="total-entries">
                          Total Orders: 212
                      </div>
  
                  </div>
  
                  <div className="advanced-filters">
                      <span onClick={() => setShow(show == true ? false : true)}>+ Advanced Filters</span>
                  </div>
  
                  <AdvancedFilter show={show}/>
  
                  <div className="show-and-search">
                      <div className="show-orders">
                          Show <input type="number" placeholder="10" className="number-of-orders"/> Orders
                      </div>
                      <div className="searchbar">
                          Search: <input type="text" name="" id=""/>
                      </div>
                  </div>
  
                  <div className="main-table">
                      <div className="table table-head bold heading">
                          <div className="table-item table-header">S.No.</div>
                          <div className="table-item table-header"><input type="checkbox" name="" id=""/></div>
                          <div className="table-item table-header">CPO</div>
                          <div className="table-item table-header">Vendor</div>
                          <div className="table-item table-header">Date Range</div>
                          <div className="table-item table-header">Total</div>
                          <div className="table-item table-header">Actions</div>
                      </div>
  
                  <div className="table table-body">
                    {polist.map((e) => {
                      const order_line_props = {order_props: e}
                            return (
                              <POLine props={order_line_props}  />
                            )
                          })}
                  </div>
  
                  </div>
  
  
  
              </div>
          </div>
      </div>
      </div>
    );
  }
  
  export default App;