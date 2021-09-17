import { Writable } from 'stream'
export default (options) => {
    const myTransportStream = new Writable({
        write (chunk, enc, cb) {
            console.log(chunk.toString())
            cb()
        }
    })
    return myTransportStream
}
