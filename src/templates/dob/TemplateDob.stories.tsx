import React, { FunctionComponent } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { DOBTemplate } from "./TemplateDob";
import { TemplateDobSample } from "./sampleDob";
import { TemplateDobSchemaV2 } from "./types";

export default {
  title: "DOB Template",
  component: DOBTemplate,
  parameters: {
    componentSibtitle: "Sample Template Dob",
  },
} as Meta;

export const TemplateDob: FunctionComponent = () => {
  return (
    <DOBTemplate document={TemplateDobSample} handleObfuscation={() => {}} />
  );
};
