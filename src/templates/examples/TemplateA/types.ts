import { v2, v3 } from "@trustvc/trustvc";
export type TemplateAV2 = v2.OpenAttestationDocument & TemplateADocument;
export type TemplateAV3 = v3.OpenAttestationDocument & {
  credentialSubject: TemplateADocument;
};

export type TemplateASchema = TemplateAV2 | TemplateAV3;

export interface TemplateADocument {
  data1: string;
  data2: string;
  links?: {
    self: {
      href: string;
    };
  };
}
