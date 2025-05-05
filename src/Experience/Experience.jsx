import Project from "../Project/Project"
import "./Experience.css"
import { useState, useEffect } from "react"
import { getInternships, getCertificates } from "../api/api"

const Experience = () => {
  const [internships, setInternships] = useState([])
  const [certificates, setCertificates] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      const fetchedInternships = await getInternships()
      const fetchedCertificates = await getCertificates()

      setInternships(fetchedInternships.length ? fetchedInternships : [])
      setCertificates(fetchedCertificates.length ? fetchedCertificates : [])
    }

    fetchData()
  }, [])

  const handlePrevClick = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : internships.length - 1))
  }

  const handleNextClick = () => {
    setCurrentIndex((prev) => (prev < internships.length - 1 ? prev + 1 : 0))
  }

  return (
    <div className="experience-container">
      <div className="internship-slider">
        <div className="right-button" onClick={handlePrevClick}>&lt;</div>
        <div className="content">
          {(internships.length > 0 ? internships : [{
            role: "No data found", company: "-", duration: "-", description: "", logo: "", start: "", end: ""
          }]).map((card, index) => (
            <div 
              key={index} 
              className="card"
              style={{
                transform: `translateX(${(index - currentIndex) * 100}%)`,
                backgroundImage: card.logo ? `url(${card.logo})` : 'none',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                position: 'relative',
              }}
            >
              <div className="card-content">
                <span className="role-badge-blue">{card.role}</span>
                <h3 className="comp">{card.company}</h3>
                <div className="dates">
                  <span>{card.start}</span>
                  <span className="date-separator">–</span>
                  <span>{card.end}</span>
                </div>
                {card.description && <p className="description">{card.description}</p>}
              </div>
            </div>
          ))}
        </div>
        <div className="left-button" onClick={handleNextClick}>&gt;</div>
      </div>

      <div className="certificates">
        {(certificates.length > 0 ? certificates : [{
          name: "No data found", provider: "", description: "", imageUrl: "", certificateUrl: ""
        }]).map((cert, index) => (
          <div key={index} className="certificate-card">
            <div className="certificate-image">
              {cert.imageUrl ? (
                <img src={cert.imageUrl} alt={cert.name} />
              ) : (
                <div className="image-placeholder" />
              )}
            </div>
            <div className="certificate-info">
              {cert.certificateUrl ? (
                <a href={cert.certificateUrl} target="_blank" rel="noopener noreferrer" className="certificate-name">
                  {cert.name}
                </a>
              ) : (
                <span className="certificate-name">{cert.name}</span>
              )}
              <div className="certificate-provider">{cert.provider}</div>
              <div className="certificate-description">{cert.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
