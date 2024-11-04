const { MongoClient } = require('mongodb');

async function main() {
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const db = client.db("hotel");
        await db.createCollection("reservas");
        console.log("Base de datos y colección creadas exitosamente.");
    } finally {
        await client.close();
    }
}

main().catch(console.error);
