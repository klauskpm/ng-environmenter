workflow "Build and deploy on push" {
  on = "push"
  resolves = ["run tests"]
}

action "run tests" {
  uses = "actions/npm@3c8332795d5443adc712d30fa147db61fd520b5a"
  runs = "npm run test"
}
