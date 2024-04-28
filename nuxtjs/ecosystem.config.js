module.exports = {
    apps: [
        {
            name: "project1",
            script: "npm",
            args: "run project1",
            cwd: "/var/www/project1/html",
            instances: 1,
            autorestart: true,
            watch: false,
            max_memory_restart: "1G",
            env: {
                NODE_ENV: "production",
                PORT: 3001
            },
        },
        {
            name: "project2",
            script: "npm",
            args: "run project2",
            cwd: "/var/www/project2/html",
            instances: 1,
            autorestart: true,
            watch: false,
            max_memory_restart: "1G",
            env: {
                NODE_ENV: "production",
                PORT: 3002
            },
        },

    ],
    // Add configurations for more projects if needed
}