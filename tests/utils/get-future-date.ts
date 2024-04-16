import { setYear, parseISO } from "date-fns";

/**
 *
 * @param date 2028-02-05
 * @returns  2029-02-05
 */
export function getfutureDate(date: string): Date {

    return setYear(parseISO(date), new Date().getFullYear()+1);
}
