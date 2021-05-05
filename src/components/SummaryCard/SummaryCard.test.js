import React from 'react'
import { render } from '@testing-library/react'
import SummaryCard from './SummaryCard.js'
import developerdesign from "../../images/developerdesign.svg";

// shallow test 
describe('SummaryCard', () => {
  it('should match snapshot', () => {
    const title = 'test-title'
    const detail = 'test-detail'
    const imagePath = developerdesign 
    const { asFragment } = render(
      <SummaryCard
        title={title}
        detail={detail}
        imagePath={imagePath}
      />
    ); // like a DOM
    expect(asFragment()).toMatchSnapshot();
  });
  it('should render summary card based on props', () => {
    const title = 'test-title'
    const detail = 'test-detail'
    const imagePath = developerdesign 
    const wrapper = render(
      <SummaryCard
        title={title}
        detail={detail}
        imagePath={imagePath}
      />
    ); // like a DOM
    const summaryCardTitle = wrapper.queryByText('test-title');
    expect(summaryCardTitle).toBeInTheDocument();
    expect(summaryCardTitle.tagName).toBe('H3');
    const summaryCardImage = wrapper.queryByAltText('summary-card-img');
    expect(summaryCardImage).toBeInTheDocument();
    // expect(summaryCardImage)
  })
})