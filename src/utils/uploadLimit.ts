import pLimit from "p-limit";

export const limit = pLimit(5); // Set the concurrency limit to 5
