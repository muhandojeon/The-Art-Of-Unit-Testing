class Logger {
    info(text: string) {
        console.log(`INFO: ${text}`);
    }
    debug(text: string) {
        console.log(`DEBUG: ${text}`);
    }
}

export const log = new Logger();
