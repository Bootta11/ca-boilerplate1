import rfs from "rotating-file-stream"

export default async (options) => {
    const stream = rfs.createStream(() => {
        const time = new Date();
        const month = time.getFullYear() + "-" + (time.getMonth() + 1 + '').padStart(2, '0');
        const day = (time.getDate() + '').padStart(2, '0');
        const prefix = options.prefix ? `-${options.prefix}-` : '';
        const filename = options.filename ? `${options.filename}-` : '';

        return `${options.destination}/${filename}${prefix}${month}-${day}.log`;
    }, {
        size: "10M", // rotate every 10 MegaBytes written
        interval: "1d", // rotate daily
    });

    return stream
}
