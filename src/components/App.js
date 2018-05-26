import React, { Component } from 'react';
//import NavBar from './nav/NavBar';
import Footer from './nav/Footer';
import Page from './containers/Page'

import LeaveComment from './forms/LeaveComment';

import Faker from 'faker';
import DailyRoutine from "./apps/timeline/daily-routine";
import Calculator from "./apps/calculator/calculator";
import Anticipation from "./apps/anticipation/anticipation";
import DevDraw from "./apps/anticipation/dev-draw";
import Dice from "./apps/anticipation/Dice/dice";

export default class App extends Component {
  render() {
    return (<Page>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">AFS</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className="nav-link active" data-toggle="tab" href="#home">Daily Routine</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " data-toggle="tab" href="#menu1">Misc</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#menu2">Comments</a>
                        </li>
                    </ul>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">

                            <a className="dropdown-item" href="#">Another action</a>
                            <div className="dropdown-divider"></div>
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <a className="nav-link active" data-toggle="tab" href="#home">Routine</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " data-toggle="tab" href="#menu1">Misc</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#menu2">Comments</a>
                                </li>
                            </ul>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>

            <div className="tab-content">
                <div className="tab-pane container active" id="home">
                    <DailyRoutine/>
                </div>
                <div className="tab-pane container fade" id="menu1">
                    <div className="container">
                        <Calculator/>
                        <div className="row"> {Faker.Lorem.paragraphs()} </div>
                        <div className="row">
                            <div className="col-3">
                                <img width="250" height="250"
                                     src="https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png"/>
                            </div>
                            <div className="col-9">
                                <div> {Faker.Lorem.paragraphs()} </div>
                            </div>
                        </div>
                        <div className="row"> {Faker.Lorem.paragraphs()} </div>
                        <div className="row"> {Faker.Lorem.paragraphs()} </div>
                        <div className="row"> {Faker.Lorem.paragraphs()} </div>
                    </div>
                </div>
                <div className="tab-pane container fade" id="menu2">
                        <LeaveComment/>
                </div>
            </div>



            
            <br/>
            <br/>
            <br/>
        		<Footer name={"AFS 2018"}>
            
                </Footer>
        	</Page>
        	);
   }
}
