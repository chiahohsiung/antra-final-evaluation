import React from 'react'
import { render } from '@testing-library/react'
import Project from './Project'

// shallow test 
describe('Project', () => {
  it('should match snapshot', () => {
    const title = 'test-title'
    const detail = 'test-detail'
    const titleClass = 'luvtalk-project'
    const { asFragment } = render(
      <Project
        title={title}
        detail={detail}
        titleClass={titleClass}
      />
    ); // like a DOM
    expect(asFragment()).toMatchSnapshot();
  });
  it('should render project based on props', () => {
    const title = 'test-title'
    const detail = 'test-detail'
    const titleClass = 'luvtalk-project'
    const wrapper = render(
      <Project
        title={title}
        detail={detail}
        titleClass={titleClass}
      />
    ); // like a DOM

    const projectCardTitle = wrapper.queryByText('test-title');
    expect(projectCardTitle).toBeInTheDocument();
    expect(projectCardTitle.tagName).toBe('H3');
    const projectCardDiv = wrapper.queryByText('test-title').closest('div');
    expect(projectCardDiv).toBeInTheDocument();
    expect(projectCardDiv).toHaveClass('luvtalk-project')
    // expect(summaryCardImage)
  })
})