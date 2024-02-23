const connection = require('../config/connection');
const { User, Thought } = require('../models');

connection.on('error', (err) => console.error(err));

connection.once('open', async() => {
    console.log('connected!');
    await User.deleteMany({});
    await Thought.deleteMany({});

    const reactionsJohn = [
        {
            reactionBody: "Test Reaction Body",
            username: "John Doe",
        },
        {
            reactionBody: "Test Reaction Body B",
            username: "John Doe",
        },
        {
            reactionBody: "Test Reaction Body C",
            username: "John Doe",
        },
    ];

    const reactionsJane = [
        {
            reactionBody: "Test Reaction Body D",
            username: "Jane Deer",
        },
    ];

    const reactionsConsuela = [
        {
            reactionBody: "Test Reaction Body E",
            username: "Drew Teacherman",
        },
        {
            reactionBody: "Test Reaction Body F",
            username: "Consuela Ramirez",
        },
        {
            reactionBody: "Test Reaction Body G",
            username: "Consuela Ramirez",
        },
    ];

    const reactionsBear = [
        {
            reactionBody: "This is Foo Bar'd",
            username: "Bear McHiggins",
        },
        {
            reactionBody: "This is Foo Bar'd Again",
            username: "Bear McHiggins",
        },
        {
            reactionBody: "This is Foo Bar'd Again",
            username: "Bear McHiggins",
        },
        {
            reactionBody: "This is Foo Bar'd Again",
            username: "Bear McHiggins",
        },
    ];

    const thoughts = [
        {
            username: "John Doe",
            thoughtText: "Test Thought 1",
            reactions: reactionsJohn,
        },
        {
            username: "John Doe",
            thoughtText: "Test Thought 1A",
            reactions: reactionsJohn,
        },
        {
            username: "Jane Deer",
            thoughtText: "Test Thought A",
            reactions: reactionsJane,
        },
        {
            username: "Jane Deer",
            thoughtText: "Test Thought A1",
            reactions: reactionsJane,
        },
        {
            username: "Drew Teacherman",
            thoughtText: "Test Thought 2",
        },
        {
            username: "Drew Teacherman",
            thoughtText: "Test Thought 2A",
        },
        {
            username: "Consuela Ramirez",
            thoughtText: "Test Thought B",
            reactions: reactionsConsuela,
        },
        {
            username: "Consuela Ramirez",
            thoughtText: "Test Thought B2",
            reactions: reactionsConsuela,
        },
        {
            username: "Bear McHiggins",
            thoughtText: "Test Thought 3",
            reactions: reactionsBear,
        },
        {
            username: "Bear McHiggins",
            thoughtText: "Test Thought 3C",
            reactions: reactionsBear,
        },
        {
            username: "Foo Bar",
            thoughtText: "Test Thought C",
        },
        {
            username: "Foo Bar",
            thoughtText: "Test Thought C3",
        },        
    ];

    const users = [
        {
            username: "John Doe",
            email: "johndoe@email.com",
            thoughts: thoughts,
        },
        {
            username: "Jane Deer",
            email: "jane@hello.com",
        },
        {
            username: "Drew Teacherman",
            email: "drew@teacher.com",
        },
        {
            username: "Consuela Ramirez",
            email: "consuela@ramirez.com",
        },
        {
            username: "Foo Bar",
            email: "foo@bar.com",
        },
        {
            username: "Bear McHiggins",
            email: "bear@email.com",
        },
    ];

    await Thought.collection.insertMany(thoughts);
    await User.collection.insertMany(users);

    console.table(users);
    console.info('Seeding complete! 🌱');
    process.exit(0);
})