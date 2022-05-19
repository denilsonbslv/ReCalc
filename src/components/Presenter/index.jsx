import { Component } from "react";

import './styles.css';

export class Presenter extends Component {
    render() {
        return(
            <img className="imgPresenter" src={require('./imgPresenter.png')} alt="" />
        );
    }
}