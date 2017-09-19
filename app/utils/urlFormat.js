const getUrl = (url) => {
  if (url.indexOf('?') === -1) {
    storage.load({
      key:'loginState',
    }).then(ret => {
      console.warn(`${url}?token=${ret.token}&userId=${ret.userId}`);
      return `${url}?token=${ret.token}&userId=${ret.userId}`;
    }).catch(ret=>{
      return `${url}`;
    })
  }else{
  	storage.load({
      key:'loginState',
    }).then(ret => {
    	console.warn(`${url}&token=${ret.token}&userId=${ret.userId}`);
      	return `${url}&token=${ret.token}&userId=${ret.userId}`;
    }).catch(ret=>{
    	return `${url}`;
    })
  }

  
};

export default getUrl;