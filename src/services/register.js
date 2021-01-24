import Socket from "./Socket";
import { idmUrl, idmEPs } from "../Config.json";

async function register(email, password) {
    const payLoad = {
        email: email,
        password: password.split("")
    };

    const options = {
        baseURL: idmUrl, // Base URL
        url: idmEPs.registerEP, // Path of URL
        data: payLoad // Data to send in Body
    }

    return await Socket.POST(options);
}

export default {
    register
};