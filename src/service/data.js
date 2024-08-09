// JavaScript Map to organize API Url's
const apiUrl = {
  articles: "https://api.spaceflightnewsapi.net/v4/articles/",
  blogs: "https://api.spaceflightnewsapi.net/v4/blogs/",
  reports: "https://api.spaceflightnewsapi.net/v4/reports/",
};

const apiService = {
  getArticles: async function (page = 1, limit = 10) {
    try {
      const offset = (page - 1) * limit;
      const response = await fetch(`${apiUrl.articles}?limit=${limit}&offset=${offset}`);
      const data = await response.json();
      console.log("Articles:", data);
      console.log(data.results);
      return data;
    } catch (error) {
      console.log("Error fetching articles: ", error);
      throw error;
    }
  },
  getBlogs: async function () {
    try {
      const response = await fetch(apiUrl.blogs);
      const data = await response.json();
      console.log("Blogs:", data);
      return data;
    } catch (error) {
      console.log("Error fetching blogs:", error);
      throw error;
    }
  },
  getReports: async function () {
    try {
      const response = await fetch(apiUrl.reports);
      const data = await response.json();
      console.log("Reports", data);
      return data;
    } catch (error) {
      console.log("Error fetching reports:", error);
      throw error;
    }
  },
};

export default apiService;
