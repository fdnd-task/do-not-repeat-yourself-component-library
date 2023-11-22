import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';

export async function load() {  
  let query = gql`
    query wishes {
        wishes {
            uid
            id
            heading
            label
            image {
              height
              width
              url
            }
        }
    }
  `;

  const request = await hygraph.request(query);

  return request
}