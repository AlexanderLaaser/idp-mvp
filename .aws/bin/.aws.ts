#!/opt/homebrew/opt/node/bin/node
import * as cdk from 'aws-cdk-lib';
import { Eks } from '../lib/eks';

const app = new cdk.App();

//Todo: account und region in der Pipeline übergeben
const env = {
  account: process.env.CDK_DEFAULT_ACCOUNT || '123456789012',
  region: process.env.CDK_DEFAULT_REGION || 'eu-central-1',
};

new Eks(app, 'Eks', { env });


