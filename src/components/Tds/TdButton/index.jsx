import { Component } from "react";
import { BtnAction } from "../../Buttons/BtnAction";
import { BtnNumeric } from "../../Buttons/BtnNumeric";

import './styles.css';

export class TdButton extends Component {

    render() {
        const { character, typeTd, rowSpan = 1, colSpan = 1 } = this.props;

        const td = <td className="tdBtn" rowSpan={rowSpan} colSpan={colSpan}>
            {typeTd === "Num"
                ? <BtnNumeric
                    number={character} />
                : typeTd === "Act"
                    ? <BtnAction
                        action={character} />
                    : ""}
        </td>;

        return (td);
    }
}