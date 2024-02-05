# TradeTrust Decentralized Renderer (React Template)

This template serves as a quick way to start building your own decentralized renderer using OpenAttestation stack.

## How and what?

This repository boilerplate code is spinned up from [Create React App](https://github.com/facebook/create-react-app).

The decentralized renderer code here is based off OpenAttestation's [decentralized-renderer-react-template](https://github.com/Open-Attestation/decentralized-renderer-react-template), but with **some changes** as mentioned below.

## Notable changes

To stay as simple and less opinionated as possible, these are omitted:

- Testing frameworks.
- CI pipelines.

> You are expected to setup your own tests, styling according to your needs.

## Main dependancies

- `@govtechsg/decentralized-renderer-react-components`
- `@tradetrust-tt/tradetrust`
- `react`
- `react-dom`

---

### Prerequisite

- Node (optionally, use [nvm](https://github.com/nvm-sh/nvm) to manage node version)
  - Node version 14 onwards.

### Development

```sh
npm i
npm run start
```

Head off to `http://localhost:6006/` to see storybook, while `http://127.0.0.1:8080/` to see your actual document rendered in a dummy application.

### Core Components

Core components, located in the `src/core directory`, are reusable React components that offer enhanced functionalities for renderer templates.

This repository contains a collection of example templates along with demonstrations of how to use core components. You can find these examples in the `/src/templates` directory. These templates serve as references and guides to help you set up your own templates to meet your unique requirements.

#### DocumentQrCode
It allows users to share documents across devices using a QR code.

For detailed information on how to use the QR Code Component, please refer to the official documentation [here](https://docs.tradetrust.io/docs/reference/tradetrust-website/qr-code/).

#### Wrapper/ Error Boundary
The Wrapper/Error Boundary Component is designed to handle scenarios where a template cannot be rendered correctly. In such cases, this component acts as a fallback, displaying a user-friendly error message and stack.

#### PrivacyFilter

The Privacy Filter Component is a powerful tool for safeguarding sensitive information within a document. To use the Privacy Filter in the decentralized renderer, follow these steps

- Click the "Edit Document" button within the PrivacyFilter component.
- Click "Remove" on the redactable values to specify the information you want to remove.
- Click "Done" on the Privacy Filter Component to complete the process.
- Download the document with hidden values

#### PrintWatermark

The PrintWatermark Component allows users to include the TradeTrust watermark text in the background of a document's print preview.

### Creating new templates

1. Create your new sample documents json in `src/templates/<YOUR_SAMPLE>/<YOUR_DOCUMENT>.json`. Be sure they conform to either OpenAttestation [v2](https://schema.openattestation.com/2.0/schema.json) or [v3](https://schema.openattestation.com/3.0/schema.json) schema.

2. Develop whatever you need using storybook, passing in your sample documents json.

3. When done, remember to register the new template to `registry` in `src/templates/index.tsx`.

> You can follow the template samples provided under `src/templates` folder.

### Build and host

```sh
npm run build
```

Host your `dist` folder in your favourite hosting provider. One example could be [netlify](https://www.netlify.com/).
