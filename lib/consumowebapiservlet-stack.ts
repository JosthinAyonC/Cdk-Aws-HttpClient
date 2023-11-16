import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import path = require('path');

export class ConsumowebapiservletStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Lambdas
    const fetchLambda = new lambda.Function(this, 'FetchLambda', {
      runtime: lambda.Runtime.NODEJS_16_X,
      handler: 'handler.handler',
      code: lambda.Code.fromAsset(path.resolve(__dirname, 'lambda'))
    });

    const nodejsFunction = new NodejsFunction(this, 'NodejsFunction', {
      runtime: lambda.Runtime.NODEJS_16_X,
      handler: 'get',
      entry: path.join(__dirname, 'lambda', 'handlerts.ts')
    });

    //Api gw
    const api = new apigateway.RestApi(this, 'api');
    const mainResource = api.root.resourceForPath('');

    // Lambda con apigw
    mainResource.addMethod('POST', new apigateway.LambdaIntegration(fetchLambda));
    mainResource.addMethod('GET', new apigateway.LambdaIntegration(nodejsFunction));
  }
}
