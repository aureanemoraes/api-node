export function buildRoutePath(path) {
    const routeParametersRegex = /:([a-zA-Z_]+)/g;
    const routeWithParams = path.replaceAll(routeParametersRegex, '(?<$1>[a-z0-9\-_]+)');

    const pathRegex = new RegExp(`^${routeWithParams}(?<query>\\?(.*))?$`);

    return pathRegex;

    // console.log(
    //     Array.from(
    //         path.matchAll(routeParametersRegex)
    //     )
    // );
}