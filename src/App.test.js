import { render, screen } from '@testing-library/react';
import { LeftSide, TextComponent } from './Components';
import { RatingDots } from './Components/RatingDots';
import { RatingLevel } from './Components/RatingLevel';

describe.only('Test TextComponent',() =>{
  test('TextComponent component', () =>{
    const { container } = render(<TextComponent />);
    const h3 = container.querySelector('h3')
    expect(h3).toBeInTheDocument();
    
  });
  
  test('TextComponent component dont have p',() =>{
    const { container } = render(<TextComponent />)
    const p = container.querySelector('p')
    expect(p).not.toBeInTheDocument();
  });
  
  
  test('Check details props', () =>{
   const { container } = render(<TextComponent details='<i>Some details</i>' />)
   const p = container.querySelector('p')
   expect(p).toBeInTheDocument();
   expect(p).toContainHTML('<i>Some details</i>');
  });
  
  test('Check to contain children', () =>{
    const { container } = render(<TextComponent><p>To be there</p></TextComponent>)
    const div = container.querySelector('div')
    expect(div).toContainHTML('<p>To be there</p>');
  });
})


describe.only('Test RatingLevel', () =>{
  test('name prop', () =>{
    const { container } = render(<RatingLevel name='UFO' />)
    const span = container.querySelector('span')
    expect(span).toHaveTextContent('UFO')
  });
})

