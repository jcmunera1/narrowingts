export default class Password {
    protected password : string | null ;


    constructor (password : string | null ){
        this.password = password;


    }

    public confirmPassword () {
        if (typeof this.password === 'object' && this.password !== null) {
            return  console.log('error');

        } else if (typeof this.password === 'string') {

            return console.log('caracteres correctos');
        }
    }

}