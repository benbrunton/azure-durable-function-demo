module.exports = {
  apps : [{
    name   : "origin-server",
    script : "./dev-utils/file-origin/index.js"
  },
  {
    name: "export-data-func",
    script: "func start",
    cwd: "./function-app"
  }]
}
