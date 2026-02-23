module.exports = {
  apps: [{
    name: "GoCharbon",
    cwd: "/home/claude/GoCharbon",
    script: "bash",
    args: ["-c", "export PORT=3005 && flox activate -- pnpm dev -- --port 3005"],
    env: {
      PORT: 3005
    },
    autorestart: true,
    watch: false
  }]
};
