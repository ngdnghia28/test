const rewire = require("rewire");

const p3Rewire = rewire("./p3");

const calculateParkingFee = p3Rewire.__get__("calculateParkingFee");
let getTotalDays;

describe("getTotalDays()", () => {
  beforeAll(() => {
    getTotalDays = p3Rewire.__get__("getTotalDays");
  });

  it("Should throw error when fromTime the same toTime", () => {
    expect(() =>
      getTotalDays(new Date("05/20/2020"), new Date("05/20/2020"))
    ).toThrow();
  });

  it("Should throw error when fromTime after toTime", () => {
    expect(() =>
      getTotalDays(new Date("05/21/2020"), new Date("05/20/2020"))
    ).toThrow();
  });

  it("Should return 1 when days less than one", () => {
    expect(
      getTotalDays(new Date(2020, 5, 20, 1), new Date(2020, 5, 20, 2))
    ).toBe(1);
  });

  it("Should return 1 when days is 1", () => {
    expect(
      getTotalDays(new Date(2020, 5, 20, 1), new Date(2020, 5, 21, 1))
    ).toBe(1);
  });

  it("Should return 2 when days is greater than 1 and less than 2", () => {
    expect(
      getTotalDays(new Date(2020, 5, 20, 1), new Date(2020, 5, 21, 2))
    ).toBe(2);
  });
});

describe("calculateParkingFee()", () => {
  it("Should return correct price", () => {
    p3Rewire.__set__("getTotalDays", () => 1);

    expect(calculateParkingFee(new Date(2020, 5, 20, 1))).toBe(5);
  });
});
