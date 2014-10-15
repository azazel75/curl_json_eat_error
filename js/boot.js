(function () {

    curl.config({
        baseUrl: 'js'
    });

    curl(['json!data.json']).then(start, fail);

    function start(data) {
        // do something startup-ish
        console.log(data);
        throw new Error('Just an error');
    }

    function fail(ex) {
        // show a meaningful error to the user.
        console.log(ex);
    }

}());
