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
// api.js

export async function createFeedItem(title, content, stars, feedbackName) {
    const mutation = gql`
        mutation CreateFeedBack(
            $title: String!
            $content: String!
            $stars: Float!
            $feedbackName: String!
        ) {
            createFeedBack(
                data: {
                    title: $title
                    content: $content
                    stars: $stars
                    feedbackName: $feedbackName
                }
            ) {
                id
                title
                content
                stars
                feedbackName
                createdAt
            }
        }
    `;
    const variables = {
        title,
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
