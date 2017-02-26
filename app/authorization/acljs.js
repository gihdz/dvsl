import acl from 'acl';
import aclKnex from 'acl-knex'
import knex from 'knex'
let {DATABASE_URL} = process.env;
let db = knex({
        client: 'postgres',
        connection: DATABASE_URL
    });

db.schema.hasTable('acl_users').then(exists =>{
    if(!exists){
        let args = [null, null, null, 'acl_', null, null, DATABASE_URL];
        myAclKnex.setup(args);
    }
});

let myAclKnex = new aclKnex(db, 'postgres', 'acl_');
let myAcl = new acl(myAclKnex);

export default myAcl;