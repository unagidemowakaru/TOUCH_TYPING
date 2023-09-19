class KeyBoard {
// const
	static keys={
		english:
		[ {k000:"1",k001:"2",k002:"3",k003:"4",k004:"5",k005:"6",k006:"7",k007:"8",k008:"9",k009:"0",k010:"-",k011:"=",k012:"\\",k013:"`"},
			{k19:"",k100:"Q",k101:"W",k102:"E",k103:"R",k104:"T",k105:"Y",k106:"U",k107:"I",k108:"O",k109:"P",k110:"[",k111:"]",k112:"¥"},
			{k29:"",k200:"A",k201:"S",k202:"D",k203:"F",k204:"G",k205:"H",k206:"J",k207:"K",k208:"L",k209:";",k210:"'"},
			{k39:"",k300:"Z",k301:"X",k302:"C",k303:"V",k304:"B",k305:"N",k306:"M",k307:",",k308:".",k309:"/"},
			{shiftl:"Shift",k49:"",space:" ",k59:"",shiftr:"Shift"}],
		japanese:
		[ {k000:"1",k001:"2",k002:"3",k003:"4",k004:"5",k005:"6",k006:"7",k007:"8",k008:"9",k009:"0",k010:"-",k011:"^",k012:"¥"},
			{k19:"",k100:"Q",k101:"W",k102:"E",k103:"R",k104:"T",k105:"Y",k106:"U",k107:"I",k108:"O",k109:"P",k110:"@",k111:"["},
			{k29:"",k200:"A",k201:"S",k202:"D",k203:"F",k204:"G",k205:"H",k206:"J",k207:"K",k208:"L",k209:";",k210:"]"},
			{k39:"",k300:"Z",k301:"X",k302:"C",k303:"V",k304:"B",k305:"N",k306:"M",k307:",",k308:".",k309:"/",k310:"\\"},
			{shiftl:"Shift",k49:"",space:" ",k59:"",shiftr:"Shift"}]
	};
// function
	constructor() {
		this.type = null;
		this.constructorkeys();
	}
	constructorkeys(){
	}
	create(type) {
		this.klang = type;
		// const article = $('#mainpage');
		// const d1 = $('<div>',{class:'keyboards'});
		const d1=$('#keyboards');
		d1.html('');
		const ks = KeyBoard.keys[this.klang];
		for(const keyl of ks){
			const d2 = $('<div>',{class:'keyboard'});
			for(const keyi in keyl){
				if(keyi.length==3) // space
					d2.append( $('<div>',{id:keyi}) );
				else if(keyi.length==4) // Normail Key
					d2.append( $('<div>',{text:keyl[keyi],id:keyi,class:"key nkey"}) );
				else if(keyi.length==6) // Normail Key
					d2.append( $('<div>',{text:keyl[keyi],id:keyi,class:"key shkey"}) );
				else if(keyi=='space') // Space Key
					d2.append( $('<div>',{text:keyl[keyi],id:keyi,class:"key"}) );
				else
					d2.append( $('<div>',{text:keyl[keyi],id:keyi}) );
			}
			d1.append(d2);
		}
		// article.html(d1);
	}
}