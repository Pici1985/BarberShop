(function(){
    console.log('Welcome, if you can see this log dataTest.js works! :)');
    console.log('Feel free to play around with it.');
})();

function getData(){
    fetch('https://justfields.com/project/eNyAAPy7/json')
    .then( response => response.json() )
    .then(function (data) {
        // console.log(data.confirmationgroup.confirmation);
        console.log('Data incoming from Justfields.com');
        data.confirmationgroup.confirmation.forEach(function(confirmation){
            console.log(confirmation.name +', '+ confirmation.id +', '+ confirmation.email +', '+ confirmation.phone +', '+ confirmation.date +', '+ confirmation.time +', '+ confirmation.gender +', '+ confirmation.style );
        });
    });
};
