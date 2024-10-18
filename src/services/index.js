// api.js
import { api_URL } from "../components/index";
import { GraphQLClient, gql } from "graphql-request";

const graphQL = new GraphQLClient(api_URL);

export async function fetchGallery(limit = 100) {
    const query = gql`
        query galleries {
            galleries(first: 9, orderBy: publishedAt_DESC, stage: PUBLISHED) {
                id
                publishedAt
                text
                title
                resImage {
                    url
                }
            }
        }
    `;
    const res = await graphQL.request(query);
    return res.galleries;
}

export async function fetchGalleryById(id) {
    const query = gql`
        query getGalleryById($id: ID!) {
            gallery(where: { id: $id }) {
                id
                publishedAt
                text
                title
                resImage {
                    url
                }
            }
        }
    `;
    const variables = { id };
    const res = await graphQL.request(query, variables);
    return res.gallery;
}

export async function menyItems(limit = 1000) {
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
                vegitar
            }
        }
    `;
    const res = await graphQL.request(query, { limit });
    return res;
}

export async function createFeedItem(content, stars, feedbackName) {
    const mutation = gql`
        mutation CreateFeedBack(
            $content: String!
            $stars: Float!
            $feedbackName: String!
        ) {
            createFeedBack(
                data: {
                    content: $content
                    stars: $stars
                    feedbackName: $feedbackName
                }
            ) {
                id
                content
                stars
                feedbackName
                createdAt
            }
        }
    `;
    const variables = {
        content,
        stars: parseFloat(stars),
        feedbackName,
    };
    const res = await graphQL.request(mutation, variables);
    return res.createFeedBack;
}

export async function fetchFeedItems() {
    const query = gql`
        query GetFeedItems {
            feedBacks(stage: DRAFT, orderBy: publishedAt_DESC, first: 5) {
                id
                stars
                createdAt
                content
                feedbackName
            }
        }
    `;
    const res = await graphQL.request(query);
    return res.feedBacks.map((item) => ({
        ...item,
        stars: item.stars !== undefined ? item.stars : 0,
    }));
}
