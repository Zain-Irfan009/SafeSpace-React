module.exports = {
    apps : [{
        name   : "SafeSpace",
        script: "npm",
        args: "run start",
        // script : "./build/server/index.js",
        // env: {
        //     PORT: 45703, // Set the custom port
        //     NODE_ENV: "production", // Ensure you're running in production mode
        // }
    }]
}