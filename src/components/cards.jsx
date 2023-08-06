import { styled } from 'styled-components'
import cardsObj from './cardsObj';


const Cards = () => {
    return (
        <Main>
            <Card border={cardsObj[0].border} heading={cardsObj[0].heading} review={cardsObj[0].review} image={cardsObj[0].image} />
            <article>
                <Card border={cardsObj[1].border} heading={cardsObj[1].heading} review={cardsObj[1].review} image={cardsObj[1].image} />
                <Card border={cardsObj[2].border} heading={cardsObj[2].heading} review={cardsObj[2].review} image={cardsObj[2].image} />
            </article>
            <Card border={cardsObj[3].border} heading={cardsObj[3].heading} review={cardsObj[3].review} image={cardsObj[3].image} />
        </Main>
    )
}

const Card = ({border,heading,review,image}) => {
    return (
        <BorderDiv about={border}>
            <h4>{heading}</h4>
            <p>{review}</p>
            <img src={image} alt={heading} />
        </BorderDiv>
    )
}

export default Cards;

const Main = styled.main`
    div {
        padding: 2.8rem;
        margin-bottom: 2.3rem;
        border-radius: .8rem;
        box-shadow: 0px 15px 30px -11px rgba(131, 166, 210, 0.50);
    }
    h4 {
        font-size: 2rem;
        font-weight: 600;
    }
    p {
        font-size: 1.3rem;
        font-weight: 400;
        line-height: 2.3rem;
        letter-spacing: .009rem;
        opacity: .5;
        margin: .1rem 0 3.3rem 0;
    }
    img {
        display: block;
        max-width: 5.7rem;
        width: 100%;
        height: auto;
        margin-left: auto;
    }

    @media (min-width: 768px) {
        display: flex;
        align-items: center;
        article div:first-child {
            margin-bottom: 3rem;
        }
        gap: 3rem;
        div {
            margin: 0;
            max-width: 35rem;
        }
        img {
            width: 6.4rem;
        }
  }
`
const BorderDiv = styled.div`
    border-top: ${props => props.about};
`