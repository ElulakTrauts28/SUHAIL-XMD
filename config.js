const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+256746060547";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_02_11_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2NixcbiAgICAgICAgNjgsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjA3LFxuICAgICAgICAzMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjI0LFxuICAgICAgICA3OSxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDUxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTYyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQ3LFxuICAgICAgICA0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0LFxuICAgICAgICA5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjMwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI4LFxuICAgICAgICAyNDksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDQxLFxuICAgICAgICAxODYsXG4gICAgICAgIDIxLFxuICAgICAgICA3NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTAxLFxuICAgICAgICAzMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDc1LFxuICAgICAgICAyLFxuICAgICAgICA2NSxcbiAgICAgICAgMjQxLFxuICAgICAgICA3LFxuICAgICAgICAxNTksXG4gICAgICAgIDI4LFxuICAgICAgICAxMzksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDAsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTM4LFxuICAgICAgICA5NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDM4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDgxLFxuICAgICAgICA2MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTg3LFxuICAgICAgICA3MixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDksXG4gICAgICAgIDE0MixcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTI2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTkxLFxuICAgICAgICA0MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzcsXG4gICAgICAgIDI5LFxuICAgICAgICA5NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyMixcbiAgICAgICAgNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDQzLFxuICAgICAgICAxODEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzksXG4gICAgICAgIDQ4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQyLFxuICAgICAgICA1MixcbiAgICAgICAgODQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTE1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDM3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTIzLFxuICAgICAgICA3NixcbiAgICAgICAgNzgsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTE4LFxuICAgICAgICA3OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjksXG4gICAgICAgIDE5NSxcbiAgICAgICAgNixcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDU5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDg5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDksXG4gICAgICAgIDI4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTE3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxLFxuICAgICAgICAyMTksXG4gICAgICAgIDIzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTExLFxuICBcImFkdlNlY3JldEtleVwiOiBcIllqVkdUcUk3MkNvMnVmQWNpYm0xSTQ4NUwwNTlQalQxNiswbFQycmY5eDA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU2NzQ2MDYwNTQ3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCM0Y3Mzg1OUYxNjQ0MjdCOEUxQzc3NjgyNjkzOUI3RFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzE5OTYxNTlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiV0dfOUg4M2dUbS1OazFHSk9LQk9LZ1wiLFxuICBcInBob25lSWRcIjogXCJjMmU5MmY5Yy0yMzNlLTQxZDMtYWFlNy0yN2IyNjgzMzc1N2JcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM1LFxuICAgICAgNyxcbiAgICAgIDc5LFxuICAgICAgOCxcbiAgICAgIDE0OSxcbiAgICAgIDc2LFxuICAgICAgMTgwLFxuICAgICAgMTQzLFxuICAgICAgODIsXG4gICAgICAxOTIsXG4gICAgICAxNDQsXG4gICAgICAxNzMsXG4gICAgICAyMDAsXG4gICAgICAxMzMsXG4gICAgICAyNDQsXG4gICAgICAxOSxcbiAgICAgIDYyLFxuICAgICAgMjI3LFxuICAgICAgMTY0LFxuICAgICAgMTIyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MSxcbiAgICAgIDExOSxcbiAgICAgIDIxMyxcbiAgICAgIDIwMyxcbiAgICAgIDI2LFxuICAgICAgMTAxLFxuICAgICAgMTgxLFxuICAgICAgMjksXG4gICAgICAxMjMsXG4gICAgICA5OSxcbiAgICAgIDUyLFxuICAgICAgMTg5LFxuICAgICAgMTA4LFxuICAgICAgOTIsXG4gICAgICAxNzQsXG4gICAgICAyMDQsXG4gICAgICAxOTksXG4gICAgICA1OCxcbiAgICAgIDcwLFxuICAgICAgMTI1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkVaRUdDUDlTXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTY3NDYwNjA1NDc6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiOTkzOTE3NTA4NDA3NDoyQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIlRyYXV0cyBFbHVsYWtcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMenYwcU1FRVBqVDhMa0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkN1SHlpSmxxa2FXT01PdCt0YTJPUmh6REdmZVBlenY3TFBSUURLRUFCRXc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSENBenFtRE5FZjBsK05OZERwQTdqWWdvSFJYTmRtMzlXb0NIQ1hROGJ5RVIzaFhVOFFKVlRyQXNyYy9uS1pVaTJBY01ONmx2aXRGZlFHcFZ6cnkzQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMHg0Q3M5cEI3N3ZwTFhlWlR3YzI2NlZ3S0FoSTJEaEloUHc4VDd3V1pKcmgyN0lEVVFxcWR0NFhka0hYd09IamZ1NzJUV0lIQm52SkdsWXJRTmJJaEE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU2NzQ2MDYwNTQ3OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxOTk2MTU2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSXdaXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJd1ouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJVaEp0MlpiMHZWY2hHSlhMZ21KL0ZxNDM0enp3VGdTY1NPV1g2ZkVUdWlvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExNDg0OTk5MDAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMTk5NjE1ODk0OFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Trauts-md",
  ownername:process.env.OWNER_NAME|| "Trauts",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
