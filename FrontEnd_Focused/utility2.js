/**
 * @param {unknown} value
 * @returns {boolean}
 */
export function isArray(value) {
   
  return Array.isArray(value)
}

/**
 * @param {unknown} value
 * @returns {boolean}
 */
export function isFunction(value) {
  
   return typeof value === "function"
}

/**
 * @param {unknown} value
 * @returns {boolean}
 */
export function isObject(value) {
  
 return value !==null && (typeof value === 'object' || typeof value === "function")
}

/**
 * @param {unknown} value
 * @returns {boolean}
 */
export function isPlainObject(value) {
  
  if(!isObject(value) || isArray(value) || isFunction(value)){
    return false
  }
  const prototype = Object.getPrototypeOf(value)
  return prototype === null || prototype = Object.prototype
   
}

// A plain object is the one that is created by the primitive {} or object.create() , we need to know this because in JS every component like function or array are to be considered as objects