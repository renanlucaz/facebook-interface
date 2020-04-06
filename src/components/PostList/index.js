import React, { Component } from 'react';

import './styles.css';
import PostItem from '../PostItem';

class PostList extends Component {
    state = {
        posts: [
            {
                id: 1,
                author: {
                    name: "Renan Lucas",
                    avatar: "https://avatars1.githubusercontent.com/u/52937668?v=4",
                },
                date: "04 Jun 2019",
                content: "Esse projeto foi programado em ReactJS",
                comments: [
                    {
                        id: 1,
                        author: {
                            name: "Filipe Deschamps",
                            avatar: "https://avatars0.githubusercontent.com/u/4248081?v=4",
                        },
                        content: "É uma ótima técnologia",
                    },  
                    {
                        id: 2,
                        author: {
                            name: "Filipe Deschamps",
                            avatar: "https://avatars0.githubusercontent.com/u/4248081?v=4",
                        },
                        content: "Bom trabalho.",
                    }, 
                ]
            },
            {
                id: 2,
                author: {
                    name: "Filipe Deschamps",
                    avatar: "https://avatars0.githubusercontent.com/u/4248081?v=4",
                },
                date: "04 Jun 2019",
                content: "Poderia me passar o seu perfil do github?",
                comments: [
                    {
                        id: 2,
                        author: {
                            name: "Reann Lucas",
                            avatar: "https://avatars1.githubusercontent.com/u/52937668?v=4",
                        },
                        content: "Claro! é esse aqui: https://github.com/renanlucaz/.",
                    }, 
                ]
            },
            
        ]
        
    }

    render() {
        return ( 
            <section>
                {
                    this.state.posts.map(post => (
                        <PostItem key={ post.id } {...post}/>
                    ))
                }
            </section>
        );
    }
}

export default PostList;
