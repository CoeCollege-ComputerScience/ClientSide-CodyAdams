//You have been asked to build the client-side for a Campus Club Event Finder. In this activity, you will create an
// interface to help students interact (identify, sort, filter and summarize) ad variety of campus events, including club
// meetings, workshops, and social gatherings. This will give you a chance to demonstrate your ability to
// • Represent and manipulate data in the web ecosystem
// • Organize and style a display
// • Integrate interactive functionality to allow client-side user interactions

const campusEvents = [
    {
        id: 1,
        name: 'Chess Club',
        organization: 'Coe Clubs',
        time: 19.00,
        cost: 0.00
    },
    {
        id: 2,
        name: 'Play',
        organization: 'Coe Clubs',
        time: 20.00,
        cost: 20.00
    },
    {
        id: 3,
        name: 'Band',
        organization: 'Kennedy High School',
        time: 9.30,
        cost: 15.00
    },
    {
        id: 4,
        name: 'Market After Dark',
        organization: 'Cedar Rapids',
        time: 21.00,
        cost: 5.00
    },
    {
        id: 5,
        name: 'Football game',
        organization: 'Coe Athletics',
        time: 13.00,
        cost: 50.00
    },
    {
        id: 6,
        name: 'Computer Science SI',
        organization: 'Coe Academics',
        time: 17,
        cost: 0.00
    },
    {
        id: 7,
        name: 'CyHawk Game',
        organization: 'UofI Athletics',
        time: 10,
        cost: 100
    },
    {
        id: 8,
        name: 'Early Bird Breakfast',
        organization: 'Coe Administration',
        time: 5,
        cost: 15.0
    },
    {
        id: 9,
        name: 'Soccer Watch Party',
        organization: 'Coe Athletics',
        time: 18,
        cost: 10.0
    },
    {
        id: 10,
        name: 'Yoga',
        organization: 'Coe Academics',
        time: 15,
        cost: 0
    }
]

const eventsBody = document.querySelector('#eventBody');

const displayEvents = (eventsArray) => {
    // Clear old information first
    eventsBody.innerHTML = "";

    // Go through every glaze
    eventsArray.map(campusEvent => {

        // Create a section
        const event = document.createElement("tr");

        // Put information inside it
        event.innerHTML += `<td>${campusEvent.id}</td`;
        event.innerHTML += `<td>${campusEvent.name}</td>`;
        event.innerHTML += `<td>${campusEvent.organization}</td>`;
        event.innerHTML += `<td>${campusEvent.time}</td>`;
        event.innerHTML += `<td>${campusEvent.cost}</td>`;

        // Add it to the webpage
        eventsBody.appendChild(event);
    });
}

const updateEvents = () => {
    displayEvents(campusEvents);
}

updateEvents();