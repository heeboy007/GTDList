
//TODO : must implement better logging
class Log {
    static L(...log: any) {
        console.log(...log);
    }

    static E(...log: any) {
        //console.log(...log);
        console.error(...log);
    }
}