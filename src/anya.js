const pic = {
    uniform: "https://spy-family.net/assets/img/common/header_bottomimg_3.png",
    icecream: "https://spy-family.net/assets/img/common/header_bottomimg_3_family.png",
    uniform_large: "https://spy-family.net/assets/img/top/chara_anya_1.png",
    casual_large: "https://spy-family.net/assets/img/top/chara_anya_2.png",
    avatars: [],
};

for (let i = 1; i <= 40; i++) {
    pic.avatars[i] = `https://spy-family.net/assets/img/special/anya/${i
        .toString()
        .padStart(2, "0")}.png`;
}
pic.avatars.push(
    
);

const titles = ["First-Grade Student", "Test Subject 007", "Telepath"];

const about = [
    "My name is Anya Forger. I am 6 years old now!",
    "I am studing in Cecile Hall at Eden Academy.",
    "",
    "This summer I went to NTNU CSIE Camp to learn how to code.",
    "During the camp, I learned how to: ",
    "  - Build SPA Website with frontend framework Vue and Tailwind.",
    "  - Develop efficiently with Node.js ecosystem.",
    "  - Design and develop a gomoku gaming agent with Python.",
    "  - Operate Linux system with common commands.",
    "  - Use Git and GitHub to work on projects.",
    "",
    'By the way, I am starring in an anime called "SPY x FAMILY". Did you watch it?',
].join("\n");

const projects = [
    {
        name: "use github rickroll",
        description: "Never gonna give you up",
        image: "https://s.yimg.com/ny/api/res/1.2/xQD.4JGpg6XIJzx.SbQkiA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQ4MA--/https://s.yimg.com/uu/api/res/1.2/Rffcviow.eCHjmEu2msLJg--~B/aD0xNzU3O3c9MjM0MzthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/insider_articles_922/c6ce8d0b9a7b28f9c2dee8171da98b8f",
        skills: ["rick roll", "html", "re url", "GitHub"],
        url: "https://chiu20060726.github.io/main/home.html",
    },
    {
        name: "My own DNS",
        description: "A free .tk DNS bought by me (?",
        image: "https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU",
        skills: ["DNS", ".tk"],
        url: "http://chiu20060726.tk",
    },
    {
        name: "A special link :)",
        description: "just click it :)",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/1200px-Question_mark_%28black%29.svg.png",
        skills: [":>"],
        url: "https://reurl.cc/8okm8g",
    },
];

export { pic, titles, about, projects };
