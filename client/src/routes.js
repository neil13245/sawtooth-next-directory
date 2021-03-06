/* Copyright 2018 Contributors to Hyperledger Sawtooth

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
----------------------------------------------------------------------------- */


import React from 'react';


import RequesterHome from './containers/requester/RequesterHome';
import RequesterNav from './components/nav/RequesterNav';
import Requests from './containers/requester/Requests';
import Recommended from './containers/requester/Recommended';
import Packs from './containers/requester/Packs';


import ApproverHome from './containers/approver/ApproverHome';
import ApproverNav from './components/nav/ApproverNav';
import Batch from './containers/approver/Batch';
import Roles from './containers/approver/Roles';
import Individuals from './containers/approver/Individuals';
import Frequent from './containers/approver/Frequent';
import Expiring from './containers/approver/Expiring';


/**
 * 
 * Destructured routes
 * 
 * The routes in this array are destructured from the declarative
 * syntax due to the added complexity of navigation and state.
 * 
 * State is sent top-down via props to the main and nav
 * components.
 * 
 */
const routes = (props) => [

  /**
   * 
   * Requester routes
   * 
   * 
   * 
   */

  {
    path:   '/home',
    main:   (rest) => <RequesterHome {...props} {...rest}/>,
    nav:    () => <RequesterNav {...props}/>,
    exact:  true
  },
  {
    path:   '/home/requests/:id',
    main:   (rest) => <Requests {...props} {...rest}/>,
    nav:    () => <RequesterNav {...props}/>,
    exact:  true
  },
  {
    path:   '/home/recommended/:id',
    main:   (rest) => <Recommended {...props} {...rest}/>,
    nav:    () => <RequesterNav {...props}/>,
    exact:  true
  },
  {
    path:   '/home/packs/:id',
    main:   (rest) => <Packs {...props} {...rest}/>,
    nav:    () => <RequesterNav {...props}/>,
    exact:  true
  },

  
  /**
   * 
   * Approver routes
   * 
   * 
   * 
   */

  {
    path:   '/approval-home',
    main:   (rest) => <ApproverHome {...props} {...rest}/>,
    nav:    () => <ApproverNav {...props}/>,
    exact:  true
  },
  {
    path:   '/approval-home/pending/batch',
    main:   (rest) => <Batch {...props} {...rest}/>,
    nav:    () => <ApproverNav {...props}/>,
    exact:  true
  },
  {
    path:   '/approval-home/pending/roles',
    main:   (rest) => <Roles {...props} {...rest}/>,
    nav:    () => <ApproverNav {...props}/>,
    exact:  true
  },
  {
    path:   '/approval-home/pending/individuals',
    main:   (rest) => <Individuals {...props} {...rest}/>,
    nav:    () => <ApproverNav {...props}/>,
    exact:  true
  },
  {
    path:   '/approval-home/pending/frequent',
    main:   (rest) => <Frequent {...props} {...rest}/>,
    nav:    () => <ApproverNav {...props}/>,
    exact:  true
  },
  {
    path:   '/approval-home/pending/about-to-expire',
    main:   (rest) => <Expiring {...props} {...rest}/>,
    nav:    () => <ApproverNav {...props}/>,
    exact:  true
  }

];

export default routes;
