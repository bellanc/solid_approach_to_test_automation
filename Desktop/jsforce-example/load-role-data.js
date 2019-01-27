var jsforce = require('jsforce');

var buildRoles = async (username,password,options) => {

        var conn = new jsforce.Connection({...options, version: '44.0'});
        var connInfo  = await conn.login(username, password); 
        var res = await conn.query('SELECT Id, Name FROM Account');
        console.log('result:');
        console.log(res);
    
}

buildRoles('bbellanca@cas.org.testdeploy','SpringForward19', {clientId: '', clientSecret: ''});

