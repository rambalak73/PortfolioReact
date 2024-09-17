const skills = [
  {
    name: "DSA (Data Structures & Algorithms)",
    image: "https://cdn-icons-png.flaticon.com/512/2721/2721292.png", // DSA logo
    summary:
      "Mastering problem-solving with optimized data structures and algorithms.",
    documentation: "https://www.geeksforgeeks.org/data-structures/",
  },
  {
    name: "C++",
    image: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png", // C++ logo
    summary: "High-performance programming with OOP concepts and STL.",
    documentation: "https://cplusplus.com/doc/tutorial/",
  },
  {
    name: "Java",
    image: "https://cdn-icons-png.flaticon.com/512/226/226777.png", // Java logo
    summary: "Object-oriented programming for cross-platform applications.",
    documentation: "https://docs.oracle.com/javase/tutorial/",
  },
  {
    name: "HTML & CSS",
    image: "https://cdn-icons-png.flaticon.com/512/732/732190.png", // HTML logo
    summary: "Building responsive websites with structure and style.",
    documentation: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "JavaScript",
    image: "https://cdn-icons-png.flaticon.com/512/919/919828.png", // JS logo
    summary: "Interactive web features using Vanilla JS and ES6+.",
    documentation: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "React",
    image: "https://cdn-icons-png.flaticon.com/512/919/919851.png", // React logo
    summary: "Component-based UI building with state management.",
    documentation: "https://reactjs.org/docs/getting-started.html",
  },
  {
    name: "MongoDB",
    image:
      "https://cdn.iconscout.com/icon/free/png-256/mongodb-3521676-2945120.png", // MongoDB logo
    summary: "NoSQL database for flexible and scalable apps.",
    documentation: "https://www.mongodb.com/docs/",
  },
  {
    name: "Node.js",
    image: "https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png", // Node.js logo
    summary: "Back-end JavaScript for creating scalable server-side apps.",
    documentation: "https://nodejs.org/en/docs/",
  },
  {
    name: "EJS",
    image:
      "https://miro.medium.com/v2/resize:fit:840/1*KKciGBpSE9sxj8aZ1Xdu-w.png", // EJS logo
    summary: "Simple templating language for creating dynamic websites.",
    documentation: "https://ejs.co/#docs",
  },
  {
    name: "SQL",
    image: "https://cdn-icons-png.flaticon.com/512/2772/2772128.png", // SQL logo
    summary: "Database querying for structured data management.",
    documentation: "https://www.w3schools.com/sql/",
  },
  {
    name: "Communication Skills",
    image: "https://cdn-icons-png.flaticon.com/512/727/727393.png", // Communication skills logo
    summary: "Clear, concise communication for effective teamwork.",
    documentation: "/communication",
  },
  {
    name: "Organizational Skills",
    image: "https://cdn-icons-png.flaticon.com/512/679/679960.png", // Organizational skills logo
    summary: "Efficient task management to meet deadlines and goals.",
    documentation: "/organizational",
  },
];

const Skills = () => {
  return (
    <>
      <div className="flex mx-auto px-5 pt-24 pb-10 bg-gradient-to-b from-[#444] to-[#555] min-h-screen w-full z-10 rounded-3xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="h-auto bg-gray-800 p-5 rounded-2xl shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="hover:rotate-6 h-20 w-20 rounded-full mx-auto shadow-md transition-transform duration-300 group-hover:rotate-6"
              />
              <div className="text-center text-white mt-4">
                <h1 className="font-bold font-serif text-xl">{skill.name}</h1>
                <p className="mt-3 text-sm">{skill.summary}</p>
                <a
                  href={skill.documentation}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="mt-5 bg-blue-600 p-2 px-4 rounded-full hover:bg-blue-800 transition-all duration-300 shadow-md">
                    Read More
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
