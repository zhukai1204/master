export const request = (url, method, body) => {
  return new Promise((resolve, reject) => {
    storage.load({
      key:'loginState',
    }).then(ret => {
      if(url.indexOf('?') === -1){
        url = `${url}?token=${ret.token}&userId=${ret.userId}`;
      }else{
        url = `${url}&token=${ret.token}&userId=${ret.userId}`;
      }
      fetch(url, {
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
    }).catch(ret=>{
      resolve({status:0, info:'登录信息过期，请重新登录'})
    })

    
  });
};