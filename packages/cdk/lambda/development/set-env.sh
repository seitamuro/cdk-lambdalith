#!/bin/bash

function extract_value {
  aws cloudformation describe-stacks --stack-name $1 --output json | jq -r ".Stacks[0].Outputs[] | select(.OutputKey==\"$2\") | .OutputValue"
}

export USER_POOL_ID=$(extract_value "CdkStack" "UserPoolId")
export USER_POOL_CLIENT_ID=$(extract_value "CdkStack" "UserPoolClientId")