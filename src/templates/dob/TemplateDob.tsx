import styled from "@emotion/styled";
import { TemplateProps } from "@tradetrust-tt/decentralized-renderer-react-components";
import { format } from "date-fns";
import React, { FunctionComponent, useState } from "react";
import { DocumentQrCode } from "../../core/DocumentQrCode";
import { Wrapper } from "../../core/Wrapper";
import { getDocumentData, getQRCodeLink } from "../../utils";
import { TemplateDob, TemplateDobSchemaV2 } from "./types";

const CustomStyles = styled.div`
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
  position: relative;

  h1 {
    color: #4172af;
    font-size: 40px;
    font-weight: 700;
  }

  h2 {
    color: #4172af;
    font-size: 28px;
    font-weight: 700;
  }

  .bg-blue {
    background-color: #4172af;
    color: #fff;
  }

  th {
    background-color: #4172af;
    color: white;
  }

  .table-responsive {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
`;

export const DOBTemplate: FunctionComponent<
  TemplateProps<TemplateDobSchemaV2>
> = ({ document }) => {
  const documentData = getDocumentData(document) as TemplateDob;
  const { id, documentLoadUrl, documentUrl } = documentData;

  // documentUrl in this case is "https://vdp.docsonblocks.com/api/otfile-by-id/686221f629b93b733427331c", where the same file resides. i dont understand this part.
  // documentLoadUrl in this case is "https://vdp.docsonblocks.com/" which is your website.
  /*
  If you want to have a qr code function u can reference our QR code. https://docs.tradetrust.io/docs/how-tos/implementing-qr-codes
  If you just want to style the decentralise renderer, update this file.
  And in the $template: {
      name: "DOB",
      url: "https://localhost:3000", <--- need to change to the url where u host the decentralise renderer.
      type: v2.TemplateType.EmbeddedRenderer,
    },
  */

  return (
    <>
      <Wrapper data-testid="DOB-template">
        <CustomStyles>{id}</CustomStyles>
        <CustomStyles>{documentLoadUrl}</CustomStyles>
        <CustomStyles>{documentUrl}</CustomStyles>
        <CustomStyles>{documentLoadUrl}</CustomStyles>
        <CustomStyles>{documentLoadUrl}</CustomStyles>
        <CustomStyles>{documentLoadUrl}</CustomStyles>
        <CustomStyles>{documentLoadUrl}</CustomStyles>
      </Wrapper>
    </>
  );
};
