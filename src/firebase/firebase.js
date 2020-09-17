import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(config);

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref('expenses')
//     .on('child_changed', (snapshot) => {
//         console.info('Child changed:', snapshot.key, snapshot.val());
//     });

// database.ref('expenses')
//     .on('child_removed', (snapshot) => {
//         console.info('Child removed:', snapshot.key, snapshot.val());
//     });

// database.ref('expenses')
//     .on('child_added', (snapshot) => {
//         console.info('Child added:', snapshot.key, snapshot.val());
//     });

// const subscription = database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];

//         snapshot.forEach((child) => {
//             expenses.push({
//                 id: child.key,
//                 ...child.val()
//             });
//         });
//         console.info(expenses);
//     });

// database.ref('expenses').push({
//     description: 'Expense 1',
//     note: 'This is expense 1',
//     amount: 123443,
//     createdAt: '08/21/2020'
// });

// database.ref('notes').push({
//     title: 'Note 1',
//     body: 'This is note 1'
// });

// const subscription = database.ref()
//     .on('value', (snapshot) => {
//         const data = snapshot.val();
//         console.info('data', data);
//         console.info(`${data.name} is a ${data.job.title} at ${data.job.company}.`);
//     });

// database.ref().set({
//     name: 'Andrew Mead',
//     age: 26,
//     stressLevel: 6,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Philly',
//         country: 'United States'
//     }
// }).then(() => {
//     console.info('Data was saved!');
// }).catch((e) => {
//     console.info('Failed to save data:', e);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// })
// .then(() => {
//     console.info('Data was updated!');
// })
// .catch((e) => {
//     console.error('Failed to update data:', e);
// });
