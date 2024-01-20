// Function that gets the first url from string and returns it
const getUrl = (string) => {
  const url = string.match(
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/g
  );
  return url ? url[0] : null;
};

export const getUrlObject = (input) => {
  const url = getUrl(input);
  return url
    ? {
        URL: {
          type: "url",
          url: url,
        },
      }
    : {};
};
