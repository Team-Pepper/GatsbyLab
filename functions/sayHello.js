exports.handler = async function(context, event) {
  try {
    return {
         statusCode: 200,
         message: JSON.stringify({msg: "Hello world"})
    }
  } catch (error) {
    console.log(error)
  }
}
