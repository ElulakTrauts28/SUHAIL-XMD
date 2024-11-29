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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_04_52_11_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDcyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDgwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDI2LFxuICAgICAgICA2NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTE2LFxuICAgICAgICA5OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDM0LFxuICAgICAgICAxODYsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDg1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTg5LFxuICAgICAgICA4MixcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI3LFxuICAgICAgICA3LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcyLFxuICAgICAgICAzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAwLFxuICAgICAgICA4LFxuICAgICAgICAzNixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDExLFxuICAgICAgICAxNTMsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTMxLFxuICAgICAgICA5NixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDExMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTc2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAzNSxcbiAgICAgICAgODEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjIxLFxuICAgICAgICA2MyxcbiAgICAgICAgOTksXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDUxLFxuICAgICAgICA4NixcbiAgICAgICAgNSxcbiAgICAgICAgMTk2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTc4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTg4LFxuICAgICAgICA0NCxcbiAgICAgICAgODUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDgsXG4gICAgICAgIDU5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDk5LFxuICAgICAgICAzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNixcbiAgICAgICAgMjIsXG4gICAgICAgIDM1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDg2LFxuICAgICAgICA2OCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI1LFxuICAgICAgICAxODUsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxODQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTMxLFxuICAgICAgICA2MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxODcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDYzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgODBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMzlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjA4LFxuICAgICAgICA0NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDExMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxODMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTI5LFxuICAgICAgICAzMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDk1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTMwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTU2LFxuICAgICAgICA2NSxcbiAgICAgICAgNixcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwia0VmZHRVSkUwVnpuZm5NUWtsbGFmanhJTDdSbFI0ZjBaRER3UC9WOFRqZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwielo3ODFwWnBSWWVlZlpTLTRqTXBOQVwiLFxuICBcInBob25lSWRcIjogXCJjODE3NjIwZS04OTJjLTRkNmEtYWMzZC1mYzNlYTZlYmJiNmZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIzLFxuICAgICAgMjE5LFxuICAgICAgMTU0LFxuICAgICAgMTQyLFxuICAgICAgMjIwLFxuICAgICAgMjksXG4gICAgICAyNCxcbiAgICAgIDYzLFxuICAgICAgNDAsXG4gICAgICAxNjcsXG4gICAgICAxNzIsXG4gICAgICAxOTAsXG4gICAgICAxMjUsXG4gICAgICAyMzUsXG4gICAgICAyNSxcbiAgICAgIDIxOCxcbiAgICAgIDE5NyxcbiAgICAgIDE2OSxcbiAgICAgIDE2MixcbiAgICAgIDExMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjYsXG4gICAgICAyMjMsXG4gICAgICAyMjUsXG4gICAgICAyNDMsXG4gICAgICAxMSxcbiAgICAgIDE3MixcbiAgICAgIDQ4LFxuICAgICAgMjgsXG4gICAgICAyNSxcbiAgICAgIDU3LFxuICAgICAgODUsXG4gICAgICA1MyxcbiAgICAgIDU1LFxuICAgICAgMjI1LFxuICAgICAgMzcsXG4gICAgICAyNDAsXG4gICAgICA0NSxcbiAgICAgIDc1LFxuICAgICAgOTUsXG4gICAgICAyMTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMkcyUFo5OVJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1Njc0NjA2MDU0NzoxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiOTkzOTE3NTA4NDA3NDoxNkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKeU1uczRCRU91UXBib0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjd5TTZCRTI4cUovcVh6MlZsdmxBSVphMVF3Nk1iNm9hYzVJOExTRTd3em89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUlVjeGtQVm9MRFlEanJuWldLNDQxN2plY1JsWDV0OEowT2gyK01BTU9YazNjdGZRLzllVXA0S3E4ZTZyWld5dWQ1b0QyVGpTVmM0bFJDRFp5b3E0QkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiOUo3YzJjQ3JrbTkxKzJ1OHNwOVJUUlQ5UzA1dVdzTEg0UVY4UTNBV2tCazhGalp3TDlYOEZObWxMUzBFTDJWS3YvcDVTZWR4Z2NhV3RENnBFZnp5aHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU2NzQ2MDYwNTQ3OjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjg1NTkxOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVA3b1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUDdvLmpzb24iOiAie1wia2V5RGF0YVwiOlwiYXpFbU1uc05nOFVsRG1HV2hDbSs5RWxJSE5tRjFKV0U5Q1N5UlA2ZDJIaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0MzI1MDYzOTUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
