import React from "react"
import Post from "../components/Post"
import PrimaryLayout from '../layout/PrimaryLayout'
import { graphql } from 'gatsby'

export default function Home({data}) {
  console.log('ded', data.allMarkdownRemark.nodes[0]);
  return (
    <PrimaryLayout>
              {
                data.allMarkdownRemark.nodes.map((node)=>{
                  return <Post 
                  image={node.frontmatter.image}
                  title={node.frontmatter.title} 
                  excerpt={node.excerpt}

                  />
                })
              }
              
    </PrimaryLayout>
  )
}

export const query = graphql`
{
  allMarkdownRemark{
    nodes{
    frontmatter{
      title
      date
      keywords
      image
    }
      excerpt
      html
    }
  }
  }
`