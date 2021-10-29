const df = require("durable-functions");

module.exports = async function (context) {
    const client = df.getClient(context);
    const instanceId = await client.startNew("CustomerDataOrchestrator");

    context.log(`Started orchestration with ID = '${instanceId}'.`);
};
