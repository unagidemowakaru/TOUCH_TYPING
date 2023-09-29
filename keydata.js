class KeyData{
// const
	static steps=
	['020','021','022','010','011','012','030','031','032','000','001','002'];
	static keycodes={
		48:'0',49:'1',50:'2',51:'3',52:'4',53:'5',54:'6',55:'7',56:'8',57:'9',
		65:'A',66:'B',67:'C',68:'D',69:'E',70:'F',71:'G',72:'H',73:'I',74:'J',
		75:'K',76:'L',77:'M',78:'N',79:'O',80:'P',81:'Q',82:'R',83:'S',84:'T',
		85:'U',86:'V',87:'W',88:'X',89:'Y',90:'Z',
		/*49:'!',50:'@',51:'#',52:'$',53:'%',54:'^',55:'&',56:'*',57:'(',48:')',*/
		189:'-',187:'=',220:'¥',192:'`',
		219:'[',221:']', 186:';',222:"'", 188:',',190:'.',191:'/'
	};
/*
  189:'-',187:'=',220:'¥',0:'¥',
  219:'@',219:'[', 186:';',186:':',221:']', 188:',',190:'.',191:'/',189:'_'
*/
	static tanes={
		english:
		[['12345','67890-=¥`'],['qwert','yuiop[]'],['asdfg','hjkl;\''],['zxcvb','nm,./']],
		japanese:
		[['12345','67890-^¥'],['qwert','yuiop@['],['asdfg','hjkl;:]'],['zxcvb','nm,./_']],
	};

// function
	constructor() {
		this.level=0;
		this.step=0;
	}
  make(mode,type){
    let gamedata=[];
		this.klang=type;
    if(this.level==1){
      const l=KeyData.steps[this.step].substr(1,1);
      const n=KeyData.steps[this.step].slice(-1);
      let tanestr='';
      if(n==0||n==1){tanestr=KeyData.tanes[this.klang][l][n];}
      else{tanestr=KeyData.tanes[this.klang][l][0]+KeyData.tanes[this.klang][l][1];}
      let strary='';
      const max1=(mode=='DBG')?1:3;
			for(let i=0;i<max1;i++){
				let tmpstr=tanestr;
				let strary='';
				const max2=(mode=='DBG')?1:tanestr.length;
				for(let j=0;j<max2;j++){
					let r,c;
					do{
						r=Math.floor(Math.random() * max2);
						c=tmpstr[r];
					}while(c==' ');
					tmpstr=tmpstr.substr(0,r)+' '+tmpstr.substr(r+1);
					strary+=c;
				}
				gamedata[i]=strary;
			}
			return gamedata;
		}
	}

	charOf(key){
		const keychar=KeyData.keycodes[key];
		return keychar;
	}
}