import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as eks from 'aws-cdk-lib/aws-eks';
import * as ec2 from 'aws-cdk-lib/aws-ec2';

export class Eks extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const vpc = new ec2.Vpc(this, 'EksVpc', {
      maxAzs: 1,
    });
    
    const cluster = new eks.Cluster(this, 'IdpEKS', {
      vpc,
      defaultCapacity: 2,
      version: eks.KubernetesVersion.V1_31,
    });
  }
}
