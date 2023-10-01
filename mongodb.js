const {MongoClient}=require('mongodb');
const url='mongodb://localhost:27017';
const client=new MongoClient(url);

async function dbConnect(){
    let result=await client.connect();
    let db=result.db('practice');
    return db.collection('set1');

}
module.exports=dbConnect;
