'use client';
import { FunctionComponent, ReactElement, useState } from 'react';

import { CarProps } from '@/types';
import { CustomButton } from '@/components';
import { calculateCarRent } from '@/utils';

interface CarCardProps {
  car: CarProps;
}

const CarCard: FunctionComponent<CarCardProps> = ({ car }): ReactElement => {
  const { city_mpg, year, make, model, transmission, drive } = car;

  const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p>
        <span></span>
      </p>
    </div>
  );
};

export default CarCard;
