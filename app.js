//Start Something New!

const speedElem = document.getElementById("timmer");
const input = document.getElementById("Type");
const accuracyElem = document.getElementById("accuracy");
const suggestionsElem = document.getElementById("suggestions");
const Multitext = ["I don't know why people are so keen to put the details of their private life in public; they forget that invisibility is a superpower.", "A healthy diet is crucial for leading a healthy and fulfilling life. It is essential to choose the right food to fuel our bodies and keep them in top condition. Unfortunately, many people struggle with knowing what to eat and how much of it to consume. This is where diet plans come in, offering a structured approach to eating that can help you achieve your health goals.", "There is a wide range of diet plans available, each with its own set of rules and restrictions. Some focus on reducing calorie intake, others on eliminating certain foods or food groups, and still others on increasing the amount of certain nutrients in your diet. The problem is, many of these diets can be expensive and hard to follow, making them difficult to stick to in the long term.", "Say goodbye to fad diets and expensive meal plans, and hello to sustainable weight loss with our best free diet plan. This comprehensive plan includes nourishing meals, healthy snacks and expert tips to help you reach your fitness goals. Get started now and achieve the body you've always wanted!", "The tea industry in Assam has a number of social responsibilities towards its workers, investors, society, and the environment. These responsibilities are an important aspect of sustainable business practices and are crucial for the long-term success and viability of the industry.", "Tea estate workers in Assam are often from economically and socially marginalized communities, and their livelihoods are closely tied to the tea industry. The industry has a responsibility to provide these workers with safe and fair working conditions, fair wages, and access to healthcare and other essential services.", "Employees play a crucial role in the success of the tea industry in Assam, and tea companies typically offer a range of benefits and features to attract and retain high-quality workers.", "Are you tired of spending hours writing articles, only to find out that they are not unique enough to pass plagiarism checks? Or are you struggling to find the right words to express your thoughts and ideas? Look no further, as Revive Writer is here to help you!", "A content management system (CMS) is a software application that allows users to easily create, manage, and publish content on the internet."];
function GetRandomText(arr){
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}
const text = GetRandomText(Multitext);
document.getElementById('randomtext').innerHTML = text;

let startTime = null;
let timerId = null;
let errors = 0;
let charsTyped = 0;

input.addEventListener("input", (e) => {
    if (!startTime) {
        startTime = Date.now();
        timerId = setInterval(updateSpeed, 1000);
    }

    const typedText = e.target.value;
    const lastTypedChar = typedText[typedText.length - 1];
    const expectedChar = text[typedText.length - 1];

    if (lastTypedChar === expectedChar) {
        charsTyped++;
    } else {
        errors++;
    }

    const accuracy = Math.round((charsTyped / (charsTyped + errors)) * 100);
    accuracyElem.innerText = accuracy;
    suggestionsElem.innerText = getSuggestions(accuracy);
});

function updateSpeed() {
    const elapsedTime = (Date.now() - startTime) / 1000; // in seconds
    const speed = Math.round(((charsTyped / elapsedTime) * 60) / 5); // in WPM
    speedElem.innerText = speed;
}

function getSuggestions(accuracy) {
    if (accuracy >= 90) {
        return "Great job! Keep it up!";
    } else if (accuracy >= 80) {
        return "You're doing well. Keep practicing to improve your accuracy.";
    } else {
        return "Keep practicing to improve your accuracy and speed.";
    }
}