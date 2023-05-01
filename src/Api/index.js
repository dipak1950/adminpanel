import axios from "axios";
import { baseURL } from "./BaseURL";

export default axios.create({
    baseURL: baseURL
})