class CurrentLibrary extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      library: []
    }
    this.bindKey = this.bindKey.bind(this);
  }
  componentDidMount() {
    this.getLibrary();
  }

  getLibrary() {
    $.get('/soundLibrary', function (sounds) {
     this.setState({
       library: sounds
     });
   }.bind(this));
 }


  render(){
    return(
      <div>
        <h1> CURRENT LIBRARY </h1>
        <ul>
          {this.state.library.map(function(sound, index){
            return <li key={index}> Name: {sound.name} Link: {sound.soundLink} <button onClick={this.bindKey(index)}> Bind Key </button>
             </li>
          })}
        </ul>
    </div>
    )
  }

}
ReactDOM.render(
  <CurrentLibrary />,
  document.getElementById('currentLib')
);
