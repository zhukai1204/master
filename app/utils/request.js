import getUrl from './urlFormat';
export const request = (url, method, body) => {
  return new Promise((resolve, reject) => {
    fetch(getUrl(url), {
      method:method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=utf-8'},
      body:JSON.stringify(body)
    }).then((response) => {
        if (response.ok) {
          resolve(response.json());
        } else {
          reject(response.json())
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};