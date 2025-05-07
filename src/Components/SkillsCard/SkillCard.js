import '../../Pages/Skills/Skills.css';
export default function SkillsCard({ skillName, skillUrl }) {
    return(
        <div className='skill'>
            <img src={skillUrl} alt={skillName} loading='lazy'/>
            <p>{skillName}</p>
        </div>
    )
}