import { durationInSeconds } from "./durationInSeconds";

describe("durationInSeconds", () => {
test("should convert duration in mm:ss format to seconds", () => {
    expect(durationInSeconds("2:54")).toBe(174)
    expect(durationInSeconds("3:02")).toBe(182)
});
test("should return 0 for invalid durations", () => {
    expect(durationInSeconds("invalid")).toBe(0);
    expect(durationInSeconds("2:100")).toBe(0);
});
})