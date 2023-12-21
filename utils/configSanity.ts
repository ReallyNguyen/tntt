import { createClient } from 'next-sanity';

export const client = createClient({
    projectId: "5fs1b3fp",
    dataset: "production",
    apiVersion: "2022-03-07",
    useCdn: true
})