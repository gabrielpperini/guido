
export default Api = {
    LoginApi:{
        users: async (cpf) => {
            var data = false;
            if(cpf){
                let user = cpf.replace( /[^\d]+/g , '')
                await fetch('http://www.lucianaguidolin.com.br/app/users',{
                    method: 'POST',
                    headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                    user: user
                    }),
                })
                .then((response) => response.json())
                .then(res => {
                    data = res;
                });
            }
            return data;
        }
    }
}