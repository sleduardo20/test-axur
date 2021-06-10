import { Params } from 'next/dist/next-server/server/router';
import { GetServerSideProps } from 'next';

import {
  ContentInspeciton,
  ContentInspectionProps,
} from 'components/ContentInspection';
import { Header } from 'components/Header';

import { api } from 'services/api';

const Inspection = ({ id, status, urls }: ContentInspectionProps) => {
  return (
    <>
      <Header />
      <ContentInspeciton id={id} status={status} urls={urls} />
    </>
  );
};

export default Inspection;

export const getServerSideProps: GetServerSideProps = async ({
  params,
}: Params) => {
  const { id } = params;

  const { data } = await api.get(`/${id}`);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      id: data.id,
      status: data.status,
      urls: data.urls,
    },
  };
};
