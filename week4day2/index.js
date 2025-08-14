const { MongoClient } = require('mongodb');

async function transferFunds(client, fromAccount, toAccount, amount) {
    const session = client.startSession();

    try {
        session.startTransaction();
        const accountsCollection = client.db('banking').collection('accounts');

        await accountsCollection.updateOne(
            { accountId: fromAccount },
            { $inc: { balance: -amount } },
            { session }
        );

        await accountsCollection.updateOne(
            { accountId: toAccount },
            { $inc: { balance: amount } },
            { session }
        );

        await session.commitTransaction();
        console.log(" Transaction committed successfully");
    } catch (error) {
        await session.abortTransaction();
        console.error(" Transaction aborted due to error:", error);
    } finally {
        session.endSession();
    }
}

async function main() {
    const uri = "mongodb+srv://<santosupadhyay>:<1234567890>@cluster0.o5ckjce.mongodb.net/banking?retryWrites=true&w=majority";

    const client = new MongoClient(uri);

    try {
        await client.connect(); 
        await transferFunds(client, 123, 234, 300);
    } finally {
        await client.close();
    }
}

main().catch(console.error);
