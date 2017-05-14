      var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://countr-monolith-staging.herokuapp.com/v2/me",
  "method": "GET",
  "headers": {
    "content-type": "application/json",
    "authorization": "Bearer 4ee5dafad115fa5689fd1dbceeca124c3bdeccfe"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://countr-monolith-staging.herokuapp.com/v2/oauth/token",
  "method": "POST",
  "headers": {
    "content-type": "application/x-www-form-urlencoded",  },
  "data": {
    "grant_type": "authorization_code",
    "client_id": "client-8b3626fa8e0ee49e070813498a83706fce6c8760",
    "client_secret": "secret-6c3991462140c19eb79869dd00e807379696e229",
    "code": "code-0bfbfb45ee428aef0bb7e501a4d391c1f18ffb9f"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});