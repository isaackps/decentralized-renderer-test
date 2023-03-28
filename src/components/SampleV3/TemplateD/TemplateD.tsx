import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";

export const TemplateD: React.FunctionComponent<TemplateProps<any>> = ({
  document,
}) => {
  const issuer = document.issuer.name;

  return (
    <>
      <h1>{issuer}</h1>
    </>
  );
};
