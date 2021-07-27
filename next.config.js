module.exports = {
    reactStrictMode: true,
    async rewrites() {
        return [
            {
                source: "/images/:path*",
                destination: "http://image.tmdb.org/t/p/:path*", // Proxy to Backend
            },
        ];
    },
    env: {
        MAX_STORY_LENGTH: 255,
    },
};
