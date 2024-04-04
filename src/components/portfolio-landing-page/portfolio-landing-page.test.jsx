import { PortfolioLandingPage } from "./portfolio-landing-page";
import { render } from "@testing-library/preact";

describe(PortfolioLandingPage.name, () => {
  it("Should render PortfolioLandingPage", () => {
    const wrapper = render(<PortfolioLandingPage />);

    expect(wrapper.container).toMatchSnapshot();
  });
});
