import React from 'react';
import './Education.css';

export const Education: React.FC = () => {
  return (
    <div className="education" id="education">
      <h6 className="education-title hidden">Education</h6>
      <p className="education-paragtaph hidden"><em>Gerogia Tech | Atlanta, GA</em> (August 2023 - June 2025) (Expected)<br/>
      M.S. Computer Science, GPA 4.0</p>
      <p className="education-paragraph hidden"><em>De Anza College | Cupertino, CA</em> (January 2021 – March 2022)<br/>
      A.A. Systems Programming, GPA 3.87</p>
      <p className="education-paragraph hidden"><em>San Jose State University | San Jose, CA</em> (August 2012 – June 2016)<br/>
      B.A. Political SCience, GPA 3.63</p>
    </div>
  );
}