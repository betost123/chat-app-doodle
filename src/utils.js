import axios from 'axios';

export async function getMessages(){
    return axios.get(`https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/?token=uJ4CKmXGrBRN`)
        .then(response => response.data);
}

const headers = {
    'Content-Type': 'application/json',
    'token': 'uJ4CKmXGrBRN'
};

export async function sendMessage(data) {
    return axios.post(`https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0`, data, {headers: headers})
        .then(response => response.data);
}
