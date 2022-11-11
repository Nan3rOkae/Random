import React from "react";
import { Container, Text, Link } from "@nextui-org/react";
import Linkdin from "../../assets/Linkdin.svg";
import Github from "../../assets/Github.svg";
import { AcmeLogo } from "../Navbar/AcmeLogo";
import background from "../../assets/background.svg";

export default function Footer() {
  return (
    <Container
      css={{
        display: "flex",
        justifyContent: "center",
        // backgroundImage: `url(${background})`,
        minHeight: "20vh",
        maxW: "100vw",
      }}>
      <Container
        css={{
          // background: "purple",
          height: "16vh",
          marginTop: "3vh",
        }}>
        <Container
          css={{
            diaply: "flex",
            flexDirection: "row",
            // background: "blue",
            height: "10vh",
          }}>
          <Container
            css={{
              display: "flex",
              flexDirection: "row",
              width: "15vw",
              // background: "green",
              margin: 0,
            }}>
            <AcmeLogo />
            <Link href="/">
              <Text b color="black" hideIn="xs">
                Planner.com
              </Text>
            </Link>
          </Container>
          <Text
            b
            color="black"
            css={{ display: "flex", justifyContent: "center" }}>
            Developed by Nana Kofi Okae
          </Text>
          <Text
            css={{ display: "flex", justifyContent: "center" }}>
            VCU Computer Science student 
          </Text>
        </Container>
        <hr color="grey" width="80%"></hr>
        <Container
          css={{
            display: "flex",
            // background: "green",
            justifyContent: "center",
            marginTop: "1vh",
          }}>
          <a href="https://github.com/Nan3rOkae" target="_blank">
            <img src={Github} width="25vw" style={{ marginRight: "1vw" }} />
          </a>
          <a href="https://www.linkedin.com/in/nana-kofi-okae/" target="_blank">
            <img src={Linkdin} width="25vw" style={{ marginLeft: "1vw" }} />
          </a>
        </Container>
      </Container>
    </Container>
  );
}
