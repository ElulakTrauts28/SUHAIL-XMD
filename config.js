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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://d.uguu.se/criEizDo.jpg" || "https://d.uguu.se/criEizDo.jpg" ; // SET LOGO FOR IMAGE 
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
global.userImages= process.env.USER_IMAGES || "https://d.uguu.se/criEizDo.jpg" // "image" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_41_11_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDgzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODMsXG4gICAgICAgIDcwLFxuICAgICAgICA5MixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDksXG4gICAgICAgIDc2LFxuICAgICAgICAxMjksXG4gICAgICAgIDExLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjE1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDExMixcbiAgICAgICAgNCxcbiAgICAgICAgMjE1LFxuICAgICAgICA4OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDQyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNixcbiAgICAgICAgMjgsXG4gICAgICAgIDU1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDg1LFxuICAgICAgICA5NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTc4LFxuICAgICAgICA1MixcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDM1LFxuICAgICAgICA2MSxcbiAgICAgICAgNTksXG4gICAgICAgIDE0MixcbiAgICAgICAgNzIsXG4gICAgICAgIDMzLFxuICAgICAgICAyMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTgwLFxuICAgICAgICA5NCxcbiAgICAgICAgODQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzgsXG4gICAgICAgIDQzLFxuICAgICAgICA3NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDQyLFxuICAgICAgICA5OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3OSxcbiAgICAgICAgODMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDg5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyNixcbiAgICAgICAgODcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDUzLFxuICAgICAgICA2NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDg0LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNyxcbiAgICAgICAgMixcbiAgICAgICAgMjM1LFxuICAgICAgICA3MixcbiAgICAgICAgMTA0LFxuICAgICAgICAxODAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTY4LFxuICAgICAgICA2MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODUsXG4gICAgICAgIDk0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDk3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTg0LFxuICAgICAgICA3MixcbiAgICAgICAgMTksXG4gICAgICAgIDgsXG4gICAgICAgIDgwLFxuICAgICAgICA3MixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDI1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTU2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxODQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTM2LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMDVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA3NixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA1MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDc0LFxuICAgICAgICA5MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjI4LFxuICAgICAgICA4OSxcbiAgICAgICAgODEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAzOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMixcbiAgICAgICAgOTAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODIsXG4gICAgICAgIDMsXG4gICAgICAgIDU1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxODEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgODksXG4gICAgICAgIDU4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzksXG4gICAgICAgIDQ1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTYxLFxuICAgICAgICA5MyxcbiAgICAgICAgMjksXG4gICAgICAgIDI0NixcbiAgICAgICAgNjQsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZExkTDlFbHE0am92OTNUTzhlc21oL2t4QXZuV2xGcDNybDRKWDBYN0lsST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTY3NDYwNjA1NDdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkNFNDBEQUMzNUNFNUQ3Q0VERDcwMzdGRTgxODAyMUJBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMjMwNDUxMlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJyT3JyR2lVZlRrbS1Ra3U0Zlh5VDNnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjIyZDI1YmZhLThiOTYtNDRkNS04ZTQ2LTFiZDZjZDc5NzE4OFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2MyxcbiAgICAgIDg3LFxuICAgICAgMTQwLFxuICAgICAgMzMsXG4gICAgICAxODksXG4gICAgICA3OSxcbiAgICAgIDczLFxuICAgICAgMTYzLFxuICAgICAgNDMsXG4gICAgICAxOTIsXG4gICAgICAxODUsXG4gICAgICAzMSxcbiAgICAgIDE3OCxcbiAgICAgIDcyLFxuICAgICAgMTg3LFxuICAgICAgODUsXG4gICAgICAxMCxcbiAgICAgIDIyNSxcbiAgICAgIDE4MCxcbiAgICAgIDI0NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNixcbiAgICAgIDIzNixcbiAgICAgIDQxLFxuICAgICAgMTAsXG4gICAgICAxNTQsXG4gICAgICAxNjIsXG4gICAgICAxNTgsXG4gICAgICAxMjgsXG4gICAgICA4NyxcbiAgICAgIDE5NyxcbiAgICAgIDYzLFxuICAgICAgMTcsXG4gICAgICAyMjEsXG4gICAgICAxODIsXG4gICAgICA3NixcbiAgICAgIDU1LFxuICAgICAgMTU0LFxuICAgICAgMTM5LFxuICAgICAgMjA0LFxuICAgICAgMjMzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjJDRkhETkMyXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTY3NDYwNjA1NDc6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjk5MzkxNzUwODQwNzQ6MTJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSnVNbnM0QkVQTzhnN29HR0FZZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI3eU02QkUyOHFKL3FYejJWbHZsQUlaYTFRdzZNYjZvYWM1SThMU0U3d3pvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInNsU1YrSWY1OUlOZVBoODVRY2RLaWowM0V0dUVrcVkwWVRubHBFNnBMdUNGYkw4V2JhSzVCOWNMVGhYT0JSME8vNENaNUxCSVhBSzdoTDVHdjBGZUR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInNJS1dxVnlTMlV2NDJiZUxiemN6STdKRFczUXBiWE9VRmUwWE9nRmp6bDVabzFLSTA5ZUNLMUs0SW04UnlEM00xcElsZVdKTjJLaHFDOTFXYklOMmp3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1Njc0NjA2MDU0NzoxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDU4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzIzMDQ1MDQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQN29cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVA3by5qc29uIjogIntcImtleURhdGFcIjpcImF6RW1NbnNOZzhVbERtR1doQ20rOUVsSUhObUYxSldFOUNTeVJQNmQySGs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDMyNTA2Mzk1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
