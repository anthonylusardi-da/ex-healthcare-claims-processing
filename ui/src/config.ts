// Copyright (c) 2021 Digital Asset (Switzerland) GmbH and/or its affiliates. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

export enum DeploymentMode {
  DEV,
  PROD_DABL,
  PROD_OTHER,
}

export const deploymentMode: DeploymentMode =
  process.env.NODE_ENV === 'development'
  ? DeploymentMode.DEV
  : window.location.hostname.endsWith('.projectdabl.com')
  ? DeploymentMode.PROD_DABL
  : DeploymentMode.PROD_OTHER;

// Decide the ledger ID based on the deployment mode first,
// then an environment variable, falling back on the sandbox ledger ID.
export const ledgerId: string =
  deploymentMode === DeploymentMode.PROD_DABL
  ? window.location.hostname.split('.')[0]
  : process.env.REACT_APP_LEDGER_ID
  ?? 'example-create-daml-app-sandbox';

export const httpBaseUrl =
  deploymentMode === DeploymentMode.PROD_DABL
  ? `https://api.projectdabl.com/data/${ledgerId}/`
  : undefined;
