import WebServer from "./lib/infrastructure/webserver/server"


const start = async () => {
    try {
        const server = new WebServer()
        await server.start()
    } catch (err) {
        console.log(err)  
    }
}

start()