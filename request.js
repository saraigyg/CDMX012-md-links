const axios = require('axios');

  /**
   * funcion que recibe un objeto link 
   * y si el codigo status en validate es true
   * devuelve el objeto link añadiendo status 
   */
  const getStatus = (linkObject) => {
    return axios.get(linkObject.href).then((resp) => {
      linkObject['statusCode'] = resp.status;
      if (resp.status === 200) {
        linkObject['ok'] = resp.statusText;
     // console.log(resq.status);
      return linkObject;
      }
      else {
         linkObject['ok'] = 'fail';
         return linkObject;
      }
    }).catch (error => {
      linkObject['ok'] = 'fail';
      return linkObject;
    });
  }

  const brokenLinks = (arrayLinks) => { 
      let brokenLinksArray = arrayLinks.filter((elLink) => {
        if(elLink.statusCode !== 200) {
          return true;
        }
        else {
          return false;
        }
      });
      console.log(`Broken: ${ new Set(brokenLinksArray.size)}`);
      return new Set(brokenLinksArray.size);
  }
     

  module.exports.getStatus = getStatus;
  module.exports.brokenLinks = brokenLinks;