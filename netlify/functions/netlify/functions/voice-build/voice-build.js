// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event) => {
  console.log(event.TranscriptionText)
}

module.exports = { handler }
