import { Fragment } from "react";
import Hero from "../components/UI/Hero";
import Services from "../components/UI/Services";
import About from "../components/UI/About";
import Plano from "../components/UI/Plano";


export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Services />
      <About />
      <Plano />
    </Fragment>
  );
}
