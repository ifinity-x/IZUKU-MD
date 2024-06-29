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
  
  sessionName:  process.env.SESSION_ID ||  "IZUKU;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ04vL1ZncEdGQ3BDdityYlN4dk9LM3A5cDh0dXRYN3ZXRXZjVTZUVERWRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMnFidHhkZTEzRVgva0xuSEdwRlYwdS94VkJ5bGVBcUVwYXQ5MnZ4WjdRYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRUFlNbm9EWWJpYm5TdE4yMmNzODc2cDNaVVBCTXhjRGZ1MUxCc2VyM0d3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJod1FtMVBDNHpWZ1ZLTzl4K2RhaVp2TnIvaDNlZEIvZHJ1TVhoRHNsZVdJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJFZEFBd2MvOVhQMllrMk84WW02bHp1UG1udWYrd2hkVXhJYWhkeEpKV0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBQYkpYODgwOGxmOFM2dStoUE5wOXVBVGVjdzlaSStjditwckc4a21UU0E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR01aL1ZyK2VoTEl3RW80TkllRllHTldSNW1ibkR5K0JEWm1GUXN2cUVIVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlpGTnZKbHV6bDJYSXhIZ3ZBeFpWMmU4V0FxRHJPQVRvbzdtaE82R21VYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjViNjMrUGgxMlptY0lVbmhqczhYRnUrK0N3Mm01T2JhYXhROEtTcTJobjBrLytWV05LMjR1bkVEa1JjUVNQVzRGWm5YUE4yRExyejRERVVEcy9vSWlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU0LCJhZHZTZWNyZXRLZXkiOiJJZmovcDM3QnJUaWxGNUFFYjhBdEhxNHM5YXk1TnlPQ2RiQkFmcU1uaS9rPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6OTMsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo5MywiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJVdXdRSEF6NlFCZWtLWGVFV0pLR0ZRIiwicGhvbmVJZCI6IjhlNmM5MzM2LWFhNTQtNDJkNC04ODNlLTk3OTBkZWNmZjdkZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmNUpScTFkdEpPTncwL3hQRlZXYUpwdkJERzg9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImltTkNabTV1WVlNMVhOcGZXMWwvM0JnVG9zVT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01LUmdwc0lFT2YrL3JNR0dBc2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlJtcEZLaXlsc0hCU1ZDTjVFeURPZDBWaFJYY21jeUxiTXZkdVl1NElua1k9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlZqN0ZMREtRUHJnTTl0WlUxZElXY2pVZDlBQlVqNUxWV3JqaDk4c3NZZGY3L2dQTVFDc01qQVcxVkpXbkd1djBYQUE3ZE0zWERGdVVvZE9rTXhEZUNBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJpL1Q1d0w3WUd6R3ova3NYY2pMV1ZoOFFzSGYrakc3N3MrN0RFSjZsNFd4S09xZEFEckVWZ3BoaVBiQXpZc0NKQlRYT2VPbXF6UDdUT2tmbk94WGFnZz09In0sIm1lIjp7ImlkIjoiMjM0NzA4NjEyOTg5MjoyNUBzLndoYXRzYXBwLm5ldCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDg2MTI5ODkyOjI1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVacVJTb3NwYkJ3VWxRamVSTWd6bmRGWVVWM0puTWkyekwzYm1MdUNKNUcifX1dLCJwbGF0Zm9ybSI6ImlwaG9uZSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxOTY0ODE2MywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFBMnYifQ==",
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
