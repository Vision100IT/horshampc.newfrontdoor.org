/* eslint-disable */
import React, { Component } from 'react';
import logo from '../assets/img/logo.png';

class Navigation extends Component {
  render() {
    return (
      <header className="header-1 region-0 block-0">
        <div className="container">
          <div className="row">

            <div id="logo-region" className="logo col-xs-12 col-md-3 text-center-sm">
              <a href="/"><img src={logo} alt="Home" className="logo" /></a>
            </div> {/* /logo-region */}

            <div id="menu-region" className="col-xs-12 col-md-9">
              <div className="region region-header">

                <div className="block block-menu hidden-md hidden-lg">


                  <div className="content">

                    <nav className="navbar nestor-main-menu" role="navigation">
                      {/* Menu button for mobile display */}
                      <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">MENU</button>
                      </div>

                      {/* Navigation links */}
                      <div className="collapse navbar-collapse navbar-ex1-collapse">
                        <ul className="nav navbar-nav navbar-right">
                          <li className="active"><a href="/" title="" className="active">Home</a></li>
                          <li><a href="#" title="">Visit us @ 10am Sundays</a></li>
                          <li><a href="#" title="">Sermons</a></li>
                          <li><a href="#" title="">Vision Statement</a></li>
                          <li><a href="#" title="">Contact Us</a></li>
                          <li><a href="#" title="">What to Expect at Church</a></li>
                        </ul>
                      </div> {/* /navbar-collapse */}
                    </nav>
                  </div>
                </div>

                <div className="block block-tb-megamenu">


                  <div className="content">
                    <div className="tb-megamenu tb-megamenu-main-menu">

                      <div className="nav-collapse  always-show">
                        <ul className="tb-megamenu-nav nav level-0 items-5">
                          <li className="tb-megamenu-item level-1 mega dropdown">
                            <a href="javascript:void(0);" className="dropdown-toggle" title="Visit Us">

                              Home         <span className="caret"></span>
                            </a>
                            <div style={{ width: "750px" }} className="tb-megamenu-submenu dropdown-menu mega-dropdown-menu nav-child">
                              <div className="mega-dropdown-inner">
                                <div className="tb-megamenu-row row-fluid">
                                  <div className="tb-megamenu-column span3  mega-col-nav">
                                    <div className="tb-megamenu-column-inner mega-inner clearfix">
                                      <div className="tb-megamenu-block tb-block tb-megamenu-block">
                                        <div className="block-inner">

                                          <div className="block block-block">


                                            <div className="content">
                                              <h3>Welcome to Horsham Presbyterian Church...</h3>  </div>
                                          </div>  </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="tb-megamenu-column span3  mega-col-nav">
                                    <div className="tb-megamenu-column-inner mega-inner clearfix">
                                      <ul className="tb-megamenu-subnav mega-nav level-1 items-4">
                                        <li className="tb-megamenu-item level-2 mega">
                                          <a href="#" title="Sundays"></a>
                                        </li>

                                        <li className="tb-megamenu-item level-2 mega">
                                          <a href="/ContactUs" >Contact Us</a>
                                        </li>

                                        <li className="tb-megamenu-item level-2 mega">
                                          <a href="/OrderOfService" >Order of Service</a>
                                        </li>

                                        <li className="tb-megamenu-item level-2 mega">
                                          <a href="/VisionStatement" >Vision Statement</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>

                                  <div className="tb-megamenu-column span3  mega-col-nav">
                                    <div className="tb-megamenu-column-inner mega-inner clearfix">
                                      <ul className="tb-megamenu-subnav mega-nav level-1 items-4">
                                        <li className="tb-megamenu-item level-2 mega">
                                          <a href="#" title="Community Life"></a>
                                        </li>

                                        <li className="tb-megamenu-item level-2 mega">
                                          <a href="/GospelAndCulture" >Gospel and Culture</a>
                                        </li>

                                        <li className="tb-megamenu-item level-2 mega">
                                          <a href="/Links" >Links</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>


                                  <div className="tb-megamenu-column span3  mega-col-nav">
                                    <div className="tb-megamenu-column-inner mega-inner clearfix">
                                      <ul className="tb-megamenu-subnav mega-nav level-1 items-4">
                                        <li className="tb-megamenu-item level-2 mega">
                                          <a href="#" title="About">About Us</a>
                                        </li>

                                        <li style={{ display: "none" }} className="tb-megamenu-item level-2 mega">
                                          <a href="/HolidayClub2019" title="Welcome">Holiday Club: January 2019</a>
                                        </li>

                                        <li className="tb-megamenu-item level-2 mega">
                                          <a href="/WhatToExpect" >What to expect at Church</a>
                                        </li>

                                        <li className="tb-megamenu-item level-2 mega">
                                          <a href="/PCV" >PCV</a>
                                        </li>
                                        <li className="tb-megamenu-item level-2 mega">
                                          <a href="/Staff" >Staff</a>
                                        </li>
                                        <li className="tb-megamenu-item level-2 mega">
                                          <a href="/ShortHistory" >Short History</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>




                          <li className="tb-megamenu-item level-1 mega">
                            <a href="/Sermons" >Sermons</a>
                          </li>
                          <li className="tb-megamenu-item level-1 mega">
                            <a href="http://www.safechurchpcv.org.au/#intro" target="_blank" rel="noreferrer noopener">Safe Church</a>
                          </li>
                          <li className="tb-megamenu-item level-1 mega">
                            <a href="/Jesus">Jesus?</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>  </div>
            </div> {/* /menu-region */}

          </div> {/* /row */}
        </div> {/* /container */}
      </header>
    );
  }
}

export default Navigation;