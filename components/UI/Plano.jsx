import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import Image from "next/image";

import classes from "../../styles/plano.module.css";

const Plano = () => {
  return (
    <section id="preços">
      <Container>
        <Row>
          <Col lg="6" className={`${classes.plano__content}`}>
            <SectionSubtitle subtitle="Planos" />
            <div className="mt-5">
              <button className="primary__btn">
                <Link href="https://jurema-pre-os.vercel.app">Ver Planos</Link>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Plano;
