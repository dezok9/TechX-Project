import React from 'react'
import Card from 'react-bootstrap/Card';
import "./css/App.css";
import "./css/about.css"

export function About() {
  return (
    <div class="about">
      <header>
        ABOUT US
      </header>
      {/* <ColorPickerImp/>  */}
      <div class = "website-body">
        <div class = "information">
          This site was made by students in TechX at UNC Chapel Hill. Read a little about us.
        </div>
        <main>
          <Card class="card david" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>David Villavicencio</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">he/him</Card.Subtitle>
              <Card.Text>
                Freshman majoring in Computer Science with a double minor in Applied Science/Engineering and Entrepreneurship.
              </Card.Text>
              <Card.Link href="https://github.com/dsvill06">GitHub</Card.Link>
              <Card.Link href="https://www.linkedin.com/in/dsvill06/">LinkedIn</Card.Link>
            </Card.Body>
          </Card>
          <Card class="card gillian" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Gillian Zech</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">she/her</Card.Subtitle>
              <Card.Text>
                Junior double majoring in Computer Science and Linguistics with a minor in Data Science.
              </Card.Text>
              <Card.Link href="https://github.com/GillianZech">GitHub</Card.Link>
              <Card.Link href="https://www.linkedin.com/in/gillian-zech-compling/">LinkedIn</Card.Link>
            </Card.Body>
          </Card>
          <Card class="card destiny" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Destiny Okonkwo</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">she/her</Card.Subtitle>
              <Card.Text>
                First-year majoring in Computer Science (B.S.) and Psychology (B.S.). 
              </Card.Text>
              <Card.Link href="https://github.com/dezok9">GitHub</Card.Link>
              <Card.Link href="https://www.linkedin.com/in/destiny-okonkwo/">LinkedIn</Card.Link>
            </Card.Body>
          </Card>
        </main>
      </div>

    </div>
  )
}
