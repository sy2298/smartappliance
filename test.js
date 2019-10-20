function request (param) {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
 
        xhr.open('GET', 'http://google.co.kr/', true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                resolve(xhr.response);
            }
            reject(404)
        };
        xhr.send(null);
    })
}
 
Promise.resolve()
    .then(request)
    .then(result => {
        console.log('ok');
        console.log(result);
    })
    .catch(err=>{
        console.error(err);
    })