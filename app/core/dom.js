var slice = Array.prototype.slice,
    html = document.documentElement;
/**
 * Alias on querySelector for an optional context
 * @param  {string} selector  CSS3 selector
 * @param  {DOMNode} context  Node context
 * @return {null|DOMNOde}     Selected DOMNode
 * @api public
 */
function $(selector, context) {
  return (context || html).querySelector(selector);
}
module.exports.$ = $;
/**
 * Alias on querySelectorAll for an optional context
 * @param  {String} selector  CSS3 selector
 * @param  {DOMNOde} context  Node context
 * @return {Array}            Selected Node list
 * @api public
 */
function $$(selector, context) {
  return slice.call((context || html).querySelectorAll(selector));
}
module.exports.$$ = $$;
