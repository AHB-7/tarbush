// api.js
import { api_URL } from "../components/index";
import { GraphQLClient, gql } from "graphql-request";

const graphQL = new GraphQLClient(api_URL);

export async function bannerSection() {
    const query = gql`
        query banner {
            banners {
                description
                heading
                heroBtn
                bannerImage {
                    url
                }
            }
        }
    `;
    const res = await graphQL.request(query);
    return res;
}

export async function menyItems(limit = 50) {
    const query = gql`
        query menyItems($limit: Int!) {
            menies(first: $limit) {
                dishName
                dishImage {
                    url
                }
                allergier
                gruppe
                id
                price
                rating
                ingredients {
                    text
                }
            }
        }
    `;
    const res = await graphQL.request(query, { limit });
    return res;
}
