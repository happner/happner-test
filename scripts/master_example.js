
/**
 * ### .start(scriptName, $happn, opts)
 *
 * @api public
 * @param {String} scriptName
 * @param {ComponentInstance} $happn
 * @param {Object} opts
 *
 */

module.exports.start = function(scriptName, $happn, opts) {

  $happn.log.info('running script \'%s\', opts: \'%j\'', scriptName, opts);

}
