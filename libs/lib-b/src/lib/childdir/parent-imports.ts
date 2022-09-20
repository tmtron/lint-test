/**
 * import/no-relative-parent-imports will flag this as an error, and this is expected
 */
import {libB} from "../lib-b";
/**
 * this import is okay, because we have specified an ignore pattern in the top-level .eslintrc.json
 */
import {SharedUtil} from "../shared/shared-util";


const x = libB();
const y = SharedUtil;
