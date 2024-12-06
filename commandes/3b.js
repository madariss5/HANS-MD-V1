const { zokou } = require("../framework/zokou");
const yts = require("yt-search");
const fetch = require("node-fetch");

// Helper function to handle API requests and responses
async function fetchMedia(url, type) {
  const response = await fetch(url);
  const result = await response.json();
  return result.status === 200 && result.success ? result.result.download_url : null;
}

// Command: Play (Audio Download)
zokou({
  nomCom: "play",
  categorie: "Download",
  reaction: "🎶"
}, async (chatId, sendMessage, context) => {
  const { ms, repondre, arg } = context;
  if (!arg[0]) return repondre("Please insert a song name.");
  const query = arg.join(" ");
  try {
    const searchResults = await yts(query);
    const videos = searchResults.videos;
    if (videos.length === 0) return repondre("No audio found.");
    const video = videos[0];
    const audioUrl = await fetchMedia(`https://api.giftedtech.my.id/api/download/ytmp3?url=${encodeURIComponent(video.url)}&apikey=gifted`, "audio");
    if (!audioUrl) return repondre("Failed to download audio. Please try again later.");
    await sendMessage(chatId, {
      image: { url: video.thumbnail },
      caption: `🎵 *Title:* ${video.title}\n📅 *Uploaded:* ${video.ago}\n👀 *Views:* ${video.views}\n🔗 *YouTube Link:* ${video.url}`
    }, { quoted: ms });
    await sendMessage(chatId, { audio: { url: audioUrl }, mimetype: "audio/mp4" }, { quoted: ms });
    repondre("Audio successfully downloaded!");
  } catch (error) {
    console.error("Error:", error);
    repondre("An error occurred. Please try again.");
  }
});

// Command: Song (Audio as Document)
zokou({
  nomCom: "song",
  categorie: "Download",
  reaction: "🎶"
}, async (chatId, sendMessage, context) => {
  const { ms, repondre, arg } = context;
  if (!arg[0]) return repondre("Please insert a song name.");
  const query = arg.join(" ");
  try {
    const searchResults = await yts(query);
    const videos = searchResults.videos;
    if (videos.length === 0) return repondre("No audio found.");
    const video = videos[0];
    const audioUrl = await fetchMedia(`https://api.giftedtech.my.id/api/download/ytmp3?url=${encodeURIComponent(video.url)}&apikey=gifted`, "audio");
    if (!audioUrl) return repondre("Failed to download audio. Please try again later.");
    await sendMessage(chatId, {
      image: { url: video.thumbnail },
      caption: `🎵 *Title:* ${video.title}\n📅 *Uploaded:* ${video.ago}\n👀 *Views:* ${video.views}\n🔗 *YouTube Link:* ${video.url}`
    }, { quoted: ms });
    await sendMessage(chatId, { document: { url: audioUrl }, mimetype: "audio/mp4" }, { quoted: ms });
    repondre("Audio document successfully downloaded!");
  } catch (error) {
    console.error("Error:", error);
    repondre("An error occurred. Please try again.");
  }
});

// Command: Video (Video Download)
zokou({
  nomCom: "video",
  categorie: "Download",
  reaction: "🎬"
}, async (chatId, sendMessage, context) => {
  const { ms, repondre, arg } = context;
  if (!arg[0]) return repondre("Please insert a video name.");
  const query = arg.join(" ");
  try {
    const searchResults = await yts(query);
    const videos = searchResults.videos;
    if (videos.length === 0) return repondre("No video found.");
    const video = videos[0];
    const videoUrl = await fetchMedia(`https://api.giftedtech.my.id/api/download/ytmp4?url=${encodeURIComponent(video.url)}&apikey=gifted`, "video");
    if (!videoUrl) return repondre("Failed to download video. Please try again later.");
    await sendMessage(chatId, {
      image: { url: video.thumbnail },
      caption: `🎥 *Title:* ${video.title}\n📅 *Uploaded:* ${video.ago}\n👀 *Views:* ${video.views}\n🔗 *YouTube Link:* ${video.url}`
    }, { quoted: ms });
    await sendMessage(chatId, { video: { url: videoUrl }, mimetype: "video/mp4" }, { quoted: ms });
    repondre("Video successfully downloaded!");
  } catch (error) {
    console.error("Error:", error);
    repondre("An error occurred. Please try again.");
  }
});

// Command: VideoDoc (Video as Document)
zokou({
  nomCom: "videodoc",
  categorie: "Download",
  reaction: "💽"
}, async (chatId, sendMessage, context) => {
  const { ms, repondre, arg } = context;
  if (!arg[0]) return repondre("Please insert a video name.");
  const query = arg.join(" ");
  try {
    const searchResults = await yts(query);
    const videos = searchResults.videos;
    if (videos.length === 0) return repondre("No video found.");
    const video = videos[0];
    const videoUrl = await fetchMedia(`https://api.giftedtech.my.id/api/download/ytmp4?url=${encodeURIComponent(video.url)}&apikey=gifted`, "video");
    if (!videoUrl) return repondre("Failed to download video. Please try again later.");
    await sendMessage(chatId, {
      image: { url: video.thumbnail },
      caption: `🎥 *Title:* ${video.title}\n📅 *Uploaded:* ${video.ago}\n👀 *Views:* ${video.views}\n🔗 *YouTube Link:* ${video.url}`
    }, { quoted: ms });
    await sendMessage(chatId, { document: { url: videoUrl }, mimetype: "video/mp4" }, { quoted: ms });
    repondre("Video document successfully downloaded!");
  } catch (error) {
    console.error("Error:", error);
    repondre("An error occurred. Please try again.");
  }
});
