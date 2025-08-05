import { render } from "@testing-library/react";
import "@testing-library/jest-dom"
import { Tabs } from "../Tabs";

describe("Tabs", () => {
    it("renders", () => {
        render(<Tabs />);
    });
});