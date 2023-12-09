import { gql } from '@apollo/client';

export const erc6551TokensQuery = `query AccountsQuery($tokenAddress: Address, $tokenId: String, $blockchain: TokenBlockchain!) {
  Accounts(
    input: {blockchain: $blockchain, filter: {tokenAddress: {_eq: $tokenAddress}, tokenId: {_eq: $tokenId}}}
  ) {
    Account {
      standard
      address {
        addresses
        blockchain
        identity
        tokenBalances {
          tokenType
          blockchain
          tokenAddress
          tokenId
          blockchain
          token {
            name
            symbol
          }
          tokenNfts {
            contentValue {
              image {
                medium
              }
            }
            erc6551Accounts {
              address {
                addresses
                tokenBalances {
                  tokenAddress
                  tokenId
                  tokenNfts {
                    contentValue {
                      image {
                        medium
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}`;

const APP_EXPLORER_URL = 'https://app.airstack.xyz/api-studio';

function encode(string) {
  try {
    const _string = btoa(string);
    return _string;
  } catch {
    return string;
  }
}

export function createAppUrlWithQuery(query, _variables) {
  const compressedQuery = encode(query);
  const variables = _variables ? JSON.stringify(_variables) : '';
  const compressedVariables = variables ? encode(variables) : '';
  return `${APP_EXPLORER_URL}?autoRun=true&query=${compressedQuery}${
    variables ? `&variables=${compressedVariables}` : ''
  }`;
}

export const newQuery = gql`query MyQuery {
  Polygon: TokenBalance(
    input: {blockchain: polygon, owner: "0x50E5e9D9143593292A7E4Fb4f4BeD961ECCA0433", tokenAddress: "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359"}
  ) {
    amount
    formattedAmount
    owner {
      addresses
    }
  }
}`;

