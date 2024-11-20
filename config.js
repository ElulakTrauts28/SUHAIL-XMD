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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_53_11_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwNixcbiAgICAgICAgNDIsXG4gICAgICAgIDQyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDExMixcbiAgICAgICAgNDMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTM3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTExLFxuICAgICAgICAyNDAsXG4gICAgICAgIDkyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNixcbiAgICAgICAgMTYsXG4gICAgICAgIDc5LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MyxcbiAgICAgICAgMTUwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTMsXG4gICAgICAgIDU3LFxuICAgICAgICAxODQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMixcbiAgICAgICAgMzEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxLFxuICAgICAgICA2MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMixcbiAgICAgICAgNTUsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDksXG4gICAgICAgIDYyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTA1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTg4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyMixcbiAgICAgICAgNTYsXG4gICAgICAgIDk0LFxuICAgICAgICA2OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTEyLFxuICAgICAgICA2MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTY1LFxuICAgICAgICA5MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTg4LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTksXG4gICAgICAgIDIxLFxuICAgICAgICA3LFxuICAgICAgICAxODcsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDM0LFxuICAgICAgICA1NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTk1LFxuICAgICAgICA0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDYzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTI4LFxuICAgICAgICA4OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTc1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDcyLFxuICAgICAgICAxNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDM4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDQwLFxuICAgICAgICAxODksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDUzLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTY3LFxuICAgICAgICA2OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDc4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgOTEsXG4gICAgICAgIDk3LFxuICAgICAgICAxODQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODcsXG4gICAgICAgIDU0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTY1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxODIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTksXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjksXG4gICAgICAgIDkzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxODEsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODEsXG4gICAgICAgIDUxLFxuICAgICAgICA0NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMCxcbiAgICAgICAgODAsXG4gICAgICAgIDgyLFxuICAgICAgICAxODcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTk2LFxuICAgICAgICA3OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxODQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQwLFxuICAgICAgICA3NixcbiAgICAgICAgMTAxLFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZG95bGZId1phQStMeGhDbW5ZZEdpYkZ6V0pWRFQ5ZVhqRUxPYS9RSE43OD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOTFhNDBHa2JTVlMwT2doOFJIdjA2UVwiLFxuICBcInBob25lSWRcIjogXCI2NDMyYjYxMi02NWMxLTRmMGQtOTc3Mi1lZTIxYmQwZmM4ODVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA0LFxuICAgICAgMTYwLFxuICAgICAgMTE5LFxuICAgICAgMjU1LFxuICAgICAgMTI0LFxuICAgICAgMTIxLFxuICAgICAgOTUsXG4gICAgICAxMzQsXG4gICAgICAxMzMsXG4gICAgICA5MyxcbiAgICAgIDcxLFxuICAgICAgNTcsXG4gICAgICA0NCxcbiAgICAgIDE2NyxcbiAgICAgIDQ0LFxuICAgICAgMjExLFxuICAgICAgMjM1LFxuICAgICAgMTU5LFxuICAgICAgMTI1LFxuICAgICAgMTY2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTQsXG4gICAgICA1NyxcbiAgICAgIDc4LFxuICAgICAgNzIsXG4gICAgICAyMSxcbiAgICAgIDEzMyxcbiAgICAgIDI1NCxcbiAgICAgIDEwMixcbiAgICAgIDcxLFxuICAgICAgMjQzLFxuICAgICAgMjE4LFxuICAgICAgMjMsXG4gICAgICAxNjcsXG4gICAgICAxNjksXG4gICAgICAxMzIsXG4gICAgICAxOTIsXG4gICAgICA5NyxcbiAgICAgIDEzMCxcbiAgICAgIDc0LFxuICAgICAgMTA2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS2lxcTc0REVOK3E5cmtHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIyZXA4K2xaK2xqNS9LMmZhbzFhMi9pWGU3ZTQrd0kvZUc0LzNDY0xwV3lvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImsxUTNpRlludm52ODRZOVZlVmJFWFhjSE81dTlicGcvbnM0RFRSbXI3WHEzTzdiSld0Tjlxcm40WTZkYWFZM0VNcVBDMEgvMENRcGRHb2tYcGNYOUJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImU4ZUhtbU1qclFqSk5LcS84eTc5QTlIQlVmYTFud2N4alhVdWI2ZFlIOE92dzZxdS9xc0c5d0E3VWFzRm9kd0phcDJHY0xIR0o0d3FFeFdMTW14TkFRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU2NzQ2MDYwNTQ3OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjk5MzkxNzUwODQwNzQ6NUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1Njc0NjA2MDU0Nzo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjA4OTE4OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1uRlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTW5GLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUUdaSVBUbUJPdXBudTFwOVNxdGt1bTVmaDcwRVZOd2xZNSs5dlZkTkI2Yz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5MzYwMzk3MjAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1uRy5qc29uIjogIntcImtleURhdGFcIjpcImpXM2FpNUE2UDVFWjMwU0h6TVlUZ09lVGxUMTZuWHI0VTBqNUVUbmhROUk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTM2MDM5NzIwLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzIwODkxNzYyMzFcIn0iCn0="  // PUT your SESSION_ID 


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
