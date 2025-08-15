module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "static": "static" });

  // Add times collection
  eleventyConfig.addCollection("times", function (collectionApi) {
    // Get all JSON files from _data/times
    const timesData = {};
    const fs = require('fs');
    const path = require('path');
    const timesDir = path.join(__dirname, 'src/_data/times');

    if (fs.existsSync(timesDir)) {
      fs.readdirSync(timesDir).forEach(file => {
        if (file.endsWith('.json')) {
          const yearData = require(path.join(timesDir, file));
          timesData[yearData.year] = yearData;
        }
      });
    }

    // Convert to array and sort by year (newest first)
    return Object.values(timesData).sort((a, b) => Number(b.year) - Number(a.year));
  });

  return {
    htmlTemplateEngine: "liquid",
    markdownTemplateEngine: "liquid",
    dataTemplateEngine: "liquid",
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "./build"
    }
  };
};

