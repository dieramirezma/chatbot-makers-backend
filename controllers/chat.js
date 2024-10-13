import callModel from "../services/geminiService.js"

export async function handleMessage(req, res) {
  const { message } = req.body
  if (!message || message.trim() === "") {
    return res.status(400).json({ error: "Empty message" });
  }

  try {
      const response = await callModel(message)
      res.status(200).send(response)
  } catch (error) {
      res.status(500).send(`An error occurred while processing the request: ${error}`)
  }
}
