import { GetStaticPaths, GetStaticProps } from 'next';

import {
  ContentInspeciton,
  ContentInspectionProps,
} from 'components/ContentInspection';
import { Header } from 'components/Header';

import { api } from 'services/api';

const Inspection = ({ ...props }: ContentInspectionProps) => {
  return (
    <>
      <Header />
      <ContentInspeciton {...props} />
    </>
  );
};

export default Inspection;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params;

  const { data } = await api.get(`/${id}`);

  const inspeciton = {
    id: data.id,
    status: data.status,
    urls: data.urls,
  };

  return {
    props: inspeciton,
  };
};
