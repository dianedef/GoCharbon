module.exports = {
  apps: [{
    name: "GoCharbon",
    cwd: "/home/claude/GoCharbon",
    script: "bash",
    args: ["-c", "export PORT=3003 && flox activate -- pnpm dev -- --port 3003"],
    env: {
      PORT: 3003
    },
    autorestart: true,
    watch: false
  }]
};
