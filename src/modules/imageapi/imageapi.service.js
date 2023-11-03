import axios from 'axios';

import {config} from "../../config/api";

export default class ImageAPIService {
  static async generateImageFromPrompt(payload = {}) {
    const response = await axios.post(`${config.baseAPIURL}/images`, payload);

    return response.data;
  }

  static async getAllImages() {
    const response = await axios.get(`${config.baseAPIURL}/images`);

    return response.data;
  }

  static async getImageById(imageId) {
    const response = await axios.get(`${config.baseAPIURL}/images/${imageId}`);

    return response.data;
  }
}
