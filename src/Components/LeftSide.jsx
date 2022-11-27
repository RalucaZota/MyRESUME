import './css/left-side.scss'
import { TextComponent } from './TextComponent'

export const LeftSide = function ({data}) {
    
    const sections = ['about', 'work', 'soft_skills', 'special_skills' ]
    

    return (
        <section className="left-side">
         <p className="contact-details">Call {data.phone} or <br />Email {data.email}</p>

         {sections.map(key => (
                     <TextComponent key={key}
                                    title={data[key]?.title}
                                    details={data[key]?.details} />
         ))}



        </section>
    )
} 