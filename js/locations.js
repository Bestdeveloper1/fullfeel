var request = new XMLHttpRequest();

request.open('GET', 'https://api.myjson.com/bins/1axsfu', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    data.forEach(country => {
      console.log(country.Tashkent.SightSeeng.0.name);
    });
  } else {
    console.log('error');
  }
}

request.send();