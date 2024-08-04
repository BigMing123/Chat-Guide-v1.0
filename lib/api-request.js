// 远端部署路径
let url = "https://lmh1993.pythonanywhere.com/"
// 本地调试路径
// let url = "http://127.0.0.1:8050/"

async function chatguideApiGetGuidence(q_partner, given_answer) {
    let request_url = url + "cg-1/chat"
    console.log(request_url)
    return new Promise(resolve => {
        let chatData = {
            "q_partner": q_partner,
            "given_answer": given_answer
        }
        let config = {
            method: 'post',
            url: request_url,
            headers: {
              'Content-Type': 'application/json'
            },
            data: JSON.stringify(chatData)
        };
        axios(config)
        .then(function (response) {
            return resolve(response.data)
        })
        .catch(function (error) {
            console.log(error)
        });
    })
}