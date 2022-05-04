import React from "react";

interface StationCardTypes {
  name: string;
}

export const StationCard = ({ name }: StationCardTypes) => {
  return <div>{name}</div>;
};
