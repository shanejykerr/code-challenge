import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';
import Layout from '../components/Layout';
import '../../css/bootstrap/bootstrap.min.css';
import '../../../dist/custom.css';


ReactDOM.render(
    <BrowserRouter>
        <Layout/>
    </BrowserRouter>,
    document.getElementById("layout")
);