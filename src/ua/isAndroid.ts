import isType from './util/isType'
/**
 * @category 设备 ua
 * @param {string} ua
 * @description 判断是否是安卓
 * @returns { Boolean } 返回boolean值，true 是安卓，false 不是
 *
 * @example
 * isAndriod() => true
 */
const isAndriod = isType('Android')

export default isAndriod
