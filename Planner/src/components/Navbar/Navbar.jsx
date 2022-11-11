import React from "react";
import { Navbar, Button, Link, Text } from "@nextui-org/react";
import { Layout } from "./Layout";
import { AcmeLogo } from "./AcmeLogo";

export default function Navigation() {
  const [variant, setVariant] = React.useState("static");

  return (
    <Layout>
      <Navbar isBordered variant={variant}>
        <Navbar.Brand>
          <AcmeLogo />
          <Link href="/">
            <Text b color="black" hideIn="xs">
              Planner.com
            </Text>
          </Link>
        </Navbar.Brand>
        <Navbar.Content>
          <Navbar.Item>
            <Button
              auto
              flat
              as={Link}
              href="#"
              css={{ background: "#56D0A4", marginTop: "15%" }}>
              <Text color="white">Get Started</Text>
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
    </Layout>
  );
}
