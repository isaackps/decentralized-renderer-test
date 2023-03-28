import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";

export const TemplateB: React.FunctionComponent<TemplateProps<any>> = ({
  document,
}) => {
  const issuer = document.issuers[0].name;

  return (
    <>
      <h1>{issuer}</h1>
    </>
  );
};
