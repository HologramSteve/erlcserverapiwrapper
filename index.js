class Client {
    constructor(serverkey) {
        this.serverkey = serverkey
        this.baseurl = "https://api.policeroleplay.community/v1/server/"
    }

    async request(endpoint) {
        let data = await fetch(this.baseurl + endpoint, {
            method: 'GET',
            headers: {"Server-Key": this.serverkey},
        })

        data = await data.json()
        
        return data}
    
    async getServer() {
        return await this.request("")
    }

    async getPlayers() {
        return await this.request("players")
    }

    async getJoinLogs() {
        return await this.request("joinlogs")
    }

    async getQueue() {
        return await this.request("queue")
    }

    async getKillLogs() {
        return await this.request("killlogs")
    }

    async getCommandLogs() {
        return await this.request("commandlogs")
    }

    async getModCalls() {
        return await this.request("modcalls")
    }

    async getBans() {
        return await this.request("bans")
    }

    async getVehicles() {
        return await this.request("vehicles")
    }

    async runCommand(command) {
        const response = await fetch('https://api.policeroleplay.community/v1/server/command', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Server-Key": this.serverkey
            },
            body: JSON.stringify({command: command}),
        });

        return await response.json()
    }

}

module.exports({Client})