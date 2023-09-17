import { server } from "./server.js";

const form = document.getElementById("form");
const input = document.getElementById("url");
const content = document.getElementById("content");

form.addEventListener("submit", async (event) => {
  event.preventDefault()

  const videoURL = input.value

  if(!videoURL.includes("shorts")) {
    return content.textContent = "Esse vídeo não parece ser um short."
  }
  
  const [ _, params] = videoURL.split("/shorts/")
  const [videoId] = params.split("?si")
  

  content.textContent = "obtendo o texto do áudio..."

  const transcription = await server.get(`/summary/${videoId}`)
  
  content.textContent = transcription

  // const summary = await server.post("/summary", {
  //   text: transcription.data.result,
  // })

  // content.textContent = summary.data.result
})