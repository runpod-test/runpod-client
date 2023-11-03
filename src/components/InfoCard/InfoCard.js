import './InfoCard.css'

function InfoCard({ title, subtitle, subtitleClass}) {
  return (
    <div className="info-card">
      <h3>{title}</h3>
      <p className={subtitleClass}>{subtitle}</p>
    </div>
  );
}

export default InfoCard;
