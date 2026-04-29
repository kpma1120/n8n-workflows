options = {
    url: $('Settings').item.json.webhook_url_sec10k_data,
    method: 'POST',
    body: {"input": query, "company": $('Settings').item.json.company}
}
      
try {
  const response = await this.helpers.httpRequest(options);
  console.log(response)
  return response
  } catch (error) {
    return "error";
}