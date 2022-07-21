import React from 'react'
import "./Home.css"
function Home() {
    return (

        <div >
            <div id='center' >
                <h1 id='head'>Be different, work visually</h1>
                <p className='p'>Try the world’s most visual productivity app. Supercharge thinking, planning and </p> <br />
                <p className='p'>learning with AI, mind maps, task boards and more</p>
                <div id='in'>

                    <input className='input' type="text" placeholder='Enter your email' />
                    <button id='btn'>Get Started</button>
                </div>

            </div>
            <div >
                <img src="https://www.ayoa.com/wp-content/uploads/2021/11/ayoa_allinone.webp" alt="AD" />
            </div>
            <div>
                <img src='https://www.ayoa.com/wp-content/uploads/2018/05/cbsnews_logo.png' alt='logo' />
                <p>“The most unique twist on task management I’ve ever seen”</p>
                <img src='https://www.ayoa.com/wp-content/uploads/2018/05/techcrunch-logo.png' alt='logo' />
                <p>“Visually-oriented people – this layout boosts productivity”</p>
                <img src='https://www.ayoa.com/wp-content/uploads/2019/09/logo-lhacker.png' alt='logo' />
                <p>“Turns your tasks into an awesome venn diagram”</p>
                <img src='https://www.ayoa.com/wp-content/uploads/2019/09/logo-pcworld.png' alt='logo' />
                <p>“A more intuitive way to manage workloads”</p>
            </div>
            <div>
                <h1>See Ayoa in action</h1>
                <p>The all-in-one mind mapping, collaboration and task management app. See how you can achieve your best work.</p>
                <button>Watch Video</button>
            </div>
        </div>
    )
}

export default Home