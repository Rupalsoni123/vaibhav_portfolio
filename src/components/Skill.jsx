import React from 'react'
import Card from './Card'
import CardCover from './CardCover'

const Skill = ({ skill: { style, name, icon } }) => {
    return (
        <Card style={style}>
            <div className="rounded-lg w-full bg-gradient-to-br from-gray-900 to-black 
                 group relative flex flex-col justify-between duration-300 py-3 h-28 
                 border border-gray-700 hover:border-cyan-500 shadow-md hover:shadow-cyan-500/20
                 transform hover:-translate-y-1 transition-all"
                 aria-label={`${name} skill`}>
                <CardCover style={{ display: "hidden group-hover:block", ...style }} />
                <div className="flex justify-center w-fit mx-auto z-20 transform group-hover:scale-110 transition-transform duration-300">
                    {icon}
                </div>
                <div className='text-center text-white z-20 mt-2'>
                    <p className="font-medium text-sm tracking-wide">{name}</p>
                </div>
            </div>
        </Card>
    )
}

export default Skill;
