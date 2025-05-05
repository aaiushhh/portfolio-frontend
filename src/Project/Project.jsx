import './Project.css'

const Project = ({ project }) => {
  // If the prop is the whole object, extract the first project
  const data = project.projects ? project.projects[0] : project

  return (
    <div className="container">
      <div className="metadata">
        <h3>{data.title || "Untitled Project"}</h3>
        <p className="tech">
          <strong>Tech Stack:</strong> {data.tech || "Not specified"}
        </p>
       
          <p className='dec'>{data.description || "No description available."}</p>
          
        <div className="links">
          {data.github && (
            <a className="url" href={data.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
          {data.hosted && (
            <a className="url" href={data.hosted} target="_blank" rel="noopener noreferrer">
              Live Site
            </a>
          )}
          {data.youtube && (
            <a className="url" href={data.youtube} target="_blank" rel="noopener noreferrer">
              YouTube
            </a>
          )}
        </div>
      </div>
      <div className="image">
        {data.image ? (
          <img src={data.image} alt={data.title} />
        ) : (
          <div className="no-image">No Image</div>
        )}
      </div>
    </div>
  )
}

export default Project