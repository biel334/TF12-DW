import fs from "fs";
import path from "path";

class LogMiddleware {

    handle(req, res, next) {

        const log = `[${new Date().toISOString()}] ${req.method} :: ${req.originalUrl}`;

        console.log(log);

        const logPath = path.resolve("storage/logs/log.txt");

        fs.appendFileSync(logPath, log + "\n");

        next();
    }
}

export default new LogMiddleware();