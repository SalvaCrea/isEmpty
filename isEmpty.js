/**
 * Determines if variable is empty
 * @param  {[mixed]}  variable  Variable to check
 * @return {Boolean}            return true if empty or false
 */
function isEmpty( variable ){
    function testLength( variable ){
        return variable.length === 0 ? true : false;
    }
    switch( typeof variable ) {
    case 'string':
        return testLength( variable );
        break;
    case 'object':
        if ( Array.isArray( variable ) ) {
            return testLength( variable );
        } else {
            for (var key in variable) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) return false;
            }
        }
        break;
    case 'boolean':
        return variable;
        break;
    default:
        return true;
    }
}
