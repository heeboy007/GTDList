
//TODO : must implement better logging

type Loggable = object | string | number | boolean | unknown ;
class Log {
    static L(...log: Loggable[]) {
        console.log(...log);
    }

    static E(...log: Loggable[]) {
        //console.log(...log);
        console.error(...log);
    }
}

export default Log;