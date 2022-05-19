exports.handler = async function (event, context, callback) {
  const response = {
    statusCode: 200,
    headers: { "X-Test-Header": "Foo", "X-Test-Header-2": "Bar" },
    multiValueHeaders: { "X-Test-Header-2": ["Bar", "Baz"], "X-Test-Header-3": ["Qux"] },
    body: 'Hello world',
  };
  response.body = JSON.stringify(response);
  return response;
};