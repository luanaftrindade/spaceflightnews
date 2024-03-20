const API_URL = "https://api.spaceflightnewsapi.net/v4/articles/";

const apiService = {
  getArticles: async function () {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log("Error fetching data: ", error);
      throw error;
    }
  },
};

export default apiService;
