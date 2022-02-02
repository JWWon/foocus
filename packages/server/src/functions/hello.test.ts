import { handler } from "./hello";

describe("[myFunction]", () => {
  it("should not crash", async () => {
    await handler({} as any);
  });
});
