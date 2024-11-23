require("dotenv").config();
const {
  adams
} = require("../framework/zokou");
const yts = require("yt-search");
const axios = require("axios");
const BaseUrl = process.env.GITHUB_GIT;
const adamsapikey = process.env.BOT_OWNER;
function validateConfig() {
  if (!BaseUrl || !adamsapikey) {
    throw new Error("Configuration error: Missing BaseUrl or API key.");
  }
}
validateConfig();
async function searchYouTube(_0x27696b) {
  try {
    const _0xa3c42f = await yts(_0x27696b);
    return _0xa3c42f.videos.length > 0 ? _0xa3c42f.videos[0] : null;
  } catch (_0x3b97b4) {
    console.error("YouTube Search Error:", _0x3b97b4);
    return null;
  }
}
async function downloadMedia(_0x37b0eb, _0xeeca3b) {
  try {
    const _0xfd17ce = BaseUrl + "/api/download/yt" + _0xeeca3b + "?url=" + encodeURIComponent(_0x37b0eb) + "&apikey=" + adamsapikey;
    const {
      data: _0x40b271
    } = await axios.get(_0xfd17ce);
    return _0x40b271.status === 200 && _0x40b271.success ? _0x40b271.result.download_url : null;
  } catch (_0x1c6e48) {
    console.error("API Error (" + _0xeeca3b + '):', _0x1c6e48);
    return null;
  }
}
adams({
  'nomCom': "play",
  'categorie': "Download",
  'reaction': '🎧'
}, async (_0x2e87f7, _0x3bd4eb, _0x3a5530) => {
  const {
    ms: _0x4e6621,
    repondre: _0x32f96e,
    arg: _0x13a568
  } = _0x3a5530;
  if (!_0x13a568[0]) {
    return _0x32f96e("Please insert a song name.");
  }
  const _0x38ba8f = await searchYouTube(_0x13a568.join(" "));
  if (!_0x38ba8f) {
    return _0x32f96e("No audio found. Try another name.");
  }
  await _0x3bd4eb.sendMessage(_0x2e87f7, {
    'image': {
      'url': _0x38ba8f.thumbnail
    },
    'caption': "🎶 *HANS MD SONG'S*\n\n" + ("*Title:* " + _0x38ba8f.title + "\n") + ("*Author:* " + _0x38ba8f.author.name + "\n") + ("*Duration:* " + _0x38ba8f.timestamp + "\n") + ("*Views:* " + _0x38ba8f.views + "\n") + ("*Uploaded:* " + _0x38ba8f.ago + "\n") + ("*YouTube Link:* " + _0x38ba8f.url)
  }, {
    'quoted': _0x4e6621
  });
  _0x32f96e("*Downloading your audio...*");
  const _0xef0ef0 = await downloadMedia(_0x38ba8f.url, "mp3");
  if (!_0xef0ef0) {
    return _0x32f96e("Failed to download the audio.");
  }
  await _0x3bd4eb.sendMessage(_0x2e87f7, {
    'audio': {
      'url': _0xef0ef0
    },
    'mimetype': "audio/mp4",
    'ptt': false,
    'contextInfo': {
      'externalAdReply': {
        'title': _0x38ba8f.title,
        'body': "By " + _0x38ba8f.author.name,
        'thumbnailUrl': _0x38ba8f.thumbnail,
        'sourceUrl': _0x38ba8f.url
      }
    }
  }, {
    'quoted': _0x4e6621
  });
});
adams({
  'nomCom': "song",
  'categorie': "Download",
  'reaction': '🎧'
}, async (_0x26cef2, _0x1c501f, _0x338192) => {
  const {
    ms: _0xcabb81,
    repondre: _0x153958,
    arg: _0x394435
  } = _0x338192;
  if (!_0x394435[0]) {
    return _0x153958("Please insert a song name.");
  }
  const _0x4baf0d = await searchYouTube(_0x394435.join(" "));
  if (!_0x4baf0d) {
    return _0x153958("No audio found. Try another name.");
  }
  await _0x1c501f.sendMessage(_0x26cef2, {
    'image': {
      'url': _0x4baf0d.thumbnail
    },
    'caption': "🎶 *HANS MD SONG'S*\n\n" + ("*Title:* " + _0x4baf0d.title + "\n") + ("*Author:* " + _0x4baf0d.author.name + "\n") + ("*Duration:* " + _0x4baf0d.timestamp + "\n") + ("*Views:* " + _0x4baf0d.views + "\n") + ("*Uploaded:* " + _0x4baf0d.ago + "\n") + ("*YouTube Link:* " + _0x4baf0d.url)
  }, {
    'quoted': _0xcabb81
  });
  _0x153958("*Downloading your audio...*");
  const _0x46b20e = await downloadMedia(_0x4baf0d.url, "mp3");
  if (!_0x46b20e) {
    return _0x153958("Failed to download the audio.");
  }
  await _0x1c501f.sendMessage(_0x26cef2, {
    'audio': {
      'url': _0x46b20e
    },
    'mimetype': "audio/mp4",
    'ptt': false,
    'contextInfo': {
      'externalAdReply': {
        'title': _0x4baf0d.title,
        'body': "By " + _0x4baf0d.author.name,
        'thumbnailUrl': _0x4baf0d.thumbnail,
        'sourceUrl': _0x4baf0d.url
      }
    }
  }, {
    'quoted': _0xcabb81
  });
});
adams({
  'nomCom': "video",
  'categorie': "Download",
  'reaction': '🎥'
}, async (_0xd25e43, _0x132978, _0x30e053) => {
  const {
    ms: _0x3d755c,
    repondre: _0x38060d,
    arg: _0x3bc0ce
  } = _0x30e053;
  if (!_0x3bc0ce[0]) {
    return _0x38060d("Please insert a video name.");
  }
  const _0x1b7856 = await searchYouTube(_0x3bc0ce.join(" "));
  if (!_0x1b7856) {
    return _0x38060d("No video found. Try another name.");
  }
  await _0x132978.sendMessage(_0xd25e43, {
    'image': {
      'url': _0x1b7856.thumbnail
    },
    'caption': "🎥 *HANS MD VIDEO'S*\n\n" + ("*Title:* " + _0x1b7856.title + "\n") + ("*Author:* " + _0x1b7856.author.name + "\n") + ("*Duration:* " + _0x1b7856.timestamp + "\n") + ("*Views:* " + _0x1b7856.views + "\n") + ("*Uploaded:* " + _0x1b7856.ago + "\n") + ("*YouTube Link:* " + _0x1b7856.url)
  }, {
    'quoted': _0x3d755c
  });
  _0x38060d("*Downloading your video...*");
  const _0x31e75a = await downloadMedia(_0x1b7856.url, "mp4");
  if (!_0x31e75a) {
    return _0x38060d("Failed to download the video.");
  }
  await _0x132978.sendMessage(_0xd25e43, {
    'video': {
      'url': _0x31e75a
    },
    'mimetype': "video/mp4",
    'caption': "Enjoy your video: *" + _0x1b7856.title + "*\n\n*© Hans Tz*",
    'contextInfo': {
      'externalAdReply': {
        'title': _0x1b7856.title,
        'body': "By " + _0x1b7856.author.name,
        'thumbnailUrl': _0x1b7856.thumbnail,
        'sourceUrl': _0x1b7856.url
      }
    }
  }, {
    'quoted': _0x3d755c
  });
});