import { secoundsToHourMinuteSeconds } from './utils';

test("3600 is 01:00:00", () => {
    expect(secoundsToHourMinuteSeconds(3600)).toBe("01:00:00");
});

test("0 is 00:00:00", () => {
    expect(secoundsToHourMinuteSeconds(0)).toBe("00:00:00");
});

test("3601 is 01:00:01", () => {
    expect(secoundsToHourMinuteSeconds(3601)).toBe("01:00:01");
});

test("7000 is 01:56:40", () => {
    expect(secoundsToHourMinuteSeconds(7000)).toBe("01:56:40");
});

test("10581 is 02:56:21", () => {
    expect(secoundsToHourMinuteSeconds(10581)).toBe("02:56:21");
});