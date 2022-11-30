# Duck Generator

Generate DuckDuckGo Private Emails

## To get your API token

1. Go to https://duckduckgo.com/email/
2. Right-click on the background, Click "Inspect" in the context menu
3. Click on the "Network" tab
4. Click the "Generate Private Duck Address" button on the webpage
5. You should see a "POST" request in the network tab, select it
6. Under "Headers", find the "Authorization" header with value "Bearer <long_string_of_characters>"
7. Copy your API Key (everything after "Bearer ") - it should be 62 characters long 
