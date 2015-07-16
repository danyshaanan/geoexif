'use strict'

module.exports = function(commands) {
  var argv = process.argv.slice(2).map(function(arg) { return arg.replace(/^--/, '') })

  var cli = {
    flags: argv.filter(function(arg) { return ~commands.indexOf(arg) }),
    target: argv.filter(function(arg) { return !~commands.indexOf(arg) })[0]
  }

  cli.flags.forEach(function(flag) { cli[flag] = true })

  return cli
}
