const heroList = [
    {name:'batman',skills:['weapons','martial arts']},
    {name:'spiderman',skills:['fly','premonition']},
    {name:'hulk',skills:['fight']},
    {name:'superman',skills:['fly','laser-eye']}
];

function findAllHeroBySkill(skill){
    return heroList.filter( hero => hero.skills.indexOf(skill) > -1);
}

module.exports = {findAllHeroBySkill}