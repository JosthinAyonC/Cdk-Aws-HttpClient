import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import path = require('path');

export class ConsumowebapiservletStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const fetchLambda = new lambda.Function(this, 'FetchLambda', {
      runtime: lambda.Runtime.NODEJS_16_X,
      handler: 'handler.handler',
      code: lambda.Code.fromAsset(path.resolve(__dirname, 'lambda'))
    });

    const api = new apigateway.RestApi(this, 'api');

    const mainResource = api.root.resourceForPath('');

    mainResource.addMethod('POST', new apigateway.LambdaIntegration(fetchLambda));
  }
}
