import React from 'react';
import PersonalizedDivider from '../../Components/PersonalizerDivider/PersonalizedDivider';  
import PersonalizedArticle from '../../Components/PersonalizedArticle/PersonalizedArticle';  
import Header from '../../Components/Header/Header';   
import './Home.css';
import '../../App.css';

function Home() { 
    let Text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vulputate quam non ultrices mattis. Nullam nec sollicitudin erat. Cras sed convallis metus. Donec vulputate ligula dictum viverra tempus. Maecenas ut libero magna. Morbi in ante molestie orci efficitur tempus eu ac magna. Fusce non turpis ac tortor lacinia tincidunt et at eros. Suspendisse potenti. Donec lacinia ipsum ligula, in gravida massa facilisis nec. Suspendisse in nisi suscipit, tincidunt diam ac, suscipit ex. Fusce laoreet velit justo, eget faucibus sapien molestie sed. Ut blandit, lectus sed sagittis ultrices, est mi pulvinar orci, quis lobortis lacus diam nec nulla.'; 
    return (
        <div className='screen'>
            <Header/>
            <div id='home-body-content'>
                <h2 style={{ alignSelf: 'center' }}>Home</h2>
                <div>
                    <PersonalizedArticle Text={Text} /> 
                    <PersonalizedDivider />
                    <PersonalizedArticle Text={Text} />
                    <PersonalizedDivider />
                    <PersonalizedArticle Text={Text} />
                </div>
            </div>
        </div>
    );
}

export default Home; 