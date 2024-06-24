const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '2347039570336'
global.mongodb = process.env.MONGODB_URI || "mongodb://u67wtnui9m87lq4yhmvv:tpelVygzO9NWafGwF0D@bmrkwjjqyq2xfesqxn7z-mongodb.services.clever-cloud.com:2052/bmrkwjjqyq2xfesqxn7z"
global.port= process.env.PORT || 5000
global.email = 'sam@secktor.live'
global.github = 'https://github.com/excelottah6/IZUKU-MD'
global.location = 'Sultanpur IN'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || '2347039570336,2348050907760'
global.devs = '2347039570336,2348050907760';
global.website = 'https://github.com/excelottah6/IZUKU-Md' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://raw.githubusercontent.com/SecktorBot/Brandimages/main/logos/SocialLogo%201.png'
module.exports = {
  
  sessionName:  process.env.SESSION_ID ||  "IZUKU;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU1BNMHFBRit3SHZCeWJacXJYdStsNE1WSmNndWNBcmp1S1lVb2o1aWIxcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRlhvUFdhcVFzaERjZUwyNnZUNFNJZlIzZzR1VE9iOTVDaDNpZU54ZDIxND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxSEN3RVNJRHVMa3ZlZEgwWGdvekE2cUV1MlRZa2puaGdwbGgraDB2M0dFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4aG0zYUxhaU1lcWxYUjYvS0ZsVXBjcDkwWEtwVm03dG1wOUg2a3EvYjBvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNMWElXa1lEeVUxZkVnd0ViUTdZejRrQ3JoU2VIRm5WelFHYzFjTTNnMjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFRSG1TcEQ4QVhzQjZ1Y2ZnandkaS9GN3RLOWJxeS9obktpTDdPVE1NbTA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT04yVzBxY0lPK0RIOVhzY1V1QS80cWFIYVNBZzRXUVBCNTB3UWpVTnVYUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUJ1U2EwWitNK3JOYllZblpFV0gvUWprZmJVWDNuMlZ5d0c5cGo0eFZRTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InY3WkRDZ2J6S05XYzZidW5TbnpFM1FXMkxZSGFWL3VGMDZPOWlFZFdaVWJ2a0x3SDdIKzgyUWJsaEpRaUQvUDZVRTFyQXd4NGllclRmN0RKZGtRSWpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MiwiYWR2U2VjcmV0S2V5IjoiMHFvQkx6YmFPYitPRE11dEtUWWZLMWRmMjFqbkhMZW0xL3dXcDFlcXZ1dz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ3MDY4NjU2NzI3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjRBRDM1MkZFRTA2RTg3RDUyMEQwM0E1QjcyNEQ4NzU2In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTkyNjUwMzl9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIzNDcwNjg2NTY3MjdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQjA4NkJGMjk5QkI0MEYyN0VBQUMzOUVGMTYzNTUwMzIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxOTI2NTA0MX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiZFdvUlhhNXhSTVN3Uy1kdi01X1hBUSIsInBob25lSWQiOiJmOGJmOTQwNi1lODFiLTQ5YWEtODMxYS03MjNkZWRhNjg0N2MiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYjIrWTFVN2t0YkxmZ2pTNW9LdjEwdmFhVjZNPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikxtd0RCVitnUEZvY04xRWV5MEV2emNBQngxRT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiIzNDFUWEpDRiIsIm1lIjp7ImlkIjoiMjM0NzA2ODY1NjcyNzoxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ik1JVE5JQ0sgRlggRlVORFoiLCJsaWQiOiIxODc2MDgxOTgyMjczMjoxQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTXZDcjdBSEVQL041N01HR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiYjVxUGFhTkg0REp4MTFQQVk5d3FkUTNOd051bEQzZUxrZVhjaXQ3aTlYUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiLzNLMTl2SFV1K3l3S2NuUUwzeVdqQmdZZ3BOWjZXS3k4eUNkUHgvVnUwQzhFNFVIbnRmREJnd3Q3d2JZSWFoMmw1UDRsWk9rdzl0Y2hxc0xnOTlWQlE9PSIsImRldmljZVNpZ25hdHVyZSI6ImorOHJxVUdhdktHaEt4SmtuRWxCNjcwVElVTUptZTZxL0RMY1NrM0Z6VHUwc1Z2NjZya2xvV3JuSDQxY3dkcy9pVDF3TWlYUnN0WVFEbGtKZXpWbGlnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0NzA2ODY1NjcyNzoxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlcrYWoybWpSK0F5Y2RkVHdHUGNLblVOemNEYnBROTNpNUhsM0lyZTR2VjAifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBa0lEUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxOTI2NTAzNiwibGFzdFByb3BIYXNoIjoiMWxPU0VJIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFIVzYifQ==",
  botname:   process.env.BOT_NAME === undefined ? 'IZUKU BOT' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'excel' : process.env.OWNER_NAME,
  author:  process.env.PACK_INFO === undefined ? 'excel' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO === undefined ? 'IZUKU-Md' : process.env.PACK_INFO.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  typingprensence:  process.env.TYPING === undefined ? false : process.env.TYPING,
  autosendstatus:  process.env.STATUS_SENDER === undefined ? false : process.env.STATUS_SENDER,
anticall:  process.env.ANTI_CALL === undefined ? false : process.env.ANTI_CALL,
recordingpresence:  process.env.RECORDING === undefined ? false : process.env.RECORDING,	
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? true : process.env.LEVEL_UP_MESSAGE,
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
  LANG: process.env.THEME|| 'IZUKU',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'private' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
