import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import RoutesPage from "../../pages/RoutesPage";

describe("RoutesPage", () => {
it ("renders page heading (h1) and includes the RoutesSection", () => {
    render(<RoutesPage />);

    const mainHeading = screen.getByRole("heading", { level: 1, name: /rutas/i });
    expect(mainHeading).toBeInTheDocument();

    const cards = screen.getAllByRole("article");
    expect(cards.length).toBeGreaterThanOrEqual(1);
    });
});