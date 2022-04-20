import React from "react";
import ReactLoading from "react-loading";

export default function Loading({ type, color }) {
  return <ReactLoading type={type} color={color} />;
}
