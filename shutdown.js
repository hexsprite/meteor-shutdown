export function onShutdown(callback) {
  if (!Meteor.isServer) {
    throw new Error('onShutdown only works in server context')
  }
  if (Meteor.isProduction) {
    process.on('SIGTERM', callback)
  } else if (Meteor.isServer) {
    addExitFunction(callback)
  }
}

function addExitFunction(exitFunction) {
  const process = require('process')
  const path = require('path')
  const nodeExePath = process.execPath
  const stripMe = path.join('dev_bundle', 'bin', 'node(.exe)?')
  const rootPath = nodeExePath.replace(new RegExp(stripMe), '')
  const addMe = path.sep + path.join('tools', 'tool-env', 'cleanup.js')
  const meteorShutdownJsScriptPath = rootPath + addMe
  const cleanup = Npm.require(meteorShutdownJsScriptPath)
  cleanup.onExit(exitFunction)
}
