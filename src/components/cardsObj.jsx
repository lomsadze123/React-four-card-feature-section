import calculator from '../assets/icon-calculator.svg'
import karma from '../assets/icon-karma.svg'
import supervisor from '../assets/icon-supervisor.svg'
import team from '../assets/icon-team-builder.svg'

const cardsObj = [
    {
        id: 1,
        heading: 'Supervisor',
        review: 'Monitors activity to identify project roadblocks',
        image: supervisor,
        border: '.36rem solid #44D3D2'
    },
    {
        id: 2,
        heading: 'Team Builder',
        review: 'Scans our talent network to create the optimal team for your project',
        image: team,
        border: '.36rem solid #EA5454'
    },
    {
        id: 3,
        heading: 'Karma',
        review: 'Regularly evaluates our talent to ensure quality',
        image: karma,
        border: '.36rem solid #FCAE4A'
    },
    {
        id: 4,
        heading: 'Calculator',
        review: 'Uses data from past projects to provide better delivery estimates',
        image: calculator,
        border: '.36rem solid #549EF2'
    },
]

export default cardsObj;