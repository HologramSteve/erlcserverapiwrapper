# PRC api wrapper
This very simple api wrapper for ER:LC private servers lets you access a server's information with ease.
___

## Installation
```bash
npm install erlcserverapiwrapper
```
[NPM Package link](https://npmjs.com/package/erlcserverapiwrapper)

Import it in your code like this:
```javascript
const erlcapi = require("erlcserverapiwrapper")
```

Then, create a Client instance like this
```javascript
const client = new erlcapi.Client("your-server-key")
```

You can now use the api!
___

## Usage
You may call the following functions within the Client class:
| **Name**          | **Goal**                                                         |
|--------------------|------------------------------------------------------------------|
| `getServer()`      | Fetch general server information.                               |
| `getPlayers()`     | Retrieve the list of current players on the server.             |
| `getJoinLogs()`    | Access the server's logs of player join events.                 |
| `getQueue()`       | Get details about the server's queue, including queued players. |
| `getKillLogs()`    | Retrieve logs of player kills.                                  |
| `getCommandLogs()` | Fetch logs of commands executed on the server.                  |
| `getModCalls()`    | Access the list of moderator calls made by players.             |
| `getBans()`        | Retrieve the list of banned players.                            |
| `getVehicles()`    | Get information about all vehicles on the server.               |
| `runCommand(command)` | Execute a specific command on the server.                   |

No parameters are needed unless using runCommand. All data is returned in JSON format. If you want to see an example output, look [here](https://apidocs.policeroleplay.community/for-developers/api-reference)
___

## Notes
This project is licensed under the "IDGAF" license. Anything from this project is free to use in any way. If you do use it, I'd find it cool if you'd lmk on discord (username is `hologramsteve`)
This is just a small wrapper for personal use, but people may want to use it :)

Thanks!
