import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, args }) => {
let url = 'https://telegra.ph/file/1759d54cf5192df1dc944.jpg'
let cap = `━━ꕥ〔 *𝚂𝙴𝚆𝙰 & 𝙿𝚁𝙴𝙼𝙸𝚄𝙼* 〕ꕥ━⬣

┏━ꕥ〔 𝙷𝙰𝚁𝙶𝙰 𝚂𝙴𝚆𝙰 〕
┃
┃✾ 4 ʜᴀʀɪ 5ᴋ / ɢʀᴏᴜᴘ ( 1 Group )
┃✾ 1 Minggu 10ᴋ / ɢʀᴏᴜᴘ ( 1 Group )
┃✾ 1 Bulan 20K / ɢʀᴏᴜᴘ ( 1 Group )
┃✾ 3 Bulan 25K /Group (1Group)
┃✾ 6 Bulan 35K /Group (1Group)
┃✾ ᴘᴇʀᴍᴀɴᴇɴ 50K / ɢʀᴏᴜᴘ ( 1 Group )+Premium
┗━━ꕥ *${author}* ꕥ━⬣

┏━ꕥ〔 𝙷𝙰𝚁𝙶𝙰 𝙿𝚁𝙴𝙼𝙸𝚄𝙼 〕
┃
┃✾ 15 ʜᴀʀɪ 10ᴋ ( 1 Nomor + 10 JT )
┃✾ 30 ʜᴀʀɪ 15ᴋ ( 1 Nomor + 100 JT )
┃✾ 45 ʜᴀʀɪ 20ᴋ ( 1 Nomor + 10 M )
┃✾ 60 ʜᴀʀɪ 25ᴋ ( 1 Nomor + 100 M )
┃✾ ᴘᴇʀᴍᴀɴᴇɴ 30ᴋ ( 1 Nomor + 10 T )
┃
┗━━ꕥ *${author}* ꕥ━⬣

┏━ꕥ〔 ꜰɪᴛᴜʀ 500+ 〕
┃
┃✾ ᴡᴇʟᴄᴏᴍᴇ
┃✾ ᴋɪᴄᴋ
┃✾ ᴀɴᴛɪʟɪɴᴋ
┃✾ ꜱᴛɪᴋᴇʀ
┃✾ ꜱᴏᴜɴᴅ
┃✾ ᴀɴɪᴍᴇ
┃✾ ꜱᴇɴᴅ ᴠɪʀᴛᴇx
┃✾ ꜱᴇɴᴅ ʙᴜɢ
┃✾ ɢᴀᴍᴇ ʀᴘɢ
┃✾ ᴅʟʟ
┃
┗━━ꕥ *${author}* ꕥ━⬣
`
conn.sendButtonDoc(m.chat, cap, author, 'owner', usedPrefix + 'owner', m, {
			contextInfo: {
				forwardingScore: fsizedoc,
				externalAdReply: {
                    body: '© AkioBot',
    containsAutoReply: true,
    mediaType: 1,
    mediaUrl: hwaifu.getRandom(), 
    renderLargerThumbnail: true,
    showAdAttribution: true,
    sourceId: '© AkioBot',
    sourceType: 'PDF',
    previewType: 'PDF',
    sourceUrl: sgc,
    thumbnail: await(await fetch(url)).buffer(),
    thumbnailUrl: sgc,
    title: 'Sewa Bot && Up To Premium'
				}
			}
})
}
handler.command = /^(sewa)$/i

export default handler