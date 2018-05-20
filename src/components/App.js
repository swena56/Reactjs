import React, { Component } from 'react';
import NavBar from './nav/NavBar';
import Footer from './nav/Footer';
import Page from './containers/Page'

import LeaveComment from './forms/LeaveComment';

import Faker from 'faker';

import LazyLoad from 'react-lazy-load';

export default class App extends Component {
  render() {
    return (<Page> 
        		<NavBar title="AFS" />
            <br/>
            <div> {Faker.Lorem.paragraphs()} </div>

            <div className="container">
              <div className="row">
                <div className="col-3">
                    <img width="250" height="250" src="https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png" />
                </div>
                <div class="col-9">
                    <div> {Faker.Lorem.paragraphs()} </div>        
                </div>
              </div>
            </div>

        		<div> {Faker.Lorem.paragraphs()} </div>

            <LazyLoad>
              <LeaveComment/>
            </LazyLoad>

            
            <br/>
            <br/>
            <br/>
        		<Footer>
            
            </Footer>
        	</Page>
        	);
   }
}
