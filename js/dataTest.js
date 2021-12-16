(function(){
    console.log('Welcome, if you can see this log app.js works! :)');
    console.log('Feel free to play around with it.');
})();

function getData(){
    console.log('get data');

    fetch('https://justfields.com/project/eNyAAPy7/json')
    .then( response => response.json() )
    .then(function (data) {
        console.log(data.confirmationgroup.confirmation);
        data.confirmationgroup.confirmation.forEach(function(confirmation){
            console.log(confirmation.name +', '+ confirmation.email +', '+ confirmation.phone +', '+ confirmation.date +', '+ confirmation.time +', '+ confirmation.gender +', '+ confirmation.style );
        })
    })
}
