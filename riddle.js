// Local riddle database
const localRiddles = [
    {
        question: "What has keys but can't open locks?",
        answer: "A piano"
    },
    {
        question: "What has a heart that doesn't beat?",
        answer: "An artichoke"
    },
    {
        question: "What has hands but can't clap?",
        answer: "A clock"
    },
    {
        question: "What has a neck but no head?",
        answer: "A bottle"
    },
    {
        question: "What gets wetter as it dries?",
        answer: "A towel"
    },
    {
        question: "What has cities but no houses, forests but no trees, and water but no fish?",
        answer: "A map"
    },
    {
        question: "What has to be broken before you can use it?",
        answer: "An egg"
    },
    {
        question: "I'm tall when I'm young and short when I'm old. What am I?",
        answer: "A candle"
    },
    {
        question: "What has legs but doesn't walk?",
        answer: "A table"
    },
    {
        question: "What has one eye but can't see?",
        answer: "A needle"
    }
];

function fetchRiddles(){
    try{
        const randomIndex = Math.floor(Math.random() * localRiddles.length);
        const riddle = localRiddles[randomIndex];
        
        document.getElementById('riddleDisplay').innerHTML = `
            <div class="riddle-card">
                <strong>Riddle:</strong> ${riddle.question}<br><br>
                <em>Answer will be revealed in 5 seconds...</em>
                <div id="answer" style="display: none;">
                    <strong>Answer:</strong> ${riddle.answer}
                </div>
            </div>
        `;

        setTimeout(() => {
            document.getElementById('answer').style.display = 'block';
        }, 5000);
    }
    catch(error){
        console.log(error);
        document.getElementById('riddleDisplay').innerHTML = 'Error loading the riddle.';
    }
}

document.getElementById('riddleBtn').addEventListener('click', fetchRiddles);