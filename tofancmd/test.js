"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { ezra } = require("../fredi/ezra");
const { conf } = require('../set')
ezra(
    { nomCom: "tofanmd", reaction: "👊", nomFichier: __filename },
    async (dest, zk, commandeOptions) => {
        console.log("Commande saisie !!!s");
        let z =
            "Hello I'm *✧⁠TOFAN-MD✧* \n\n " +
            "I'm a Whatsapp Bot Multi-Device";
        let d = " Made By *Qadeer*";
        let varmess = z + d;
        var img = "https://qu.ax/NfJZk.jpg";
        await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
        //console.log("montest")
    }
);
console.log("mon test");
/*module.exports.commande = () => {
  var nomCom = ["hello","t"]
  var reaction="😊"
  return { nomCom, execute,reaction }
};

async function  execute  (origineMessage,zok) {
  console.log("Commande saisie !!!s")
   let z ='Salut je m\'appelle *ezra* \n\n '+'je suis un bot Whatsapp Multi-appareil '
      let d =' developpé par *Djalega++*'
      let varmess=z+d
      var img='https://telegra.ph/file/626e7105422c8908f723d.jpg'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */


ezra(
      { nomCom: "ownerloc", reaction: "😊"},
  async (dest,zk,commandOptions) => {
    const { ms } = commandOptions;
const sentMsg1  = await zk.sendMessage(dest, { text: 'Oh! Hi There' })
// send a reply messagge
const sentMsg2  = await zk.sendMessage(dest, { text: 'Oh! Hi There' }, { quoted: ms })
// send a mentions message
const sentMsg3  = await zk.sendMessage(dest, { text: '@923079749129', mentions: ['12345678901@s.whatsapp.net'] })
// send a location!
const sentMsg4  = await zk.sendMessage(
    dest, 
    { { location: { degreesLatitude: 31.500000, degreesLongitude: 73.500000 } }
)
// send a contact!
const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:Qadeer Khan\n' // full name
            + 'ORG:Ashoka Uni;\n' // the organization of the contact
            + 'TEL;type=CELL;type=VOICE;waid=923079749129:+923079749129\n' // WhatsApp ID + phone number
            + 'END:VCARD'
const sentMsg5  = await zk.sendMessage(
    dest,
    { 
        contacts: { 
            displayName: 'Jeff', 
            contacts: [{ vcard }] 
        }
    }
)

// send a buttons message!
const buttons = [
  {buttonId: 'id1', buttonText: {displayText: 'Button 1'}, type: 1},
  {buttonId: 'id2', buttonText: {displayText: 'Button 2'}, type: 1},
  {buttonId: 'id3', buttonText: {displayText: 'Button 3'}, type: 1}
]

const buttonMessage = {
    text: "Hi it's button message",
    footer: 'Hi There',
    buttons: buttons,
    headerType: 1
}

const sentMsg6 = await zk.sendMessage(dest, buttonMessage)

//send a template message!
const templateButtons = [
    {index: 1, urlButton: {displayText: '⭐ Star Baileys on GitHub!', url: 'https://github.com/adiwajshing/Baileys'}},
    {index: 2, callButton: {displayText: 'Call me!', phoneNumber: '923079749129'}},
    {index: 3, quickReplyButton: {displayText: 'This is a reply, just like normal buttons!', id: 'id-like-buttons-message'}},
]

const templateMessage = {
    text: "Hi it's a template message",
    footer: 'Hi There',
    templateButtons: templateButtons
}

const sentMsg7 = await zk.sendMessage(dest, templateMessage)

// send a list message!
const sections = [
    {
	title: "Section 1",
	rows: [
	    {title: "Option 1", rowId: "option1"},
	    {title: "Option 2", rowId: "option2", description: "This is a description"}
	]
    },
   {
	title: "Section 2",
	rows: [
	    {title: "Option 3", rowId: "option3"},
	    {title: "Option 4", rowId: "option4", description: "This is a description Tofan Md"}
	]
    },
]

const listMessage = {
  text: "This is a list",
  footer: "nice footer, link: https://google.com",
  title: "Amazing boldfaced list title",
  buttonText: "Required, text on the button to view the list",
  sections
}

const sentMsg8 = await zk.sendMessage(dest, listMessage)
  }
);
