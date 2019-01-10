const book = {
    title: 'Ego is the Enemy',
    auhtor: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {name: publisherName = 'Self-Published'} = book.publisher;

const items = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [item, ,price] = items;