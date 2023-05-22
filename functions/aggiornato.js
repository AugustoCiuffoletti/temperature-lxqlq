exports = function(payload, response) {
    const {n}=payload.query;
    const http = context.services.get("temperature");
    return http
      .get({ url: "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=d0fda39104b3c7c45fe031a5392964c1&q="+n })
      .then(response => {
        const ejson_body = EJSON.parse(response.body.text());
        return ejson_body.main.temp.toString();
        } 
      )
      .catch( error => {
        return "Errore: "+error;
        } 
      ) ;
};