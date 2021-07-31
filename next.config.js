module.exports = {
    reactStrictMode: true,
    async rewrites() {
        return [
            {
                source: "/images/:path*",
                destination: "http://image.tmdb.org/t/p/:path*", // Proxy to tldb images cdn
            },
        ];
    },
    env: {
        MAX_STORY_LENGTH: 255, // max paragraph length show on story component
    },
};
