import React, { FC } from "react";
import { Inter } from "@next/font/google";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import {
  Card,
  CardBody,
  CardHeader,
  Container,
  Heading,
  Text,
} from "@chakra-ui/react";

type indicatorT = {
  item: {
    nombre: string;
    codigo: string;
    unidad_medida: string;
    valor: string;
    fecha: string;
  };
};

const inter = Inter({ subsets: ["latin"] });
const IndicatorCard: FC<any> = ({
  item: { nombre, codigo, unidad_medida, valor, fecha },
}: indicatorT) => {
  return (
    <>
      <Container>
        <Card>
          <Link className={styles.card} href={`indicator/${codigo}`}>
            <CardHeader>
              <Heading size="md" className={inter.className}>
                {codigo.toUpperCase()} <span>-&gt;</span>
              </Heading>
            </CardHeader>

            <CardBody>
              <Text className={inter.className}>{nombre}</Text>
              <Text className={inter.className}>
                Unidad medida: {unidad_medida}
              </Text>
              <Text className={inter.className}>Valor: {valor}</Text>
              <Text className={inter.className}>
                Fecha: {new Date(fecha).toLocaleString()}
              </Text>
            </CardBody>
          </Link>
        </Card>
      </Container>
    </>
  );
};

export default IndicatorCard;
