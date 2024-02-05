import React, { FunctionComponent } from "react";
import { TemplateBWithPrivacyFilter } from "./TemplateBWithPrivacyFilter";
import { TemplateBSampleV2 } from "./sampleV2";

export default {
  title: "TemplateB",
  component: TemplateBWithPrivacyFilter,
  parameters: {
    componentSubtitle: "Sample Template B",
  },
};

export const TemplateWithPrivacyFilter: FunctionComponent = () => {
  return <TemplateBWithPrivacyFilter document={TemplateBSampleV2} handleObfuscation={() => {}} />;
};