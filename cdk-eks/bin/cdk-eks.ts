#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkEksStack } from '../lib/cdk-eks-stack';

const app = new cdk.App();

const defenv = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
};

new CdkEksStack(app, 'CdkEksStack', {
  env: defenv,
});
