import { decode, encode } from "../../../containers/mainPage/MainPageUtils";

describe("MainPageUtils test", () => {
  it("Test encode and decode functions", async () => {
    const testMessage = "testmessage";
    const encodeResult = encode(testMessage);
    console.log("xd:", encodeResult);
    expect(!!encodeResult).toBe(true);
    const decoderesult = decode(encodeResult);
    expect(decoderesult).toBe(testMessage);
  });
});
