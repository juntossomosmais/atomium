const core = require('@actions/core')
const fs = require('fs')

try {
  const module = core.getInput('module')
  const coverageDir = `packages/${module}/coverage`

  if (fs.existsSync(coverageDir)) {
    core.setOutput('coverage_exists', 'true')
    core.info(`Coverage directory exists for packages/${module}.`)
  } else {
    core.setOutput('coverage_exists', 'false')
    core.info(`Coverage directory does not exist for packages/${module}.`)
  }
} catch (error) {
  core.setFailed(error.message)
}
