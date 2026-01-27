import React from 'react'
const Profile = ({name,age,skill}) => {
  return (
    <div>
        <h1>I am {name}.My age is {age}</h1>
        <ul>
            {skill.map((skill)=>{
                return <li>{skill}</li>
        })}
        </ul>
    </div>
  )
}

export default Profile