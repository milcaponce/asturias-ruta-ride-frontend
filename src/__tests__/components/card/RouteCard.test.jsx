import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import RouteCard from "../../../components/card/RouteCard";

describe("RouteCard component", () => {
    it("renders without crashing", () => {
        render(<RouteCard />);
        expect(screen.getByRole("article")).toBeDefined;
    });

    it("displays the provided title, image, and description", () => {
        render(
            <RouteCard
            title="Camino de Santiago"
            image="https://example.com/image.jpg"
            description="Una ruta emblemática de peregrinación."
            />
        );

        expect(screen.getByText("Camino de Santiago")).toBeInTheDocument();
        expect(screen.getByText("Una ruta emblemática de peregrinación.")).toBeInTheDocument();
        expect(screen.getByRole("img")).toHaveAttribute("src", "https://example.com/image.jpg");
    });

    it("uses placeholder values when props are missing", () => {
        render(<RouteCard />);
        expect(screen.getByText("Sample Route")).toBeInTheDocument();
        expect(screen.getByRole("img")).toHaveAttribute(
        "src",
        "https://via.placeholder.com/400x250"
        );
    });

    it("has a visible and accessible button", () => {
        render(<RouteCard title="Ruta" />);
        const button = screen.getByRole("button", { name: /ver detalles/i });
        expect(button).toBeInTheDocument();
    });
});