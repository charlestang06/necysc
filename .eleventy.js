module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "static": "static" });
  return {
    htmlTemplateEngine: "liquid",
    markdownTemplateEngine: "liquid",
    dataTemplateEngine: "liquid",
    pathPrefix: process.env.ELEVENTY_PATH_PREFIX || "/", // defaults to root
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "./build"
    }
  };
};

