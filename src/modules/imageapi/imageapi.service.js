import axios from 'axios';

import {config} from "../../config/api";

export default class ImageAPIService {
  static async generateImageFromPrompt(payload = {}) {
    try {
      const response = await axios.post(`${config.baseAPIURL}/images`, payload);
      return response.data.data;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  }

  static async getAllImages() {
    try {
      const response = await axios.get(`${config.baseAPIURL}/images`);
      return response.data.data;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  }

  static async getImageById(imageId) {
    try {
      const response = await axios.get(`${config.baseAPIURL}/images/${imageId}`);
      return response.data.data;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  }
}
