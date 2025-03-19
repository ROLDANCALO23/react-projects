import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';
const users=[
    {
        userName: 'reactjs',
        name:'React',
        initialIsFollowing:false
    },
    {
        userName: 'vuejs',
        name:'Vue',
        initialIsFollowing:true
    },
    {
        userName: 'angular',
        name:'Amgular',
        initialIsFollowing:false
    }
]
export function App() {

    return (
        <section className='tw-section'>
            {
                users.map(({userName, name,initialIsFollowing})=>{
                    return (
                        <TwitterFollowCard
                            key={userName}
                            userName={userName} 
                            initialIsFollowing={initialIsFollowing}>
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}