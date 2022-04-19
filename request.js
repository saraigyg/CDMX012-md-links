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
    }).catch (error => {
      linkObject['ok'] = 'fail';
      return linkObject;
    });
  }
     
      
 /*  const getStatus = async(linkObject) => { 
    if (linkObject === null || linkObject === undefined) {
       return {};
     }
    if (linkObject.href === null || linkObject.href === undefined) {
      return linkObject;
    }
    try {
      const req = await axios.get(linkObject.href);
      linkObject['statusCode'] = req.status;
      if (req.status === 200) {
      linkObject['ok'] = req.statusText;
     // console.log(resq.status);
      return linkObject;
      }
    }
    catch (error) {
      linkObject['ok'] = 'fail';
      return linkObject;
    }
   }*/

  module.exports.getStatus = getStatus;