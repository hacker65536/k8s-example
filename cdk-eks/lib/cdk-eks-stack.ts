import * as cdk from '@aws-cdk/core';
import eks = require('@aws-cdk/aws-eks');
import ec2 = require('@aws-cdk/aws-ec2');
import iam = require('@aws-cdk/aws-iam');

export class CdkEksStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const clusterAdmin = new iam.Role(this, 'AdminRole', {
      assumedBy: new iam.AccountRootPrincipal(),
    });

    const cluster = new eks.Cluster(this, 'goekstest', {
      defaultCapacity: 2,
      defaultCapacityInstance: new ec2.InstanceType('r4.large'),
      mastersRole: clusterAdmin,
    });
  }
}
