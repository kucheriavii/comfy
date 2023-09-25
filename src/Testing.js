import React from 'react'
import styled from 'styled-components';

export default function Testing() {
  return (
    <Wrapper>
        <h3>Hello world</h3>
        <p>people</p>
        <div className='article'>
            <p>this is article</p>    
            <p>this is article</p>    
            <p>this is article</p>    
            <p>this is article</p>    
            <p>this is article</p>    
            <p>this is article</p>    
        </div> 
        <button>click me</button>   
    </Wrapper>
  )
}

const Wrapper = styled.section`
    h3{
        color: #f0f;
    }

    .article{
        p{
            color: blue;
        }
    }
`
