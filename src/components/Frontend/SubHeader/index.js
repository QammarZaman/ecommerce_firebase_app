import React from "react";
import SubHeader from "./SubHeader";

export default function index({ parentPage, pageName }) {
  return (
    <>
      <SubHeader parentTitle={parentPage} pageTitle={pageName} />
    </>
  );
}
