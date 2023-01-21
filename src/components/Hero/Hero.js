import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello! I am Sergio Jiménez <br />
        This is my portfolio
      </SectionTitle>
      <SectionText>
        I'm a 21 years old, venezuelan, systems engineering student on
        Universidad Santa Maria on Barinas, Venezuela, and JavaScript developer
        using MERN stack, with huge ambitions on building innovative
        applications that can help people.
      </SectionText>
      <Button
        onClick={() =>
          (window.location =
            "https://www.linkedin.com/in/sergio-andres-j-ortizz/")
        }
      >
        Contact
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
