import { Component } from "react";
import { Footer } from "../../components/Footer";
import { Presenter } from "../../components/Presenter";
import { Subtitle } from "../../components/Subtitle";
import { TableCalc } from "../../components/TableCalc";
import { Title } from "../../components/Title";

import '../../styles/global-styles.css';

export class Home extends Component {
    render() {
        return (
            <section className="container">
                <Title />
                <Subtitle />
                <Presenter />
                <TableCalc />
                <Footer />
            </section>
        )
    }
}