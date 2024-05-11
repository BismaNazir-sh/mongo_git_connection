exports = async function(changeEvent) {
    const collection = context.services.get("mongodb-atlas").db("test").collection("pharmacy_v3");
    const { documentKey } = changeEvent;

    if (changeEvent.operationType === 'insert') {
      const result = await collection.updateOne(
        { _id: documentKey._id },
        { $set: { createdAt: Date.now() } }
      );kkkk
    }
};
