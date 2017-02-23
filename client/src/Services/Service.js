import ReactStormpath from 'react-stormpath'
import ResponseHandler from '../Mods/ResponseHandler';
const getConfig = function(body = null, method = 'get', headers = {}){
    return { 
        method: method,
        body: body,
        headers: headers
    };
}
const checkStatus = function(response){
//  if (response.status >= 200 && response.status < 300) {
//     return response
//   } else {
//     response.json().then(d => {
//         let err = `Additional error information: ${d.err}.`;
//         console.log(err);
//     });
//     var error = new Error(response.statusText);
//     error.response = response
//     console.log(error);
//     throw error
    
//   }
    if (response.status < 200 || response.status >= 300) {
     var error = new Error(response.statusText);
    error.response = response;
    errorHandler(error);
}
return response;

}
const errorHandler = function(error){
    let err = `Request failed ${error}`;
    console.log(err);
}

class Service{
    // ############################################## TODO:
    //Return a the promise instead of suplying a callback. Source: https://www.promisejs.org/
    // ##############################################
    MakeRequest(method, config){
        let route = method;
        let configReq = config || getConfig();
        if(configReq.method !== 'get') config.headers['Content-Type'] = 'application/json';
//         ReactStormpath.getAccessToken()
//         .then((accessToken) => {
//       configReq.headers['Authorization'] = 'Bearer ' + accessToken
//     fetch(route, configReq)
//     .then(d => d.json())
//     .then(d => callback(d));
//   }).catch((err) => {
//     // Could not get access token, user is not logged in
//     console.log("Could not get access token, user is not logged in");
//     console.log(err);
//   });
  return fetch(route, configReq)
    .then(checkStatus)
    .then(d => d.json())
    .then(d => new ResponseHandler(d));
    }
    getUsers(){
        return this.MakeRequest('/users');
    }
    deleteUser(id){
        let config = getConfig(JSON.stringify({id}), 'delete');
        return this.MakeRequest('/users', config);
    }
    createUser(firstName, lastName){
        let body = {firstName, lastName};
        let config = getConfig(
            JSON.stringify(body), 'post');
        return this.MakeRequest('/users', config)
    }
}

export default new Service();
