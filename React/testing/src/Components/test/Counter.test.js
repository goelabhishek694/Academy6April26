import {render, screen, fireEvent} from '@testing-library/react';
import Counter from '../Counter';
describe("counter comp test cases", () => {
    beforeEach(() => {
        console.log("before each");
    })

    afterEach(() => {
        console.log("after each");
    })

    test("initial state check", () => {
        render(<Counter/>);
        //selection
        const countText = screen.getByText(/count is 0/i);
        const plusText = screen.getByText("+");
        const minusText = screen.getByText(/-/i);
    
        //assertion/verifying
        expect(countText).toBeInTheDocument();
        expect(plusText).toBeInTheDocument();
        expect(minusText).toBeInTheDocument();
    
    })
    
    test("increment by 1", () => {
        render(<Counter/>);
        const plusText = screen.getByText("+");
        fireEvent.click(plusText);
    
        const isOnePresent = screen.getByText(/count is 1/i);
        expect(isOnePresent).toBeInTheDocument();
    
    })
    
    test("decrement by 1",() => {
        render(<Counter/>);
        const minusText = screen.getByText("-");
        fireEvent.click(minusText);
        const isNegOnePresent = screen.getByText(/count is -1/i);
        expect(isNegOnePresent).toBeInTheDocument();
    
    })
    
    test("increment by 2", () => {
        render(<Counter/>);
        const plusText = screen.getByText("+");
        fireEvent.click(plusText);
        fireEvent.click(plusText);
        const isTwoPresent = screen.getByText(/count is 2/i);
        expect(isTwoPresent).toBeInTheDocument();
    })
});

test("snapshot for counter", () => {
    const {asFragment} = render(<Counter/>);
    expect(asFragment()).toMatchSnapshot();
})
