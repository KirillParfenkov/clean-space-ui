export const AppError = (name, message) => {
    const error = Error();
    error.name = name;
    error.message = message;
    return error;
}
