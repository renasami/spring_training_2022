const url = "http://localhost:8080/talk"
    const chatSpace = document.getElementById('chat')

    //msg=str,parentElem=nodem
    //自分のメッセージをdomに反映させる関数
    function renderMyMsg (msg,parentElem) {
        let p = document.createElement('p')
        p.innerText = `私: ${msg}`
        parentElem.appendChild(p)
    }
    //msg=str,parentElem=nodem
    //サーバからのレスポンスをdomに反映させる関数
    function renderResponsedMsg(msg,parentElem) {
        let p = document.createElement('p')
        p.innerText =  `bot: ${msg}`
	    parentElem.appendChild(p)
    }

    //自分のメッセージをサーバーに送信する関数
    //domへのレンダリングも併せて行う。
    async function sendMessage() {
        const inputText = document.getElementById('inputText')
        //何も入力しないとAPIがエラーを吐くのでここで防止。
        if (!inputText.value) {
            alert("文字を入力してから送信してください")
            return
        }
        renderMyMsg(inputText.value,chatSpace)
        //サーバが要求するqueryをjson形式で指定
        const query = {
            query:inputText.value
        }
        //fetchはデフォルトでgetリクエストのためのapiなのでpostやputにするときはメソッドを明示する必要がある。
        const method = "POST"
        //今回これはおまじない
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };
        //bodyのjsonを送信のために文字列形式にする
        const body = JSON.stringify(query)
        //サーバにpostし、responseを受け取る。
        const response = await fetch(url,{method,headers,body})

        //ここでinputの内容を初期化
        inputText.value = ""

        //レスポンスをjsonに変換
        const json = await response.json()

        // https://a3rt.recruit.co.jp/product/talkAPI の形式でレスポンスが返されるので
        //今回必要な情報(reply)を指定して先ほど定義した関数に渡している。
        renderResponsedMsg(json.results[0].reply,chatSpace)        
      x
    }