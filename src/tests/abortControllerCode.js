function start() {
    const abortController = new AbortController();
    abortController.abort();
    return 'foo';
}

module.exports = { start }