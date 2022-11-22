let handler = async(m, { conn, text, usedPrefix, command }) => {
let krtu = `☯︎•══════════════☯︎
│       *「 Kartu Intro 」*
│ *Nama     :* 
│ *Gender   :* 
│ *Umur      :* 
│ *Hobby    :* 
│ *Kelas      :* 
│ *Asal         :* 
│ *Agama    :* 
 |  *Status     :* 
│ *Donghua Fav    :* 
╰═════☯︎`
conn.reply(m.chat, krtu, fkontak)
}
handler.command = /^(intro)$/i

export default handler