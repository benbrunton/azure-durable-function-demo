const CSV_LOCATION = process.env["CSV_LOCATION"];

module.exports = async function (context) {
    context.log(`CSV stored at ${CSV_LOCATION}`);
    //return `Hello ${context.bindings.name}!`;
};