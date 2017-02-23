
class ResponseHandler{
    constructor(response){
        this.err = "";
        this.data = {};
        if(response.err) this.err = response.err;
        else this.data = response;
     
    }
}

export default ResponseHandler;