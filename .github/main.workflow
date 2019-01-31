workflow "Build and deploy on push" {
  on = "push"
  resolves = [
    "Install packages",
    "Publish coverage",
    "Publish package",
  ]
}

action "Install packages" {
  uses = "actions/npm@3c8332795d5443adc712d30fa147db61fd520b5a"
  args = "install"
}

action "Run tests" {
  uses = "actions/npm@3c8332795d5443adc712d30fa147db61fd520b5a"
  needs = ["Install packages"]
  args = "test"
}

action "Build" {
  uses = "actions/npm@3c8332795d5443adc712d30fa147db61fd520b5a"
  needs = ["Run tests"]
  args = "build"
}

action "Publish coverage" {
  uses = "actions/npm@3c8332795d5443adc712d30fa147db61fd520b5a"
  needs = ["Run tests"]
}

action "Publish package" {
  uses = "actions/npm@3c8332795d5443adc712d30fa147db61fd520b5a"
  needs = ["Build"]
  args = "publish"
  secrets = ["NPM_AUTH_TOKEN"]
  runs = "cd dist/ng-environmenter && npm"
}
