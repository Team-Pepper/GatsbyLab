exports.handler = async function(context, event) {
  return {
       statusCode: 200,
       message: JSON.stringify({msg: "Hello world"})
   }
}