import moment from 'moment';

const expenses = [
    {
        id: '1',
        description: 'Ha fun ha!',
        amount: 4332,
        createdAt: 0,
        note: 'Some random lorem ipsum'
    },
    {
        id: '2',
        description: 'Rent',
        amount: 343656,
        createdAt: moment(0).subtract(4, 'days').valueOf(),
        note: 'arges rger'
    },
    {
        id: '3',
        description: 'Credit Card',
        amount: 232,
        createdAt: moment(0).add(4, 'days').valueOf(),
        note: 'EF ef 4wg m'
    }
];

export default expenses;
