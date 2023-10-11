import "./Activities.css"

export default function Activities({ Activities }) {
    return (
      <div className="activities-container">
        {Activities?.map((Activity, index) => {
          return (
            <div key={index} className="activity-card">
              <h2>{Activity.name}</h2>
              <p>Difficulty: {Activity.difficulty}</p>
              <p>Duration: {Activity.duration} hrs</p>
              <p>Season: {Activity.season}</p>
            </div>
          );
        })}
      </div>
    );
  }