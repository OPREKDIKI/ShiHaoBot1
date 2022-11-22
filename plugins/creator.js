let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp;ᴋᴇᴛᴜᴀ ᴅᴜɴɪᴀ\nNICKNAME:👑 ɪᴍᴍᴏʀᴛᴀʟ\nORG:ᴋᴇᴛᴜᴀ\nTITLE:soft\nitem1.TEL;waid=${nomorown}:+62 812-6073-0830\nitem1.X-ABLabel:📞 ᴋᴇᴛᴜᴀ ᴅᴜɴɪᴀ\nitem2.URL:https://youtube.com/channel/UCbLk8Zd_85Kttqq6uIDqF5w\nitem2.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET:perfectworldbot@gmail.com\nitem3.X-ABLabel:💌 ᴍᴀɪʟ ᴘᴇʀғᴇᴄᴛ ᴡᴏʀʟᴅ ʙᴏᴛ\nitem4.ADR:;;Tidak Dapat Di Deteksi;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel:📍 ʟᴏᴋᴀsɪ ᴅᴜɴɪᴀ\nBDAY;value=date:🔖 ᴛɪᴅᴀᴋ ᴅᴀᴘᴀᴛ ᴅɪ ᴅᴇᴛᴇᴋsɪ\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fkontak })
let caption = `👋 Hai *${name} @${who.split("@")[0]}*, ɪᴛᴜ ɴᴏᴍᴏʀ ᴋᴇᴛᴜᴀ ᴅᴜɴɪᴀ ᴘᴇʀғᴇᴄᴛ ᴡᴏʀʟᴅ`
await conn.reply(m.chat, caption, m, { quoted: tag_own, mentions: conn.parseMention(caption) })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|pengembang|creator)$/i

export default handler