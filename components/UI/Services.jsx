import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/services.module.css";
import ServicesItem from "./ServicesItem";

const Services = () => {
  return (
    <section id="services">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className={`${classes.services__container}`}>
              <div>
                <ServicesItem title="Aplicação Sempre Online 24/7" icon="ri-apps-line" />

                <ServicesItem title="WebSite Próprio" icon="ri-computer-line" />
              </div>

              <ServicesItem
                title="Utilização De Apis"
                icon="ri-code-s-slash-line"
              />
            </div>
          </Col>

          <Col lg="6" md="6" className={`${classes.service__title}`}>
            <SectionSubtitle subtitle="Quem Eu Sou" />
            <h3 className="mb-0 mt-4">Mais Proteção!</h3>
            <h3 className="mb-4">Mais Automatização!</h3>
            <p>
              A Jurema é um bot para Whatsapp que foi criada com a intenção de
              proteger grupos e para o entreterimento.
              <br /> <br />E também é um bot que busca dados: CPF, TELEFONE E CNPJ
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
