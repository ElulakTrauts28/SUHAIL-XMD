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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_23_24_11_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTI2LFxuICAgICAgICA0NixcbiAgICAgICAgMTUxLFxuICAgICAgICA5OCxcbiAgICAgICAgMjM0LFxuICAgICAgICA3NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjUsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDQ1LFxuICAgICAgICA2MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODQsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDY3LFxuICAgICAgICAyNCxcbiAgICAgICAgODgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDU4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMCxcbiAgICAgICAgMCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTksXG4gICAgICAgIDE5NixcbiAgICAgICAgNTEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjgsXG4gICAgICAgIDk0LFxuICAgICAgICA2OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDExNixcbiAgICAgICAgMjM1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTgsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjksXG4gICAgICAgIDgwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDkwLFxuICAgICAgICAxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjcsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODAsXG4gICAgICAgIDksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDM0LFxuICAgICAgICA1MixcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTIyLFxuICAgICAgICA3MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDU2LFxuICAgICAgICA1MixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQ3LFxuICAgICAgICA1OCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxODgsXG4gICAgICAgIDk0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxODIsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzIsXG4gICAgICAgIDMxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTUyLFxuICAgICAgICA2NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDg5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjI4LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTksXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDMxLFxuICAgICAgICA3NSxcbiAgICAgICAgNixcbiAgICAgICAgNDQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjE2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDY2LFxuICAgICAgICAxODUsXG4gICAgICAgIDc5LFxuICAgICAgICAxMyxcbiAgICAgICAgMjA0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDExNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDY5LFxuICAgICAgICAyNDksXG4gICAgICAgIDY2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDMzLFxuICAgICAgICA0MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTAzLFxuICAgICAgICA4NCxcbiAgICAgICAgODcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTkyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTkzLFxuICAgICAgICA0MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwLFxuICAgICAgICA5OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNSxcbiAgICAgICAgODcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTksXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjUzLFxuICAgICAgICA5MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDExMixcbiAgICAgICAgNzAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI2cmhRbkdJSWFyRGtvVW5ES1l6S003UWpuSTZwTG9Zam9qY1RLSkJBb2Q0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ4alFVQVc5alRmS1FTMlhobDJWUUxRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjY3MTQwOGM0LTExNTQtNGZmYy04ZDNjLWY0N2ZjM2M5NGIzYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjgsXG4gICAgICAyMjcsXG4gICAgICAxMDMsXG4gICAgICAxMzUsXG4gICAgICAyMDYsXG4gICAgICAxNDcsXG4gICAgICAxNTAsXG4gICAgICA5OCxcbiAgICAgIDMxLFxuICAgICAgNjIsXG4gICAgICAxMTAsXG4gICAgICAxNjksXG4gICAgICAxMjQsXG4gICAgICAxNzUsXG4gICAgICAxMTYsXG4gICAgICAxNTksXG4gICAgICAyMTUsXG4gICAgICA4MixcbiAgICAgIDExNixcbiAgICAgIDExM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzcsXG4gICAgICA5NyxcbiAgICAgIDUsXG4gICAgICAxNzAsXG4gICAgICAxOTIsXG4gICAgICAxNCxcbiAgICAgIDM2LFxuICAgICAgODUsXG4gICAgICAxMjEsXG4gICAgICAxNjEsXG4gICAgICAyMTksXG4gICAgICAxNTgsXG4gICAgICAxNTUsXG4gICAgICAyMDQsXG4gICAgICAxNTUsXG4gICAgICAxMzgsXG4gICAgICA0OSxcbiAgICAgIDg5LFxuICAgICAgMTQyLFxuICAgICAgMjMxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSnVNbnM0QkVKWGYrYmtHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI3eU02QkUyOHFKL3FYejJWbHZsQUlaYTFRdzZNYjZvYWM1SThMU0U3d3pvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkI5eGpwRWFHSVdWYWxOcUdOUEQ3dTQyUXNGdkl5Nm5IUHdxT2p6SVlTbTBCd0ZXN0x2ckQ1QUtlWWR2WXNhZzZPQzVPU3dJdGg1OUxZd0Y2Ritrc0RBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImRkbVZ5MkRLR3JoVkw3dXdjd2ZkNWdGOW9pV0xQcHZBYXA3ZjcvTTRKWFJJZEpKTW1sZENhQVg2dklHMHlsVU5OK0xhUUg4RzR5K2JjQncweTNBN2pnPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU2NzQ2MDYwNTQ3OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjk5MzkxNzUwODQwNzQ6N0BsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1Njc0NjA2MDU0Nzo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjE0NTA1MFxufSIKfQ=="  // PUT your SESSION_ID 


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
