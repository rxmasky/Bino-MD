const fs = require('fs')
const chalk = require('chalk')

//global apis
global.APIs = {
	zenz: 'https://zenzapi.xyz', 
}
//global apikeys
global.APIKeys = {
	'https://zenzapi.xyz': '805a6c3fa9', //api keys from zenzi
}

//Database


//Heroku

global.herokuapi = process.env.HEROKU_API_KEY
global.herokuapp = process.env.HEROKU_APP_NAME

//settings

let fake = ['918075390990']
global.owner = [`${Arshad}`]
global.wame = "https://github.com/Sparkymon777/Bino-MD"
global.pemilik = ['918075390990']
global.premium = ['918075390990']
global.pengguna = ['ARSHAD']
global.footer = ['M A S K Y']
global.watermark = ['M A S K Y']
global.logo = process.env.LOGO
global.botname = ['MASKY BOT']
global.caption = ['MASKY 𝗕𝗢𝗧 𝗠𝗗']
global.ownername = ['ARSHAD MASKY']
global.tutorial = "https://youtube.com/@sparkymon777"
global.youtube = "github.com/Sparkymon777"
global.packname = "M A S K Y"
global.logo = process.env.LOGO
global.author = "ARSHAD"
global.sessionName = 'session' //session name
global.prefa = ['#','!','/',''] //prefix
global.sp = '🔵' //sp
global.dripstyping = false
global.dripsreadgroup = false
global.dripsreadall = false
global.dripsrecord = false
global.available = false
global.unavailable = true
global.limittot = 100,
global.reactmoji = false
global.imgjoinrpg = fs.readFileSync('./Library/image/Sparky.jpg')
global.imgmining = fs.readFileSync('./Library/image/Sparky.jpg')
global.imgdevil = fs.readFileSync('./Library/image/img/Sparky.jpg')
global.imgslime = fs.readFileSync('./Library/image/img/Sparky.jpg')
global.imgdemon = fs.readFileSync('./Library/image/img/Sparky.jpg')
global.imggoblin = fs.readFileSync('./Library/image/img/Sparky.jpg')
global.imgdemonking = fs.readFileSync('./Library/image/img/Sparky.jpg')
global.imgbehemoth = fs.readFileSync('./Library/image/img/Sparky.jpg')
global.f1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.f2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.f3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.f4 = 'application/zip'
global.f5 = 'application/pdf'
global.f6 = 'application/vnd.android.package-archive'
global.flaming = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text='
global.mess = {
    success: 'All set sucessfully changed settings!',
    public: 'Bino MD is now working in public mode',
    self: 'Bino MD is now working in private mode',
    admin: '*This feature is only for admin!*',
    botAdmin: '*Bino bot must be admin first!*',
    owner: '*this feature is only for owner*',
    group: '*Feature is only for groups!*',
    grouponly: '*Group Mode Only*',
    private: 'Features Used Only For Private Chat!',
    bot: 'This feature in only for the bot number',
    wait: '*please wait it is being processed....⚙️*',
    endLimit: '*Your daily limit has expired the limit will be reseted every 12 hours*',
    noPetualang: '*you are not in rpg database type #joinrpg* _ur name_'
}
global.limitawal = {
    premium: "Infinity", //premium user limit
    free: 100000 //free user limit
}
global.rpg = {
darahawal: 100,
besiawal: 15,
goldawal: 10,
emeraldawal: 5,
umpanawal: 5,
potionawal: 1
}
global.visoka = { url: 'https://i.imgur.com/MMlC13B.mp4' }
global.vid = { url: 'https://i.imgur.com/MMlC13B.mp4' }

//—————「 Set Random Image Menu 」—————//

global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.mehk = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='
global.awog = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text='
global.mohai = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text='
global.mhehe = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text='


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
