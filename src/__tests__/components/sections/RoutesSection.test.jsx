import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import RoutesSection from "../../../components/sections/RoutesSection";

describe("RoutesSection", () => {
    it("renders the title when provided and shows three route cards (mock data)", () => {
        render(<RoutesSection title="Test Routes" />);
        expect(screen.getByRole("heading", { name: /test routes/i})).toBeInTheDocument();

        const cards = screen.getAllByRole("article");
        expect(cards.length).toBe(3);
    });
});