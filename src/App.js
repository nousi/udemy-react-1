import React from 'react';

const App = () => {
  const profiles = [
    {name: "Taro", age: 10},
    {name: "Hanako", age: 5}
  ]
  return(
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }
    </div>
  )
}

const User = (props) => {
return <div>私の名前は{props.name}, {props.age}才です。</div>
}

// const User = (props) => {
//   return <div>Hi, I am {props.name}!,and {props.age} years old! </div>
// }

User.defaultProps = {
  age: 1
}

export default App;
