
class Machine extends React.Component {
  render() {
    const { s1, s2, s3 } = this.props;
    const winner = (s1 === s2) && (s2 === s3);

    return (
      <div className="Machine">
        <p>{s1} {s2} {s3}</p>
        <p style={{fontSize: '55px' }}>{winner ? 'Winner!' : 'Loser!'}</p>
      </div>
    )
  }
}