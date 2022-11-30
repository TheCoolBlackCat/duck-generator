# Duck Generator

Generate DuckDuckGo Private Emails

## Security Note

Note that anything you type in the input box is stored as a `token` cookie which will remain stored in your browser until deleted.
This is for convenience, so you don't have to re-enter your token.

If you want to clear this, simply type anything in the box and the cookie will overwrite itself (or manually delete/clear cookies).

## To get your API token

1. Go to https://duckduckgo.com/email/
2. Right-click on the background, Click "Inspect" in the context menu
3. Click on the "Network" tab
4. Click the "Generate Private Duck Address" button on the webpage
5. You should see a "POST" request in the network tab, select it
6. Under "Headers", find the "Authorization" header with value "Bearer <long_string_of_characters>"
7. Copy your API Key (everything after "Bearer ") - it should be 62 characters long 

## TODO
- [x] Add cookie caching of token
- [ ] Add opt-in "remember me" to cache/not cache token
- [ ] Add support for [Firefox Relay](https://relay.firefox.com)

Feel free to contribute ;)
