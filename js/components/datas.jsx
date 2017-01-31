import React from 'react';
let whole;

class ListData extends React.Component
{
	
	 componentDidMount() {
	 	$(document).foundation();


}
	 
	  showContent(){

	  	// for hover 
		  	$('.index').css("background-color","#4d2600")
		  	$('.index').hover(function(){
		  		$(this).css("font-size","22px")
		  	},function(){
		  	$(this).css("font-size","inherit")

	  	})



		  	
	  	let key=this;
	  	let keyName=Object.keys(whole)[key];
	  	let contentKey=Object.keys(whole[keyName]);
	  	let contents=$("#content");
	  	contents.html("");
	  	$($('.index')[key]).css("background-color","#b35900");
	  	let screenSize=$(window).width();
	  	

	  
	   // for menu in small screens
	  	if(screenSize<=640)
	  	{		
	  		$('#topBar').css("display","none");

	  	}

	  	// to display details about the selected dinosaur 


	  	contents.css("display","block");
	  	let heading=$("<h1></h1>").text(keyName).addClass("fonts");
	  	contents.append(heading);
	  	let image=$("<img>").attr('src',whole[keyName][contentKey[contentKey.length-1]]);
	  	contents.append(image);
	  	let div=$('<div></div>').addClass("small-12 columns");
		let table=$("<table></table>").addClass("large-8 columns text-center medium-centered")
  	  	div.append(table);
		$('#content').append(div);
	  	for(let i=0;i<contentKey.length-1;i++){
	  		let col1=$("<td></td>").text(contentKey[i]);
	  		let col2=$("<td></td>").text(whole[keyName][contentKey[i]]);
	  		let row=$("<tr></tr>");
	  		row.append(col1);
	  		row.append(col2);

	  		table.append(row);

	  	}


	  }

	  // for menu bar in small screens

	  hideData(){
	  		let styling=$('#topBar').css("display");
	  		if(styling=="block"){
	  			$('#content').css("display","none");
	  		}
	  		else if(styling=="none"){
	  			$("#content").css("display","block")
	  		}
	  }

	  
	render(){
			let array=[];
			whole=this.props.child;


			
			if(whole!=undefined && whole!=""){

				 let content=Object.keys(whole);
				 let contentKey=Object.keys(whole[content[0]]);

				 // to display content at the beginning

				 let heading=$("<h1></h1>").text(content[0]).addClass("fonts");
	  			 $('#content').append(heading);
	  			 let image=$("<img>").attr('src',whole[content[0]][contentKey[contentKey.length-1	]]);
			  	 $('#content').append(image);
			  	 let div=$('<div></div>').addClass("small-12 columns");
	  			 let table=$("<table></table>").addClass("large-8 columns text-center medium-centered")
			  	  div.append(table);

	  			  $('#content').append(div);
				 for(let i=0;i<contentKey.length-1;i++){	  		
			  		let col1=$("<td></td>").text(contentKey[i]);
			  		let col2=$("<td></td>").text(whole[content[0]][contentKey[i]]);
			  		let row=$("<tr></tr>");
			  		row.append(col1);
			  		row.append(col2);

			  		table.append(row);
			  	}

			  
				let contentHeight=78/content.length+"vh";

				// to create list of dinosaur
				for(let i=0;i<content.length;i++)
				{
					let handle=this.showContent.bind(i);
					array.push(<li className="no-bullet small-offset-1 columns index hover" onClick={handle} style={{height:contentHeight, lineHeight:contentHeight}} key={content[i]}>{content[i]}</li>)
				}
	}

		
	return(
		<div className="no-pad">
			<div className="small-12 medium-4 large-3 columns no-pad">
				<div className="title-bar" onClick={this.hideData} data-responsive-toggle="topBar" data-hide-for="medium">
					  <button className="menu-icon" type="button" id="but" data-toggle="topBar"></button>
					  <div className="title-bar-title" >Menu</div>
				</div>

					<div className="top-bar no-pad" >
					  <div className="top-bar-left">
					    <ul className="dropdown menu"  id="topBar" data-dropdown-menu>
					      {array}
					    </ul>
					  </div>
					    
					  </div>
		</div>			  
			<div className="large-9 small-12 medium-8 columns text-center contentStyle " style={{height:"78vh"}} id="content"></div>
		</div>

	
	)
	}
}

export default ListData;