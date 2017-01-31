import React from 'react';
import Head from './header.jsx';
import ListData from './datas.jsx'
class App extends React.Component{
	constructor(){
		super();
		this.state= {
			data:""
	};
	};
	componentDidMount() {
	    $.ajax({
	      url: './dataList.json',
	      dataType: 'json',
	      cache: false,

	      success: function(data) {
	        this.setState({data: data});

	      }.bind(this),
	      error: function(xhr, status, err) {
	        console.error(this.props.url, status, err.toString());
	      }.bind(this)

	    })
	    
	  }

	render(){
	return(
		<div>
			<Head />
			<ListData child={this.state.data} />
		</div>
	)
	}
}
export default App;