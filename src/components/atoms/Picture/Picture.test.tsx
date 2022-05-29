import React from "react";
import { render } from "@testing-library/react";
import Picture from "./Picture";

describe("Picture", () => {
  test("renders the Picture component", () => {
    render(<Picture alt="Test Picture" width={200} src="https://picsum.photos/id/1033/400/400" />);
  });
});
