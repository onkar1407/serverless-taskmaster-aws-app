"use strict";

const hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Hello From Bhjhjajhtch hjghj3!",
      },
      null,
      2
    ),
  };
};

module.exports = {
    handler: hello,
};
