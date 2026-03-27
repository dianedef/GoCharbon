module.exports = {
  apps: [{
    name: "gocharbon",
    cwd: "/home/claude/gocharbon",
    script: "bash",
    args: ["-c", "export PORT=3014 && flox activate -- pnpm dev -- --port 3014"],
    env: {
      PORT: 3014
    },
    autorestart: true,
    watch: false
  }]
};
