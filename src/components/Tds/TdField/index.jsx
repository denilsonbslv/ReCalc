import { Component } from "react";
import { FieldNumeric } from "../../Fields/FieldNumeric";

import './styles.css';

export class TdField extends Component {
    render() {
        return(
            <td colSpan={5} className="field">
                <FieldNumeric />
            </td>
        )
    }
}