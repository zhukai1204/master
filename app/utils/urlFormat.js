const getUrl = (url) => {
  if (url.indexOf('?') === -1) {
    return `${url}?toKen=''`;
  }
  return `${url}&toKen='' `;
};

export default getUrl;