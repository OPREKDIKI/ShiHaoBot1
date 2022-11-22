import pkg from '@adiwajshing/baileys'
import fs  from 'fs'

const { prepareWAMessageMedia, generateWAMessageFromContent, proto } = pkg

let handler = async (m, { conn }) => {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./media/night.jpg') }, { upload: conn.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "5326844927399395",
"title": `𝐒𝐞𝐰𝐚𝐁𝗼𝐭 | 𝐁𝐲 𝐏𝐞𝐧𝐠𝐮𝐚𝐬𝐚`,
"description": `gaktau`,
"currencyCode": "IDR",
"bodyText": `gaktaukalo`,
"footerText": `koncol`,
"priceAmount1000": "30000000",
"productImageCount": 100,
"firstImageId": 1,
"salePriceAmount1000": "30000000",
"retailerId": `☯︎ᴅɪᴋɪ`,
"url": "wa.me/6281260730830"
},
"businessOwnerJid": "6281260730830@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: m })
conn.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
handler.help = ['sewa' , 'premium']
handler.tags = ['main']
handler.command = /^(sewa(bot))$/i

export default handler