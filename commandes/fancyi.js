require("dotenv").config();
const {
  zokou
} = require("../framework/zokou");
const yts = require("yt-search");
const BaseUrl = process.env.GITHUB_GIT;
const giftedapikey = process.env.BOT_OWNER;
function validateConfig() {
  if (!BaseUrl || !giftedapikey) {
    throw new Error("Configuration error: Missing BaseUrl or API key.");
  }
}
validateConfig();
zokou({
  'nomCom': "video",
  'categorie': "Search",
  'reaction': '📽️'
}, async (_0x45a4f3, _0x5ad5e6, _0x2d4e5a) => {
  const {
    ms: _0x4b19c5,
    repondre: _0x6cac1b,
    arg: _0x42bd0a
  } = _0x2d4e5a;
  if (!_0x42bd0a[0]) {
    return _0x6cac1b("𝘱𝘭𝘢𝘴𝘦 𝘪𝘯𝘴𝘦𝘳𝘳 𝘢 𝘴𝘰𝘯𝘨 𝘰𝘳 𝘷𝘪𝘥𝘦𝘰 𝘯𝘢𝘮𝘦.");
  }
  try {
    const _0x56c90e = await yts(_0x42bd0a.join(" "));
    const _0x3fe8f7 = _0x56c90e.videos;
    if (_0x3fe8f7.length === 0) {
      return _0x6cac1b("𝘕𝘰 𝘷𝘪𝘥𝘦𝘰𝘴 𝘧𝘰𝘶𝘯𝘥.");
    }
    const _0x27926e = _0x3fe8f7[0].url;
    const _0xcc10e1 = await fetch(BaseUrl + "/api/download/ytmp4?url=" + encodeURIComponent(_0x27926e) + "&apikey=" + giftedapikey);
    const _0x87d3a7 = await _0xcc10e1.json();
    if (_0x87d3a7.status === 200 && _0x87d3a7.success) {
      const _0x414793 = _0x87d3a7.result.download_url;
      await _0x5ad5e6.sendMessage(_0x45a4f3, {
        'image': {
          'url': _0x3fe8f7[0].thumbnail
        },
        'caption': "╔═━━━━━════━━━━─➳\n║ ╔ *𝘿𝙊𝙒𝙉𝙇𝙊𝘿𝙀𝙍* 』\n║ *𝘽𝙤𝙩 𝙣𝙖𝙢𝙚 ; 𝙃𝘼𝙉𝙎-𝙈𝘿 2025* \n║ *𝙊𝙬𝙣𝙚𝙧; 𝙃𝘼𝙉𝙎𝙏𝙕* \n╚══━━━━════━━━━─➳"
      }, {
        'quoted': _0x4b19c5
      });
      await _0x5ad5e6.sendMessage(_0x45a4f3, {
        'video': {
          'url': _0x414793
        },
        'mimetype': "video/mp4"
      }, {
        'quoted': _0x4b19c5
      });
      _0x6cac1b("𝙔𝙤𝙪𝙧-𝙨𝙤𝙣𝙜-𝙙𝙤𝙬𝙣𝙡𝙤𝙖𝙙-𝙨𝙪𝙘𝙘𝙚𝙨𝙨𝙛𝙪𝙡𝙡𝙮");
    } else {
      _0x6cac1b("Failed to download the video.");
    }
  } catch (_0x5e93ed) {
    console.error("Error:", _0x5e93ed);
    _0x6cac1b("An error occurred while processing your request.");
  }
});
zokou({
  'nomCom': "play",
  'categorie': "Download",
  'reaction': '🎧'
}, async (_0x1cb756, _0x49043b, _0x4bb0ff) => {
  const {
    ms: _0x999bbc,
    repondre: _0x47720b,
    arg: _0x538ab4
  } = _0x4bb0ff;
  if (!_0x538ab4[0]) {
    return _0x47720b("𝙋𝙡𝙖𝙨𝙚 𝙚𝙣𝙩𝙚𝙧 𝙮𝙤𝙪𝙧 𝙨𝙤𝙣𝙜 𝙣𝙖𝙢𝙚.");
  }
  try {
    const _0x2ffce4 = await yts(_0x538ab4.join(" "));
    const _0x522668 = _0x2ffce4.videos;
    if (_0x522668.length === 0) {
      return _0x47720b("𝙎𝙤𝙧𝙧𝙮 𝙉𝙤 𝙖𝙪𝙙𝙞𝙤 𝙛𝙤𝙪𝙣𝙙.");
    }
    const _0x1bad4b = _0x522668[0].url;
    const _0x3467d0 = await fetch(BaseUrl + "/api/download/ytmp3?url=" + encodeURIComponent(_0x1bad4b) + "&apikey=" + giftedapikey);
    const _0x748034 = await _0x3467d0.json();
    if (_0x748034.status === 200 && _0x748034.success) {
      const _0x5c9669 = _0x748034.result.download_url;
      await _0x49043b.sendMessage(_0x1cb756, {
        'image': {
          'url': _0x522668[0].thumbnail
        },
        'caption': "╔═━━━━━════━━━━─➳\n║ ╔ *𝘿𝙊𝙒𝙉𝙇𝙊𝘿𝙀𝙍* 』\n║ *𝘽𝙤𝙩 𝙣𝙖𝙢𝙚 ; 𝙃𝘼𝙉𝙎-𝙈𝘿 2025* \n║ *𝙊𝙬𝙣𝙚𝙧; 𝙃𝘼𝙉𝙎𝙏𝙕* \n╚══━━━━════━━━━─➳"
      }, {
        'quoted': _0x999bbc
      });
      await _0x49043b.sendMessage(_0x1cb756, {
        'audio': {
          'url': _0x5c9669
        },
        'mimetype': "audio/mp4"
      }, {
        'quoted': _0x999bbc
      });
      _0x47720b("𝙔𝙤𝙪𝙧-𝙨𝙤𝙣𝙜-𝙙𝙤𝙬𝙣𝙡𝙤𝙖𝙙-𝙨𝙪𝙘𝙘𝙚𝙨𝙨𝙛𝙪𝙡𝙡𝙮");
    } else {
      _0x47720b("𝙁𝙖𝙞𝙡𝙚𝙙 𝙩𝙤 𝙙𝙤𝙬𝙣𝙡𝙤𝙙 𝙥𝙡𝙖𝙨𝙚 𝙩𝙧𝙮 𝙖𝙜𝙖𝙣 𝙖𝙛𝙚𝙬 𝙨𝙚𝙘....");
    }
  } catch (_0x30df29) {
    console.error("Error:", _0x30df29);
    _0x47720b("An error occurred while processing your request.");
  }
});
zokou({
  'nomCom': "song",
  'categorie': "Download",
  'reaction': '✨'
}, async (_0x3b6f05, _0x264109, _0x4e9748) => {
  const {
    ms: _0x410d5c,
    repondre: _0x493e98,
    arg: _0x58a684
  } = _0x4e9748;
  if (!_0x58a684[0]) {
    return _0x493e98("𝙋𝙡𝙖𝙨𝙚 𝙚𝙣𝙩𝙚𝙧 𝙮𝙤𝙪𝙧 𝙨𝙤𝙣𝙜 𝙣𝙖𝙢𝙚.");
  }
  try {
    const _0x44a64d = await yts(_0x58a684.join(" "));
    const _0x22be7d = _0x44a64d.videos;
    if (_0x22be7d.length === 0) {
      return _0x493e98("𝙎𝙤𝙧𝙧𝙮 𝙉𝙤 𝙖𝙪𝙙𝙞𝙤 𝙛𝙤𝙪𝙣𝙙.");
    }
    const _0x24cfb4 = _0x22be7d[0].url;
    const _0x192d05 = await fetch(BaseUrl + "/api/download/ytmp3?url=" + encodeURIComponent(_0x24cfb4) + "&apikey=" + giftedapikey);
    const _0x33269d = await _0x192d05.json();
    if (_0x33269d.status === 200 && _0x33269d.success) {
      const _0x4c45e7 = _0x33269d.result.download_url;
      await _0x264109.sendMessage(_0x3b6f05, {
        'image': {
          'url': _0x22be7d[0].thumbnail
        },
        'caption': "╔═━━━━━════━━━━─➳\n║ ╔ *𝘿𝙊𝙒𝙉𝙇𝙊𝘿𝙀𝙍* 』\n║ *𝘽𝙤𝙩 𝙣𝙖𝙢𝙚 ; 𝙃𝘼𝙉𝙎-𝙈𝘿 2025* \n║ *𝙊𝙬𝙣𝙚𝙧; 𝙃𝘼𝙉𝙎𝙏𝙕* \n╚══━━━━════━━━━─➳"
      }, {
        'quoted': _0x410d5c
      });
      await _0x264109.sendMessage(_0x3b6f05, {
        'audio': {
          'url': _0x4c45e7
        },
        'mimetype': "audio/mp4"
      }, {
        'quoted': _0x410d5c
      });
      _0x493e98("𝙔𝙤𝙪𝙧-𝙨𝙤𝙣𝙜-𝙙𝙤𝙬𝙣𝙡𝙤𝙖𝙙-𝙨𝙪𝙘𝙘𝙚𝙨𝙨𝙛𝙪𝙡𝙡𝙮");
    } else {
      _0x493e98("𝙁𝙖𝙞𝙡𝙚𝙙 𝙩𝙤 𝙙𝙤𝙬𝙣𝙡𝙤𝙙 𝙥𝙡𝙖𝙨𝙚 𝙩𝙧𝙮 𝙖𝙜𝙖𝙣 𝙖𝙛𝙚𝙬 𝙨𝙚𝙘....");
    }
  } catch (_0xba12b4) {
    console.error("Error:", _0xba12b4);
    _0x493e98("An error occurred while processing your request.");
  }
});