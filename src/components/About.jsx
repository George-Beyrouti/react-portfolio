import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-full bg-gradient-to-b from-gray-800 to-black text-white'>

      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-6'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className='text-xl mt-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, illum sapiente quis ipsam impedit inventore libero tempore saepe, iure laudantium sed assumenda, blanditiis illo fuga.
        </p>

        <br />

        <p className='txt-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id mollitia tempora amet beatae eum pariatur officiis consequuntur provident aliquid. Accusantium alias quaerat ad voluptatem tempora.
        </p>

      </div>
    </div>
  )
}

export default About