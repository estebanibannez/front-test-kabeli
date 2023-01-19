import SerieList from "@/components/Cards/SerieList";
import { SerieT } from "@/types/serieType";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Center,
  Container,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { GetStaticProps, InferGetServerSidePropsType } from "next";

import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

const IndicatorDetail = ({
  data: { codigo, nombre, unidad_medida, serie },
}: any) => {
  return (
    <Container py={6} ml={40} mr={40}>
      <Card>
        <CardHeader>
          <Link as={NextLink} href="/">
            <Button>Go back</Button>
          </Link>
        </CardHeader>

        <CardBody>
          <Box w={"full"} rounded={"md"} overflow={"hidden"}>
            <Stack direction={"row"} justify={"center"} spacing={6}>
              <Stack spacing={0} align={"center"}>
                <Text fontWeight={600} textTransform="uppercase">
                  {nombre}
                </Text>
                <Heading size="md">{codigo}</Heading>
                <Text fontSize={"sm"}>{unidad_medida}.</Text>
              </Stack>
            </Stack>
          </Box>
          <Heading size="xs" textTransform="uppercase">
            SERIE
          </Heading>
          <Stack divider={<StackDivider />} spacing="2">
            {serie.map(({ fecha, valor }: SerieT, i: number) => (
              <SerieList key={i} fecha={fecha} valor={valor} />
            ))}
            <Box></Box>
          </Stack>
        </CardBody>
      </Card>
      <Link as={NextLink} href="/">
        <Button>Go back</Button>
      </Link>
    </Container>
  );
};

export const getServerSideProps: GetStaticProps = async ({
  query: { id },
}: any) => {
  const res = await fetch(
    `https://kabeli-api-production.up.railway.app/api/indicators/${id}`,
  );
  const data: any[] = await res.json();

  console.log(data);
  return {
    props: {
      data,
    },
  };
};

export default IndicatorDetail;
