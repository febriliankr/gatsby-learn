const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path");
//console.log("gatsbynodejs successfuly ran");

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === "MarkdownRemark") {
        console.log("found MarkDownRemark", createFilePath({ node, getNode, basePath: "posts" }));
        const slug = createFilePath({ node, getNode, basePath: "posts" });
        createNodeField({
            node,
            name: "slug",
            value: slug
        })
    }
}

exports.createPages = ({ graphql, actions }) => {

    const { createPage } = actions;

    return graphql(`{
        allMarkdownRemark{
          nodes{
                fields{
              slug
            }
          }
        }
        }
        `).then(result => {
        console.log(JSON.stringify(result))
        result.data.allMarkdownRemark.nodes.forEach((node) => {
            createPage({
                path: node.fields.slug,
                component: path.resolve('./src/layout/BlogpostLayout.js')

            });
        })
    })
}