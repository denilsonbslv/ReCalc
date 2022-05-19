import { Component } from "react";

import { TdButton } from "../Tds/TdButton";
import { TdField } from "../Tds/TdField";

import './styles.css';

export class TableCalc extends Component {
    render() {
        return (
            <table className="tableCalc">
                <tbody>
                    <tr>
                        <TdField />
                    </tr>
                    <tr></tr>
                    <tr>
                        <TdButton
                            typeTd="Num"
                            character={7} />

                        <TdButton
                            typeTd="Num"
                            character={8} />

                        <TdButton
                            typeTd="Num"
                            character={9} />

                        <TdButton
                            typeTd="Act"
                            character={'CE'} />

                        <TdButton
                            typeTd="Act"
                            character={'C'} />
                    </tr>
                    <tr>
                        <TdButton
                            typeTd="Num"
                            character={4} />

                        <TdButton
                            typeTd="Num"
                            character={5} />

                        <TdButton
                            typeTd="Num"
                            character={6} />

                        <TdButton
                            typeTd="Act"
                            character={'÷'} />

                        <TdButton
                            typeTd="Act"
                            character={'X'} />
                    </tr>
                    <tr>
                        <TdButton
                            typeTd="Num"
                            character={1} />

                        <TdButton
                            typeTd="Num"
                            character={2} />

                        <TdButton
                            typeTd="Num"
                            character={3} />

                        <TdButton
                            typeTd="Act"
                            character={'-'} />

                        <TdButton
                            typeTd="Act"
                            character={'+'}
                            rowSpan={2} />
                    </tr>
                    <tr>
                        <TdButton
                            typeTd="Num"
                            character={0}
                            colSpan={2} />

                        <TdButton
                            typeTd="Num"
                            character={"."} />

                        <TdButton
                            typeTd="Act"
                            character={"="} />
                    </tr>
                </tbody>
            </table>
        );
    }
}