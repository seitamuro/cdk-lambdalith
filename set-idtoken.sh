function extract_value {
  aws cloudformation describe-stacks --stack-name $1 --output json | jq -r ".Stacks[0].Outputs[] | select(.OutputKey==\"$2\") | .OutputValue"
}

export ID_TOKEN=$(jq -r ".AuthenticationResult.IdToken" tokens.json)