const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '2347039570336'
global.mongodb = process.env.MONGODB_URI || "mongodb://u67wtnui9m87lq4yhmvv:tpelVygzO9NWafGwF0D@bmrkwjjqyq2xfesqxn7z-mongodb.services.clever-cloud.com:2052/bmrkwjjqyq2xfesqxn7z"
global.port= process.env.PORT || 5000
global.email = 'sam@secktor.live'
global.github = 'https://github.com/excelottah6/IZUKU-MD'
global.location = 'Lagos NG'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || '2347039570336,2348050907760'
global.devs = '2347039570336,2348050907760';
global.website = 'https://github.com/excelottah6/IZUKU-Md' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://raw.githubusercontent.com/SecktorBot/Brandimages/main/logos/SocialLogo%201.png'
module.exports = {
  
  sessionName:  process.env.SESSION_ID ||  "IZUKU;;; eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0pGODNLY2ZubUllWUwzTXMweXZFM0VUZFpGZ1V4SU1XZXNpbEVWMVIwVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieXh5MWJIbGdKNlVUemFUaDJvaUxUeEE1THVoS2pERHpvbi9Qckw3Qm5WND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLSFJ6NHV5SHNxWDRRSGI0Ty80RHlnMWFaSG1najEzU0g5d1BtZ3ZrNkZZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvUWJ5bytjdjEveXZpdExEd2J1eWxaWnhzWFZheVN6WmdaMEtsa2YxajNFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVJcmFjTUFibmxibDY0WEI1OHBPaXhwcVFLTkRmS0J1VmQrQjc1azlQRmM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFtaHZDTFhNNXJpK1d5eXJXd2MwMVh0Tmt0ZlNPNHp4Z0s3ai9aL1lhRVk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU09CR0xBN0pPUEx4NUdoL3JWa1lOTS9CakwzRlgzd0NpU2h5SEc5Nm9YUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMU1iNnIvTjhJS2JnRzBzVjJzc3hSditic01helhCVitYaFdxMlFmd2xFRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldrNHZNZ1dxdHQyN013MGZKak9HNzNCU1BoaHNSWUdHOS9Jdnk3NkVGZXNIQ0N3STRVS3preFlVMVh0M1hOOGtCVHpWc1pzaHBmZXVvczhXZy9VbmlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTIsImFkdlNlY3JldEtleSI6IjdmSXZHMTVtRUZPUVVNUGtCdzRHTzVnZXRxMTlYUzhWY3dlNldiUmc2NFE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlVBTEN4c0d5VC02RUVwNHVkT2E2ZkEiLCJwaG9uZUlkIjoiM2UwMGQxYmEtMjEwMC00NzNmLTlmY2YtYmFjM2FiYzI3MWIyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjQ4cnNuUWJHMG9EYWNydEVZZ2U2aE9wWWpTVT0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaG55OWt5THhHSUt6blJvVE5lSktBejJHRWVVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTnJDaTZjT0VLTGxpYlFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiUDFiSUxVRFo4WXo4Y2hoRHYySmhXVzV5MzlKSkpkMjBxUE8rODJUbnR6bz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZGRqNjhaTXFzUS9zQlFXNmFMR3hCZ3JuSmdqWEJLbmJldm4zcnNMM1l0ZWhFY1dCRW93a3NZdUhjWWpVU0R0VjI2cjhybHRMTVQwSDdHVHRRZ2ErQmc9PSIsImRldmljZVNpZ25hdHVyZSI6IjR0NVFvcVJvdEgwMHZoOVpPOEV4OWZXbnY5OXNpSmptTHlVbTN5ajVPOE1rMkNwbHlCSGZ3anNHR09SWEM2SXZQL0R1K3NjZ2pyb2RKQVV3Q0RtamlnPT0ifSwibWUiOnsiaWQiOiIyMzQ4MTM1MjE5ODY4OjRAcy53aGF0c2FwcC5uZXQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODEzNTIxOTg2ODo0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlQ5V3lDMUEyZkdNL0hJWVE3OWlZVmx1Y3QvU1NTWGR0S2p6dnZOazU3YzYifX1dLCJwbGF0Zm9ybSI6ImlwaG9uZSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxOTgyNTA2MX0=",
  botname:   process.env.BOT_NAME === undefined ? 'IZUKU BOT' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'HASH' : process.env.OWNER_NAME,
  author:  process.env.PACK_INFO === undefined ? 'excel' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO === undefined ? 'IZUKU-Md' : process.env.PACK_INFO.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  typingprensence:  process.env.TYPING === undefined ? false : process.env.TYPING,
  autosendstatus:  process.env.STATUS_SENDER === undefined ? true : process.env.STATUS_SENDER,
anticall:  process.env.ANTI_CALL === undefined ? false : process.env.ANTI_CALL,
recordingpresence:  process.env.RECORDING === undefined ? false : process.env.RECORDING,	
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  afk:  process.env.AFK ||true,
  autobio:  process.env.AUTO_BIO === undefined ? '' : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'LUFFY',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'private' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
