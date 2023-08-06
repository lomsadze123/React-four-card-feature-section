import { styled } from 'styled-components'

const Header = () => {
    return (
        <HeaderTag>
            <h1>Reliable, efficient delivery</h1>
            <h2>Powered by Technology</h2>
            <h3>Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</h3>
        </HeaderTag>
    )
}

export default Header;

const HeaderTag = styled.header`
    text-align: center;
    h1 , h2 {
        font-size: 2.4rem;
        font-weight: 275;
        letter-spacing: .0167rem;
    }
    h2 {
        font-weight: 600;
    }
    h3 {
        font-size: 1.5rem;
        font-weight: 400;
        line-height: 2.5rem;
        letter-spacing: .01014rem;
        opacity: .5;
        max-width: 54rem;
        margin-top: 1.3rem;
    }

    @media (min-width: 768px) {
        h1 , h2 {
            font-size: 3.6rem;
            letter-spacing: .025rem;
        }
    }
`