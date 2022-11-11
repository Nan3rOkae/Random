import React from "react";
import {
  Container,
  Button,
  Text,
  Link,
  Col,
  Row,
  Card,
} from "@nextui-org/react";

import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

import background from "../../assets/background.svg";
import FinalHero from "../../assets/FinalHero.svg";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SubHero />
      <LastHero />
      <Footer />
    </>
  );
}
export function Hero() {
  return (
    <Container
      css={{
        display: "flex",
        flexDirection: "column",
        maxW: "100%",
        alignItems: "center",
        minHeight: "30vh",
      }}>
      <Text
        color="black"
        css={{
          display: "flex",
          marginTop: "6%",
          fontSize: "8vh",
          fontWeight: "6%",
        }}>
        Your new way of planning<em style={{marginLeft:"0.8vw"}}>reimagined</em>
      </Text>
      <Button
        auto
        flat
        as={Link}
        href="#"
        size="lg"
        css={{ background: "#56D0A4", marginTop: "6vh" }}>
        <Text color="white">Get Started</Text>
      </Button>
    </Container>
  );
}
export function SubHero() {
  return (
    <Container
      css={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        minHeight: "45vh",
        maxW: "100%",
      }}>
      <Card1 />
      <Card2 />
      <Card3 />
    </Container>
  );
}
export function LastHero() {
  return (
    <Container
      css={{
        display: "flex",
        justifyContent: "start",
        alignItems: "start",
        backgroundImage: `url(${FinalHero})`,
        height: "60vh",
        maxW: "100%",
        flexDirection: "row",
      }}>
      <Container
        css={{
          display: "flex",
          flexDirection: "start",
          width: "30vw",
          height: "30vh",
          marginLeft: "10vw",
          marginTop: "15vh",
        }}>
        <Text
          css={{
            display: "flex",
            fontSize: "4vh",
            color: "white",
            height: "5vh",
          }}
          size={25}>
          Need some tips?
        </Text>
        <Text
          css={{
            display: "flex",
            flexDirection: "column",
            color: "white",
          }}
          size={15}>
          Click here to know ways to prepare and plan task appropriatley and
          more effeciently
        </Text>
        <Text
          css={{
            display: "flex",
            flexDirection: "column",
            color: "white",
          }}
          size={15}>
          How to develope an understanding of how planning can chnage the way
          you live your life
        </Text>
        <Text
          css={{
            display: "flex",
            flexDirection: "column",
            color: "white",
          }}
          size={15}>
          Do what you love doing with a platform that provides all the tools you
          need
        </Text>
        <Button
          auto
          flat
          as={Link}
          href="#"
          size="lg"
          css={{ background: "#56D0A4" }}>
          <Text color="white">Get Tips</Text>
        </Button>
      </Container>
      <Card4 />
    </Container>
  );
}

export const Card1 = () => (
  <Card
    isHoverable
    variant="bordered"
    css={{ width: "20vw", height: "35vh", marginTop: "5vh" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          Feature title
        </Text>
        <Text h4 color="white">
          Info about feature
        </Text>
      </Col>
    </Card.Header>
    <Card.Image
      src="https://nextui.org/images/card-example-4.jpeg"
      objectFit="cover"
      width="100%"
      height="35vh"
      alt="Card image background"
    />
  </Card>
);
export const Card2 = () => (
  <Card
    isHoverable
    variant="bordered"
    css={{ width: "20vw", height: "35vh", marginTop: "5vh" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          Feature title
        </Text>
        <Text h4 color="white">
          Info about feature
        </Text>
      </Col>
    </Card.Header>
    <Card.Image
      src="https://nextui.org/images/card-example-3.jpeg"
      width="100%"
      height="35vh"
      objectFit="cover"
      alt="Card image background"
    />
  </Card>
);
export const Card3 = () => (
  <Card
    isHoverable
    variant="bordered"
    css={{ width: "20vw", height: "35vh", marginTop: "5vh" }}>
    <Card.Header css={{ position: "absolute", top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          Feature title
        </Text>
        <Text h4 color="white">
          Info about feature
        </Text>
      </Col>
    </Card.Header>
    <Card.Image
      src="https://nextui.org/images/card-example-2.jpeg"
      width="100%"
      height="35vh"
      objectFit="cover"
      alt="Card image background"
    />
  </Card>
);

export const Card4 = () => (
  <Card
    isHoverable
    css={{
      w: "30%",
      h: "400px",
      display: "flex",
      marginTop: "7vh",
      marginRight: "10%",
    }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
          Title for tips
        </Text>
        <Text h3 color="white">
          info about tips
        </Text>
      </Col>
    </Card.Header>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src="https://nextui.org/images/card-example-5.jpeg"
        objectFit="cover"
        width="100%"
        height="100%"
        alt="Relaxing app background"
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#0f111466",
        borderTop: "$borderWeights$light solid $gray800",
        bottom: 0,
        zIndex: 1,
      }}>
      <Button flat auto rounded css={{ background: "green" }}>
        <Text css={{ color: "white" }} size={12} weight="bold">
          Get Tips
        </Text>
      </Button>
    </Card.Footer>
  </Card>
);

