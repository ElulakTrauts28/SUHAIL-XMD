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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_51_12_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjM1LFxuICAgICAgICA0NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTcxLFxuICAgICAgICA3NSxcbiAgICAgICAgMixcbiAgICAgICAgMjUyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTUxLFxuICAgICAgICA2MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzcsXG4gICAgICAgIDk2LFxuICAgICAgICA2NyxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTA2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTM2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDcxLFxuICAgICAgICAyMixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDk1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDExMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDQ2LFxuICAgICAgICA4NixcbiAgICAgICAgMjMsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTA2LFxuICAgICAgICA4MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ3LFxuICAgICAgICA2MCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTIzLFxuICAgICAgICA2NixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDksXG4gICAgICAgIDMzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDM0LFxuICAgICAgICA1NixcbiAgICAgICAgNzYsXG4gICAgICAgIDYyLFxuICAgICAgICA3OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjExLFxuICAgICAgICAyNDQsXG4gICAgICAgIDY4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTYsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDM4LFxuICAgICAgICAxNixcbiAgICAgICAgMTksXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTUwLFxuICAgICAgICAxNCxcbiAgICAgICAgMjksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzksXG4gICAgICAgIDUzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjUzLFxuICAgICAgICA0MixcbiAgICAgICAgMTYsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDExNixcbiAgICAgICAgMjIxLFxuICAgICAgICA1OCxcbiAgICAgICAgMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDg0LFxuICAgICAgICAxMixcbiAgICAgICAgMTcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjUzLFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQwLFxuICAgICAgICA3OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDYyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjksXG4gICAgICAgIDg1LFxuICAgICAgICAxNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzksXG4gICAgICAgIDk3LFxuICAgICAgICAxODIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTYzLFxuICAgICAgICA2MixcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTcxLFxuICAgICAgICAzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJGL2cwTGlFdWVDand0OXY2OTlRUUxVZHZjMm5ielNLMnZJcHhyWUxqaGx3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJrVWRGQTdERlRubXB3OGpaUktwdXNnXCIsXG4gIFwicGhvbmVJZFwiOiBcImM0YjQ5YWE2LThjMDItNGY3MC1hZjc5LTVhOTMxZGJkNTBkMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNyxcbiAgICAgIDE0MSxcbiAgICAgIDEyOCxcbiAgICAgIDUsXG4gICAgICAxMCxcbiAgICAgIDM2LFxuICAgICAgMjEsXG4gICAgICAyMzgsXG4gICAgICA1NSxcbiAgICAgIDE1NyxcbiAgICAgIDEwMyxcbiAgICAgIDAsXG4gICAgICAxNDcsXG4gICAgICAxMDAsXG4gICAgICA1OSxcbiAgICAgIDE2NSxcbiAgICAgIDQyLFxuICAgICAgMjUzLFxuICAgICAgMjIsXG4gICAgICAyNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDgsXG4gICAgICAxMzksXG4gICAgICAxMixcbiAgICAgIDExMCxcbiAgICAgIDI0NCxcbiAgICAgIDEzNixcbiAgICAgIDI1LFxuICAgICAgMTkyLFxuICAgICAgMTA2LFxuICAgICAgMzQsXG4gICAgICA2LFxuICAgICAgNyxcbiAgICAgIDcxLFxuICAgICAgOTYsXG4gICAgICA0OCxcbiAgICAgIDY2LFxuICAgICAgMjAyLFxuICAgICAgMjAxLFxuICAgICAgMTM3LFxuICAgICAgMjE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlJCNFlDMUFEXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTY3NDYwNjA1NDc6MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjk5MzkxNzUwODQwNzQ6MjBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSjJNbnM0QkVNN3ZzYm9HR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI3eU02QkUyOHFKL3FYejJWbHZsQUlaYTFRdzZNYjZvYWM1SThMU0U3d3pvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm1IR3hBdWIwLzRMeXdEd2QwOFpsQ1d3V3BxVi9ZTmVTdjZ0NFRsVnlXUlRLU0J2ejdRL1BPV3hTVkhMYkxCN3JJK1NsUzluRlBSMTgzV0VJd3pLNUFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInJjNnkzMWVUeE4rTUs1NVlSaDRYNmJhWnBWTzNadU51dDFWdXlkUjg1azdqOFpVdTVRU0g1R3ZIdDRPOHMvcjRyanRnenhRWm93UWFqa2ZKZmpUbERRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1Njc0NjA2MDU0NzoyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDU4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzMwNjQ2NTksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHVmtcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdWay5qc29uIjogIntcImtleURhdGFcIjpcInZ5cEtacEM2dWwvZzZOVGR1Wml3Y29EU1Foc1ZzYlhveDFrZmp3cHFBSkE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDMyNTA2Mzk3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzMwNjQzNjA3NzlcIn0iCn0="  // PUT your SESSION_ID 


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
