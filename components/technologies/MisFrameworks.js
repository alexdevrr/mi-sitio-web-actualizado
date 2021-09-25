import styled from '@emotion/styled';
import { useFrameworks } from '../../hooks/useFrameworks';
import {
  ContainerSupremo,
  Title,
  DescripcionCard,
} from '../services/MisServicios';
import Link from 'next/link';
import Image from 'next/image';

const CustomDescripcionCard = styled(DescripcionCard)`
  text-align: center;
  padding: 1rem;

  @media screen and (min-width: 768px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const ContenedorCards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 500px;
  margin: 0 auto;
  flex-wrap: wrap;
`;

const Card = styled.div`
  width: 80px;
  height: 80px;
  margin-left: 1rem;
  margin-top: 1rem;
  padding: 0.5rem;
`;

const MisFrameworks = () => {
  const { frameworks, isloading } = useFrameworks();

  return (
    <ContainerSupremo>
      <Title>Frameworks y tecnologías</Title>
      <CustomDescripcionCard>
        Estas son algunas de las bibliotecas, tecnologías y lenguajes que he
        utilizado en los proyectos que he realizado.
      </CustomDescripcionCard>

      <ContenedorCards>
        {frameworks.map((f) => {
          // console.log(f.Tecnologia);
          return (
            <Card key={f.id}>
              <img
                loading="lazy"
                decoding="async"
                src={`${f.Tecnologia[0].url}`}
                alt={f.Nombre}
                className="img-framework"
              />
            </Card>
          );
        })}
      </ContenedorCards>
    </ContainerSupremo>
  );
};

export default MisFrameworks;
