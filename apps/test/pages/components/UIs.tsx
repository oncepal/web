import { Button, Container, Grid, OPUIProvider, Row } from "@oncepal/ui";

export default function Page() {
  return (
    <OPUIProvider>
      <Row pa="1em" gap="1em" >
        
        <Button>hello world</Button>
        <Button>hello world</Button>
      </Row>
    </OPUIProvider>
  );
}
