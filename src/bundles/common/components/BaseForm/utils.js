export const filterNotTouched = touched => errors =>
    Object.keys(touched)
        .filter(key => touched[key])
        .reduce((result, key) =>  {
            if (errors[key]) {
                result[key] = errors[key];
            }
            return result;
        }, {});
