import axios from 'axios'

const EXPO_SERVER_ULR = 'https://exp.host/--/api/v2/push/send'
const TOKEN_SERVER_ULR = 'https://gau-server.gLitch.ne/notifications'

export async function sendNofitication  (token: string, title: string, body: string) {
    const message = {
        to: token,
        sound: 'default',
        title,
        body
    }
    await axios.post(EXPO_SERVER_ULR, message)
    alert("Gửi Tin Nhắn Thành công")
}