const express = require(`express`);
const app = express();
const PORT = 3031;
const server = app.listen(PORT, function () {
  console.log(`server started at ${PORT}`);
});

app.get("/api/resume/:name", function (req, res) {
  const data = {
    raluca: {
      name: `LORENA RALUCA ZOTA`,
      role: `FRONTEND DEVELOPER`,
      phone: "+40762 781 351",
      email: "zotaraluca649@gmail.com",
      about: {
        title: "ABOUT ME",
        details: `<i>"If four things are followed - having a great aim, acquiring knowledge, hard work, and perseverance - then anything can be achieved."
              A. P. J. Abdul Kalam</i><br>
              This quote perfectly describes my connection to the IT field.`,
      },

      work: {
        title: "WORK EXPERIENCE",
        details: `A friend of mine opened my eyes to this world of IT that at first seemed very different. Everything was completely different from anything I had done before, but that didn't stop me from learning, step by step every day. Later, I dedicated all my time to study, to discover this fascinating world, an infinite Universe of knowledge. I love what I do, I love discovering new things every day and deepening what I already know.`,
      },
      soft_skills: {
        title: "SOFT SKILLS",
        details: `Teamwork<br/>
                        Attention to Detail<br/>
                        Adaptability<br/>
                        Communication<br/>
                        Time Management<br/>
                        Problem-Solving`,
      },

      Languages: {
        title: `ENGLISH`,
        details: `B2`,
        title: `GERMAN`,
        details: `B1`,
      },

      skills: [
        {
          name: "HTML",
          rate: "6",
        },
        {
          name: "CSS",
          rate: "6",
        },
        {
          name: "JS  (ES6)",
          rate: "6",
        },
        {
          name: "REACT.JS",
          rate: "6",
        },
        {
          name: "NPM",
          rate: "3",
        },
        {
          name: "GIT",
          rate: "4",
        },

        {
          name: "FIGMA",
          rate: "5",
        },
        {
          name: "TESTING",
          rate: "5",
        },
        {
          name: "REDUX",
          rate: "4",
        },
        {
          name: "NEXT.JS",
          rate: "5",
        },
      ],

      educations: {
        title: "EDUCATION",
        details: `<b>Online Course</b><br/>Ongoing<br/> React - The Complete Guide (incl Hooks, React Router, Redux)<br/><br/>
                   <b>IT School</b><br/>May-Nov 2022<br/>Study Program: Frontend Developer<br/><br>
                    <b>Online Course</b><br/>Jun-Jul 2022<br/> The Complete Javascript Course 2022: From Zero to Expert!<br/><br>
                    <b>ALEXANDRU IOAN CUZA UNIVERSITY</b><br/>2018-2021<br/>Study Program: English and German Translation and Interpretation<br/><br/>
                 `,
      },
      personal_projects: {
        title: "PERSONAL PROJECTS",
        details: `<b>BURJ AL ARAB PROJECT</b> <br/>A presentation of the 7 star hotel in Dubai.</br></br>
                  <b>BEAUTY PROJECT</b><br/>Beauty Salon Website</b><br/><br>
                  <b>MY RESUME</b><br/>`,
      },
    },
  };
  const name = req.params.name;
  res.send(data[name]);
});
