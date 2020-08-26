import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { navigate } from 'gatsby'


function Post({ image, title, excerpt }) {
    return (
        <div className="p-3">
            <Card style={{ width: '50%' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {excerpt}
                    </Card.Text>
                    <Button variant="primary" onClick={() => navigate("/")}>Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Post
