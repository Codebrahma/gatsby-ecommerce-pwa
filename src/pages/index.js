import React from 'react'
import Link from 'gatsby-link'
import axios from 'axios';

class IndexPage extends React.Component {
  constructor(props) {
    super(props)

  }
  componentDidMount() {
    axios('https://api.github.com/users/prasanna1211')
      .then((res) => {
        console.log(res);
      })
  }

  render() {
    return (
      <div>
        IndexPage
      </div>
    )
  }
}

export default IndexPage;


