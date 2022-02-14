//関数内からwsを参照出来る様にするために一旦nullで定義(変数のスコープについて調べてみても良いかも)
let ws = null;
//参照するdomを定数に格納
const inputNickname = document.getElementById("name")
const nameSettingButton = document.getElementById("setName")
const sendButton = document.getElementById("send")
const msgText = document.getElementById("message")
const nameArea = document.getElementById("nameArea")

//名前を設定(チャット用の名前)
const nameSetting = () => {
    const nickname = inputNickname.value
    //名前は一度しか使用しないのでdomを削除するためのリストを作成
    const removableDoms = [inputNickname,nameSettingButton]
    //disabledを削除したいdomのリストを作成
    const abeledDoms = [sendButton,msgText]
    nameArea.innerText = nickname
    removeDom(removableDoms)
    abledChatSpace(abeledDoms)
}   
//使わないdomを削除するための関数
const removeDom = (doms) => {
    doms.forEach((dom) => dom.remove())
}
//domのdisable属性を削除するための関数
const abledChatSpace = (doms) => {
    doms.forEach((dom) => dom.disabled = false)
}
//messageを要求されてるjson形式の文字列にして返す関数
const getMessage = () => {
    const text = document.getElementById("message")
    const msg = {
        message: text.value
    }
    return JSON.stringify(msg)
}
//wsのエンドポイントに上の関数をの戻り値を送信する
const sendMessage = () => {
    const msg = getMessage()
    ws.send(msg)
}
//wsに接続してmessageをlistenする関数
const connectWsServer = () => {
    ws = new WebSocket(`ws://localhost:8080/chat?nickname=${nameArea.innerText}`)
    ws.onopen = function() {
        ws.onmessage = function( msg ) {
            logUpdate( msg.data ) ;
        }
	}
    
}
//チャットログとしてdomに反映するための関数
const logUpdate = ( data ) => {
    //stringで帰ってくるのでjson形式にする。
    data = JSON.parse(data)
    const p = document.createElement('p');
    p.innerText = `${data.nickname} : ${data.message}`
    chatSpace.appendChild(p)
	
}



//sendButtonとnameSettingButtonに関数を設定
sendButton.addEventListener( 'click', sendMessage)
nameSettingButton.addEventListener("click", nameSetting)
nameSettingButton.addEventListener("click",connectWsServer)


