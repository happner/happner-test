
/**
 * ### .start(scriptName, $happn, opts)
 *
 * @api public
 * @param {String} scriptName
 * @param {ComponentInstance} $happn master/controller
 * @param {Object} opts
 *
 * #### call from browser console
 *
 * > action('controller.runScript', 'example', {opts: 1});
 *
 */

module.exports.start = function(scriptName, $happn, opts) {

  $happn.log.info('running script \'%s\', opts: \'%j\'', scriptName, opts);

}
