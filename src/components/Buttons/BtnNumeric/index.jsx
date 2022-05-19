import { Component } from "react";

import './styles.css';

export class BtnNumeric extends Component {
    render (){
        const {number} = this.props;
        return(
            <button className="button-number">{number}</button>
        )
    }
}