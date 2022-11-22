import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix }) => {
let pp = 'https://telegra.ph/file/7bb968654d804df83cc81.jpg'
let name = await conn.getName(m.sender)
let but1 = '𝐎𝐖𝐍𝐄𝐑'
let bit = usedPrefix + 'owner'
let donasi = `▶ ᴅᴜᴋᴜɴɢ ᴛᴇʀᴜs sʜɪ ʜᴀᴏ ʙᴏᴛ
☯︎ ᴅᴀɴᴀ = 6281260730830
☯︎ ᴘᴜʟsᴀ = 6281260730830

𝐍𝗼𝐭𝐞 : 𝐉𝐢𝐤𝐚 𝐒𝐮𝐝𝐚𝐡 𝐃𝗼𝐧𝐚𝐬𝐢 𝐒𝐢𝐥𝐚𝐡𝐤𝐚𝐧 𝐊𝐢𝐫𝗺
𝐁𝐮𝐤𝐭𝐢 𝐊𝐞 𝐎𝐰𝐧𝐞𝐫!!
𝐍𝐨𝐭𝐞²: 𝐌𝐮𝐧𝐠𝐤𝐢𝐧 𝐒𝐞𝐭𝐞𝐥𝐚𝐡 𝐃𝐨𝐧𝐚𝐬𝐢 𝐊𝐮𝐥𝐭𝐢𝐯𝐚𝐬𝐢 𝐌𝐮 𝐌𝐞𝐧𝐢𝐧𝐠𝐤𝐚𝐭 ^_^

𝐀𝐭𝐚𝐮 𝐊𝐥𝐢𝐤 𝐃𝐢 𝐁𝐚𝐰𝐚𝐡`
await conn.sendButtonDoc(m.chat, ucapan + name, donasi, but1, bit, fkontak, {
			contextInfo: {
				forwardingScore: fsizedoc,
				externalAdReply: {
                    body: '© 𝘼𝙠𝙞𝙤 𝘽𝙤𝙩',
    containsAutoReply: true,
    mediaType: 1,
    mediaUrl: hwaifu.getRandom(), 
    renderLargerThumbnail: true,
    showAdAttribution: true,
    sourceId: '© 𝘼𝙠𝙞𝙤 𝘽𝙤𝙩',
    sourceType: 'PDF',
    previewType: 'PDF',
    sourceUrl: sgc,
    thumbnail: await(await fetch(pp)).buffer(),
    thumbnailUrl: sgc,
    title: '☯︎ ᴘᴇʀғᴇᴄᴛ ᴡᴏʀʟᴅ legends'  
				}
			}
})
}
handler.tags = ['donasi', 'donate']
handler.help = ['info']
handler.command = /^(donate|donasi)$/i

export default handler