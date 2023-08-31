function Card({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{ width: 100, height: 100, border: '2px solid black' }}
    >
      {label}
    </button>
  );
}

export default Card;
