let json = [
    {
      "Timestamp": "7/4/2020 20:15:01",
      "Year": "Final",
      "branch": "Computer Science & Engg",
      "github": "https://github.com/mishraaayushman3?tab=repositories",
      "image-link": "./img/members/Aayushman Mishra.jpg",
      "linkedin": "https://www.linkedin.com/in/aayushman-mishra-769903176/",
      "mail": "aayushmanmishra3@gmail.com",
      "name": "Aayushman Mishra"
    },
    {
      "Timestamp": "7/5/2020 0:03:00",
      "Year": "Final",
      "branch": "Electronics & Communication Engg",
      "github": "https://github.com/apdgreat",
      "image-link": "./img/members/Ayan Prakash.jpg",
      "linkedin": "https://www.linkedin.com/in/ionprakash1999/",
      "mail": "ayanhere123@gmail.com",
      "name": "Ayan Prakash"
    },
    {
      "Timestamp": "7/5/2020 0:14:31",
      "Year": "Final",
      "branch": "Mechanical Engg",
      "github": "",
      "image-link": "./img/members/Eric John Dungdung.jpg",
      "linkedin": "https://in.linkedin.com/in/eric-john-dungdung-452b27158",
      "mail": "eric.17je002743@mech.iitism.ac.in",
      "name": "Eric John Dungdung"
    },
    {
      "Timestamp": "7/5/2020 0:09:18",
      "Year": "Final",
      "branch": "Electronics & Communication Engg",
      "github": "https://github.com/harshv47",
      "image-link": "./img/members/Harsh Vardhan.jpg",
      "linkedin": "https://www.linkedin.com/in/harsh-vardhan-514a9716a/",
      "mail": "harshv47@gmail.com",
      "name": "Harsh Vardhan"
    },
    {
      "Timestamp": "7/5/2020 0:51:21",
      "Year": "Final",
      "branch": "Electronics & Instrumentation Engg",
      "github": "https://www.github.com/kapilv19",
      "image-link": "./img/members/Kapil Verma.jpg",
      "linkedin": "https://www.linkedIn.com/in/kapilv19",
      "mail": "kapilv1999@gmail.com",
      "name": "Kapil Verma"
    },
    {
      "Timestamp": "7/4/2020 23:50:18",
      "Year": "Final",
      "branch": "Electronics & Communication Engg",
      "github": "https://github.com/PradyumnaGupta",
      "image-link": "./img/members/Pradyumna Gupta.jpg",
      "linkedin": "https://www.linkedin.com/in/pradyumna-gupta-1a900317b/",
      "mail": "pradyumna.gupta22@gmail.com",
      "name": "Pradyumna Gupta"
    },
    {
      "Timestamp": "7/5/2020 0:09:59",
      "Year": "Final",
      "branch": "Electronics & Instrumentation Engg",
      "github": "https://github.com/meet404coder",
      "image-link": "./img/members/Prakhar Kumar.jpg",
      "linkedin": "https://www.linkedin.com/in/prakhar-kumar-iitism",
      "mail": "pka.alld.97@gmail.com",
      "name": "Prakhar Kumar"
    },
    {
      "Timestamp": "7/4/2020 22:14:30",
      "Year": "Final",
      "branch": "Mining Machinery",
      "github": "",
      "image-link": "./img/members/Prince Kunal.jpg",
      "linkedin": "https://www.linkedin.com/in/prince-kunal-a7ab3a165/",
      "mail": "princekunal1999@gmail.com",
      "name": "Prince Kunal"
    },
    {
      "Timestamp": "7/4/2020 22:32:01",
      "Year": "Final",
      "branch": "Computer Science & Engg",
      "github": "https://github.com/Sanchay-Goel/",
      "image-link": "./img/members/Sanchay Goel.jpg",
      "linkedin": "https://www.linkedin.com/in/sanchay-goel/",
      "mail": "sanchaygoel1999@gmail.com",
      "name": "Sanchay Goel"
    },
    {
      "Timestamp": "7/5/2020 1:15:11",
      "Year": "Final",
      "branch": "Electronics & Instrumentation Engg",
      "github": "https://github.com/shantanur8",
      "image-link": "./img/members/Shantanu Rawat.jpg",
      "linkedin": "https://www.linkedin.com/in/shantanu-rawat-879a84163",
      "mail": "shantanur8@gmail.com",
      "name": "Shantanu Rawat"
    },
    {
      "Timestamp": "7/5/2020 6:00:28",
      "Year": "Final",
      "branch": "Electronics & Communication Engg",
      "github": "",
      "image-link": "./img/members/Sourav Kumar Sahu.jpg",
      "linkedin": "",
      "mail": "souravhzb@gmail.com",
      "name": "Sourav Kumar Sahu"
    },
    {
      "Timestamp": "7/4/2020 19:49:26",
      "Year": "Final",
      "branch": "Electronics & Communication Engg",
      "github": "https://github.com/devrra",
      "image-link": "./img/members/Yash Raj.jpg",
      "linkedin": "https://www.linkedin.com/in/yash-raj-579b96156",
      "mail": "yashr2192@gmail.com",
      "name": "Yash Raj"
    }
  ];

let output = [];
output = json.map(object => ({
    name: object.name,
    position: "2021 Batch",
    image: "https://swaraj-jain.github.io/ROBOISM-Webpage" + object['image-link'].slice(1),
    linkedin: object.linkedin == '' ? undefined : object.linkedin,
    github: object.github == '' ? undefined : object.github,
    email: object.mail == '' ? undefined : object.mail,
}));

console.log(JSON.stringify(output));

// let csv = ``;

// let output = csv.split('\n').map(row => {
//     row = row.split(',');
//     return {
//         name: row[0],
//         position: row[1],
//         image: row[5],
//         linkedin: row[3],
//         github: row[4],
//         email: row[2]
//     }
// });

// console.log(JSON.stringify(output));