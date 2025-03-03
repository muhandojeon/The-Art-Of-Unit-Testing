import type { TimeProviderInterface, WeekDay } from "./time-provider-interface";
import moment from "moment";

export class RealTimeProvider implements TimeProviderInterface {
    getDay(): WeekDay {
        return moment().day() as WeekDay;
    }
}