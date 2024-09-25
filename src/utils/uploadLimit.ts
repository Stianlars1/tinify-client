import pLimit from "p-limit";

const limit = pLimit(5); // Set the concurrency limit to 5

export default limit;
