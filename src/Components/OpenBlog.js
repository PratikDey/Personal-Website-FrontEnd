import React from 'react'


class OpenBlog extends React.Component{
    state = {

        blog: []
       
      }
    
    async componentDidMount() {
        const url = await ('http://localhost:8081/api/showall')
        const response = await fetch(url);
        const result = await response.json();
        this.setState({ blog: result.data.blog })
        console.log(this.state.blog);
      }
    render(){
        return(

            <h1>Blog Content</h1>
            )
    }
  }

  export default OpenBlog;