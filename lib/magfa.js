const axios  = require('axios');

const config = require("../config");

class MagFa {
    constructor(username, password, domain) {
        this.username = username;
        this.password = password;
        this.domain = domain;

        this.a = username + '/' + domain;

        this.auth = { a:this.a, password };
    }

    balance() {
        return axios.get(`${config.baseUrl}/balance`, { auth: this.auth })
            .then((result) => result)
            .catch((error) => error);
    }

    send(recipients, messages) {
        const senders = [];
        messages.forEach(i => senders.push("300"));

        const sendData = {
            recipients,
            messages,
            senders,
        }

        return axios.post(`${config.baseUrl}/balance`, sendData, { auth: this.auth })
            .then((result) => result)
            .catch((error) => error);
    }

    messages() {
        return axios.get(`${config.baseUrl}/messages`, { auth: this.auth })
            .then((result) => result)
            .catch((error) => error);
    }
}

module.exports = MagFa;