import { Card, Grid, Text } from "@nextui-org/react";

import { Button, Row } from "@nextui-org/react";



export default function MenuCadastro(){

    return(<Grid.Container gap={2}>
        <Grid sm={12} md={5}>
            <Card css={{mw: "330px"}}>
                <Card.Header>
                    <Text b>Pessoa Fisica</Text>
                </Card.Header>
                <Card.Divider />
                <Card.Body css={{py: "$10"}}>
                    <Text>Realizar as principais ações de pessoa fisica em nosso banco</Text>
                </Card.Body>
                <Card.Divider />
                <Card.Footer>
                    <Row justify="flex">
                        <Button size="sm">
                            Cadastro de Pessoa Fisica
                        </Button>
                    </Row>
                </Card.Footer>
            </Card>
        </Grid>

        <Grid sm={12} md={5}>
            <Card css={{mw: "330px"}}>
                <Card.Header>
                    <Text b>Pessoa Juridica</Text>
                </Card.Header>
                <Card.Divider/>
                <Card.Body css={{py: "$10"}}>
                    <Text>Realizar as principais açoes de pessoa juridica em nosso banco</Text>
                </Card.Body>
                <Card.Divider />
                <Card.Footer>
                    <Row justify="flex">
                        <Button size="sm">
                            Cadastro de Pessoa Juridica
                        </Button>
                    </Row>
                </Card.Footer>
            </Card>
        </Grid>

    </Grid.Container>);
}