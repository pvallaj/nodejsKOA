conn = new Mongo();
db = conn.getDB("yml");
db.createUser(
    {
        user: "yml-usuario",
        pwd: "Usuario1596",
        roles: [
            {
                role: "readWrite",
                db: "yml"
            }
        ]
    }
);

db.myCollectionName.createIndex({ "address.zip": 1 }, { unique: false });

db.myCollectionName.insert({ "address": { "city": "Paris", "zip": "123" }, "name": "Mike", "phone": "1234" });
db.myCollectionName.insert({ "address": { "city": "Marsel", "zip": "321" }, "name": "Helga", "phone": "4321" });
