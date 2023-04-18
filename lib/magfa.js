import axios from "axios";

import config from "./config.js";
import { magfaErrors, statusErrors } from "./errors.js";

class MagFa {
  constructor(username, password, domain, from) {
    this.username = username;
    this.password = password;
    this.domain = domain;
    this.from = from;

    this.auth = { username: `${username}/${domain}`, password };
  }

  async balance() {
    try {
      const { data } = await axios.get(`${config.baseUrl}/balance`, {
        auth: this.auth,
      });

      return data;
    } catch (error) {
      return error.response.data;
    }
  }

  async send(recipients, messages) {
    const senders = messages.map((message) => this.from);

    const sendData = {
      recipients,
      messages,
      senders,
    };

    try {
      const { data } = await axios.post(`${config.baseUrl}/send`, sendData, {
        auth: this.auth,
      });

      const output = [];

      data.messages.map((message) => {
        if (message.status === 0) {
          const obj = { message: "پیام با موفقیت رسید", ...message };
          output.push(obj);
        } else {
          const obj = {
            message: this.error(message.status),
          };
          output.push(obj);
        }
      });

      return { ...data, messages: output };
    } catch (error) {
      return error.response.data;
    }
  }

  async messages() {
    try {
      const { data } = await axios.get(`${config.baseUrl}/messages`, {
        auth: this.auth,
      });

      return data;
    } catch (error) {
      return error;
    }
  }

  async status(mid) {
    try {
      const { data } = await axios.get(`${config.baseUrl}/statuses/${mid}`, {
        auth: this.auth,
      });

      data.dlrs.map((dlr) => (dlr["message"] = statusErrors[dlr.status]));

      return data;
    } catch (error) {
      return error;
    }
  }

  error(status) {
    return magfaErrors[status];
  }
}

export default MagFa;
