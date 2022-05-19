import { Component } from "react";

import './styles.css';

export class BtnAction extends Component {
    render () {
        const {action} = this.props;
        return(
            <button className="button-action">{action}</button>
        )
    }
}