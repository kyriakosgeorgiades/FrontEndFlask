import React from 'react';
import CarCardItem from '../../components/CarCardItem';
import CarDetailsCardItem from '../../components/CarDetailsCardItem';
import Header from '../../components/Header';

export default function Details() {
  return (
    <>
    <Header title="Car Info" />
        <CarDetailsCardItem />
    </>
  );
}
