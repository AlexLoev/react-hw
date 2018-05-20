class ProgressBar extends React.Component {

  componentDidMount() {
    let procent = ((this.props.completed / this.props.total) * 100).toFixed();
    this.drawProgress(procent);
    
  }
  
  componentWillUpdate(newProps) {
    let procent = ((newProps.completed / newProps.total) * 100).toFixed();
    this.drawProgress(procent);
  }
  drawProgress(procent) {
    var canvas = document.getElementById('progressCanvas');
    var context = canvas.getContext('2d');
    var cw = context.canvas.width / 2;
    var ch = context.canvas.height / 2;
    var diff = (procent / 100) * Math.PI * 2;
    context.clearRect(0, 0, context.canvas.width, context.canvas.height );
    context.beginPath();
    context.arc(cw, ch, 67, 0, 2 * Math.PI, false);
    context.lineWidth = 7;
    context.strokeStyle = '#4ca89a';
    context.stroke();
    context.beginPath();
    context.arc(cw, ch, 60, 0, diff, false);
    context.strokeStyle = '#96d6f4';
    context.stroke();
    context.font = '25pt sans-serif';
    context.textAlign = 'center';
    context.fillText(procent + '%', cw + 5, ch+12);
  }
  
  render() {
    return (
      <canvas id="progressCanvas" className="progress" />
    );
  }
}
