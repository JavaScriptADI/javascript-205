const friends = [
    {
        avatar: "",
        fullName: "Nick May",
        age: 23,
        email: "nick@gmail.com",
        location: {
            country: "...",
            street: "..."
        },
        height: 1.89,
        phoneNumber: "+1-23..."
    },
    {
        avatar: "",
        fullName: "Frey May",
        age: 27,
        email: "Frey@gmail.com",
        location: "...",
        height: 1.77,
        phoneNumber: "+1-23..."
    }
];

friends.push({
    avatar: "",
    fullName: "Marry Alice",
    age: 45,
    email: "Marry@gmail.com",
    location: "...",
    height: 1.77,
    phoneNumber: "+1-23..."
})


for (const friend of friends) {
    document.body.innerHTML += (`
        <div>
            <span>${friend.fullName}</span>
        </div>
    `);
}