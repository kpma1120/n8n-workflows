let article = "";

// Introduction
article += $("Senior Research Analyst").first().json.output[0].content[0].text
  .introduction;
article += "\n\n";

for (const item of $input.all()) {
  article += "**" + item.json.title + "**";
  article += "\n";
  article += item.json.output[0].content[0].text;
  article += "\n\n";
}

// Conclusions
article += "**Conclusions**";
article += "\n\n";
article += $("Senior Research Analyst").first().json.output[0].content[0].text
  .conclusions;

return [
  {
    json: {
      article: article,
    },
  },
];
