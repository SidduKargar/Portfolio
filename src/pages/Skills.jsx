import { motion } from 'framer-motion';

function SkillCard({ skill, index, color }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className={`bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700 hover:border-${color}-500 transition-all duration-300`}
    >
      <span className="text-gray-300 text-lg">{skill}</span>
    </motion.div>
  );
}

function SkillCategory({ title, skills, color }) {
  return (
    <div className="mb-12">
      <div className="flex items-center mb-6">
        <h3 className={`text-2xl font-bold text-${color}-400`}>{title}</h3>
        <div className={`h-px flex-grow ml-4 bg-${color}-400/20`}></div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} index={index} color={color} />
        ))}
      </div>
    </div>
  );
}

function Skills() {
  const categories = [
    {
      title: 'Core Technologies',
      color: 'blue',
      skills: [
        'C#', 'Java', 'JavaScript', 'Python', 'C++',
        'HTML5 & CSS3', 'React.js', 'Node.js', 'ASP.NET'
      ]
    },
    {
      title: 'Database & Backend',
      color: 'green',
      skills: [
        'SQL Server', 'SQLite', 'RESTful APIs',
        'Express.js', 'Database Optimization'
      ]
    },
    {
      title: 'Frontend & UI/UX',
      color: 'purple',
      skills: [
        'UI/UX Design', 'Kendo UI', 'jQuery',
        'Responsive Web Design', 'AJAX & XML'
      ]
    },
    {
      title: 'DevOps & Tools',
      color: 'red',
      skills: [
        'Docker', 'GitHub', 'CI/CD',
        'Cloud Computing', 'Agile Methodologies'
      ]
    },
    {
      title: 'Soft Skills',
      color: 'yellow',
      skills: [
        'Team Leadership', 'Problem-Solving',
        'Communication', 'Project Management',
        'Mentoring'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Skills & Expertise</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise and professional capabilities
            </p>
          </div>

          <div className="space-y-12">
            {categories.map((category, index) => (
              <SkillCategory
                key={index}
                title={category.title}
                skills={category.skills}
                color={category.color}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;