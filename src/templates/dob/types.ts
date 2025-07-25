import { SignedVerifiableCredential, v2, v3 } from "@trustvc/trustvc";

export type TemplateDobSchemaV2 = v2.OpenAttestationDocument & TemplateDob;

export interface TemplateDob {
  id?: string;
  documentUrl?: string;
  documentLoadUrl?: string;
  formData?: FormData;
  recipient: Recipient;
}

export interface Recipient {
  name?: string;
}

export interface FormData {
  referenceId?: string;
  issueDate?: string;
  placeOfIssue?: string;
  amountInFigures?: string;
  amountInWords?: string;
  paymentDueDate?: string;
  paymentTerms?: string;
  draweeName?: string;
  draweeEmail?: string[];
  draweeAddress?: string;
  drawerName?: string;
  drawerAddress?: string;
  drawerSignature?: string;
  draweeSignature?: string;
}
