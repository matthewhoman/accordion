import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Accordion } from "@/components/Accordion/Accordion";
import { AccordionItem } from "@/components/Accordion/AccordionItem/AccordionItem";

const accordionData = [
  { id: 1, title: "Question 1", content: "Answer 1" },
  { id: 2, title: "Question 2", content: "Answer 2" },
];

describe("Accordion", () => {
  it("renders all accordion headers", () => {
    render(
      <Accordion>
        {accordionData.map(({ id, title, content }) => (
          <AccordionItem headingLevel="h1" key={id} title={title}>
            {content}
          </AccordionItem>
        ))}
      </Accordion>
    );

    accordionData.forEach(({ title }) => {
      expect(screen.getByRole("button", { name: title })).toBeInTheDocument();
    });
  });

  it("toggles content when header is clicked", async () => {
    const user = userEvent.setup();

    render(
      <Accordion>
        <AccordionItem headingLevel="h1" title="Question 1">
          Answer 1
        </AccordionItem>
      </Accordion>
    );

    const button = screen.getByRole("button", { name: "Question 1" });

    // Initially, content should not be visible
    expect(screen.queryByText("Answer 1")).not.toBeVisible();

    // Click to open
    await user.click(button);
    expect(screen.getByText("Answer 1")).toBeVisible();
    expect(button).toHaveAttribute("aria-expanded", "true");

    // Click to close
    await user.click(button);
    expect(screen.getByText("Answer 1")).not.toBeVisible();
    expect(button).toHaveAttribute("aria-expanded", "false");
  });

  it("allows toggling via keyboard (Enter/Space)", async () => {
    const user = userEvent.setup();

    render(
      <Accordion>
        <AccordionItem headingLevel="h1" title="Question 1">
          Answer 1
        </AccordionItem>
      </Accordion>
    );

    const button = screen.getByRole("button", { name: "Question 1" });

    // Focus the button explicitly
    button.focus();

    // Press Enter to open
    await user.keyboard("{Enter}");
    expect(button).toHaveAttribute("aria-expanded", "true");

    // Press Space to close
    await user.keyboard("{ }"); // note the space character
    expect(button).toHaveAttribute("aria-expanded", "false");
  });
});
