function parse_URL(url) {
    // Use the URL constructor to parse the URL
    let parsedUrl = new URL(url);

    // Extract the search parameters into an object
    let params = {};
    parsedUrl.searchParams.forEach((value, key) => {
        params[key] = value;
    });

    // Construct the output object
    let result = {
        source: url,
        protocol: parsedUrl.protocol.slice(0, -1), // Remove the trailing colon
        host: parsedUrl.host,
        port: parsedUrl.port,
        relative: parsedUrl.pathname + parsedUrl.search,
        path: parsedUrl.pathname,
        segments: parsedUrl.pathname.split('/').filter(Boolean),
        file: parsedUrl.pathname.split('/').pop(),
        query: parsedUrl.search,
        params: params,
        hash: parsedUrl.hash.slice(1) // Remove the leading hash symbol
    };

    return result;
}
console.log(parse_URL('https://github.com/pubnub/python/search?utf8=%E2%9C%93&q=python'));
